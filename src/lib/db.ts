import { createClient, Client } from '@libsql/client';
import { CartBuild, CartBuildStatus } from './types';

// Lazy-initialize Turso client to avoid build-time errors
let db: Client | null = null;

function getDb(): Client {
    if (!db) {
        if (!process.env.TURSO_DATABASE_URL) {
            throw new Error('TURSO_DATABASE_URL environment variable is not set');
        }
        db = createClient({
            url: process.env.TURSO_DATABASE_URL,
            authToken: process.env.TURSO_AUTH_TOKEN,
        });
    }
    return db;
}

// Initialize the database schema
export async function initializeDb() {
    await getDb().execute(`
        CREATE TABLE IF NOT EXISTS cart_builds (
            id TEXT PRIMARY KEY,
            client_name TEXT NOT NULL,
            model TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'blueprint',
            price TEXT NOT NULL,
            images TEXT DEFAULT '[]',
            description TEXT,
            last_updated TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    `);
}
await initializeDb();

// Convert database row to CartBuild object
function rowToCartBuild(row: Record<string, unknown>): CartBuild {
    return {
        id: row.id as string,
        clientName: row.client_name as string,
        model: row.model as string,
        status: row.status as CartBuildStatus,
        price: row.price as string,
        images: JSON.parse((row.images as string) || '[]'),
        description: row.description as string | undefined,
        lastUpdated: row.last_updated as string,
        createdAt: row.created_at as string,
    };
}

// Get all cart builds
export async function getAllBuilds(): Promise<CartBuild[]> {
    const result = await getDb().execute('SELECT * FROM cart_builds ORDER BY created_at DESC');
    return result.rows.map(rowToCartBuild);
}

// Get a single build by ID
export async function getBuildById(id: string): Promise<CartBuild | null> {
    const result = await getDb().execute({
        sql: 'SELECT * FROM cart_builds WHERE id = ?',
        args: [id],
    });
    return result.rows.length > 0 ? rowToCartBuild(result.rows[0]) : null;
}

// Create a new build
export async function createBuild(build: Omit<CartBuild, 'id' | 'createdAt' | 'lastUpdated'>): Promise<CartBuild> {
    const id = generateId();
    const now = new Date().toISOString();

    await getDb().execute({
        sql: `
            INSERT INTO cart_builds (id, client_name, model, status, price, images, description, last_updated, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
            id,
            build.clientName,
            build.model,
            build.status,
            build.price,
            JSON.stringify(build.images || []),
            build.description || null,
            now,
            now,
        ],
    });

    return {
        id,
        ...build,
        images: build.images || [],
        lastUpdated: now,
        createdAt: now,
    };
}

// Update an existing build
export async function updateBuild(id: string, updates: Partial<Omit<CartBuild, 'id' | 'createdAt'>>): Promise<CartBuild | null> {
    const existing = await getBuildById(id);

    if (!existing) {
        return null;
    }

    const now = new Date().toISOString();

    const updatedBuild = {
        ...existing,
        ...updates,
        lastUpdated: now,
    };

    await getDb().execute({
        sql: `
            UPDATE cart_builds
            SET client_name = ?, model = ?, status = ?, price = ?, images = ?, description = ?, last_updated = ?
            WHERE id = ?
        `,
        args: [
            updatedBuild.clientName,
            updatedBuild.model,
            updatedBuild.status,
            updatedBuild.price,
            JSON.stringify(updatedBuild.images),
            updatedBuild.description || null,
            now,
            id,
        ],
    });

    return updatedBuild;
}

// Delete a build
export async function deleteBuild(id: string): Promise<boolean> {
    const result = await getDb().execute({
        sql: 'DELETE FROM cart_builds WHERE id = ?',
        args: [id],
    });
    return result.rowsAffected > 0;
}

// Search builds by client name or model
export async function searchBuilds(query: string): Promise<CartBuild[]> {
    const searchTerm = `%${query}%`;
    const result = await getDb().execute({
        sql: `
            SELECT * FROM cart_builds
            WHERE client_name LIKE ? OR model LIKE ?
            ORDER BY created_at DESC
        `,
        args: [searchTerm, searchTerm],
    });
    return result.rows.map(rowToCartBuild);
}

// Helper to generate unique IDs
function generateId(): string {
    return Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}
