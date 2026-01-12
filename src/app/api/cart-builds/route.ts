import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { getAllBuilds, createBuild, searchBuilds } from '@/lib/db';

// GET /api/cart-builds - List all builds or search
export async function GET(request: NextRequest) {
    try {
        // Check authentication
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Check for search query
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        const builds = query ? searchBuilds(query) : getAllBuilds();

        return NextResponse.json({
            success: true,
            data: builds,
        });
    } catch (error) {
        console.error('Error fetching builds:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch builds' },
            { status: 500 }
        );
    }
}

// POST /api/cart-builds - Create a new build
export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();

        // Validate required fields
        if (!body.clientName || !body.model || !body.price) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: clientName, model, price' },
                { status: 400 }
            );
        }

        // Validate status
        const validStatuses = ['blueprint', 'production', 'delivered'];
        if (body.status && !validStatuses.includes(body.status)) {
            return NextResponse.json(
                { success: false, error: 'Invalid status. Must be: blueprint, production, or delivered' },
                { status: 400 }
            );
        }

        const newBuild = createBuild({
            clientName: body.clientName,
            model: body.model,
            status: body.status || 'blueprint',
            price: body.price,
            images: body.images || [],
            description: body.description,
        });

        return NextResponse.json({
            success: true,
            data: newBuild,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating build:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create build' },
            { status: 500 }
        );
    }
}
