import Database from 'better-sqlite3';
import path from 'path';
import { CartBuild, CartBuildStatus } from './types';

// Database file path - stored in project root
const dbPath = path.join(process.cwd(), 'data', 'custom-builds.db');

// Initialize database connection
function getDb() {
    const db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    return db;
}

// Initialize the database schema
export function initializeDb() {
    const db = getDb();

    // Create cart_builds table if it doesn't exist
    db.exec(`
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

    db.close();
}

// Convert database row to CartBuild object
function rowToCartBuild(row: any): CartBuild {
    return {
        id: row.id,
        clientName: row.client_name,
        model: row.model,
        status: row.status as CartBuildStatus,
        price: row.price,
        images: JSON.parse(row.images || '[]'),
        description: row.description,
        lastUpdated: row.last_updated,
        createdAt: row.created_at,
    };
}

// Get all cart builds
export function getAllBuilds(): CartBuild[] {
    const db = getDb();
    const rows = db.prepare('SELECT * FROM cart_builds ORDER BY created_at DESC').all();
    db.close();
    return rows.map(rowToCartBuild);
}

// Get a single build by ID
export function getBuildById(id: string): CartBuild | null {
    const db = getDb();
    const row = db.prepare('SELECT * FROM cart_builds WHERE id = ?').get(id);
    db.close();
    return row ? rowToCartBuild(row) : null;
}

// Create a new build
export function createBuild(build: Omit<CartBuild, 'id' | 'createdAt' | 'lastUpdated'>): CartBuild {
    const db = getDb();
    const id = generateId();
    const now = new Date().toISOString();

    const stmt = db.prepare(`
        INSERT INTO cart_builds (id, client_name, model, status, price, images, description, last_updated, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
        id,
        build.clientName,
        build.model,
        build.status,
        build.price,
        JSON.stringify(build.images || []),
        build.description || null,
        now,
        now
    );

    db.close();

    return {
        id,
        ...build,
        images: build.images || [],
        lastUpdated: now,
        createdAt: now,
    };
}

// Update an existing build
export function updateBuild(id: string, updates: Partial<Omit<CartBuild, 'id' | 'createdAt'>>): CartBuild | null {
    const db = getDb();
    const existing = db.prepare('SELECT * FROM cart_builds WHERE id = ?').get(id);

    if (!existing) {
        db.close();
        return null;
    }

    const now = new Date().toISOString();
    const currentBuild = rowToCartBuild(existing);

    const updatedBuild = {
        ...currentBuild,
        ...updates,
        lastUpdated: now,
    };

    const stmt = db.prepare(`
        UPDATE cart_builds
        SET client_name = ?, model = ?, status = ?, price = ?, images = ?, description = ?, last_updated = ?
        WHERE id = ?
    `);

    stmt.run(
        updatedBuild.clientName,
        updatedBuild.model,
        updatedBuild.status,
        updatedBuild.price,
        JSON.stringify(updatedBuild.images),
        updatedBuild.description || null,
        now,
        id
    );

    db.close();
    return updatedBuild;
}

// Delete a build
export function deleteBuild(id: string): boolean {
    const db = getDb();
    const result = db.prepare('DELETE FROM cart_builds WHERE id = ?').run(id);
    db.close();
    return result.changes > 0;
}

// Search builds by client name or model
export function searchBuilds(query: string): CartBuild[] {
    const db = getDb();
    const searchTerm = `%${query}%`;
    const rows = db.prepare(`
        SELECT * FROM cart_builds
        WHERE client_name LIKE ? OR model LIKE ?
        ORDER BY created_at DESC
    `).all(searchTerm, searchTerm);
    db.close();
    return rows.map(rowToCartBuild);
}

// Helper to generate unique IDs
function generateId(): string {
    return Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

// Ensure database is initialized on module load
try {
    // Create data directory if it doesn't exist
    const fs = require('fs');
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    initializeDb();
} catch (error) {
    console.error('Failed to initialize database:', error);
}
