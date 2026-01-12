import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { getBuildById, updateBuild, deleteBuild } from '@/lib/db';

type RouteContext = {
    params: Promise<{ id: string }>;
};

// GET /api/cart-builds/[id] - Get a single build
export async function GET(request: NextRequest, context: RouteContext) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = await context.params;
        const build = await getBuildById(id);

        if (!build) {
            return NextResponse.json(
                { success: false, error: 'Build not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: build,
        });
    } catch (error) {
        console.error('Error fetching build:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch build' },
            { status: 500 }
        );
    }
}

// PUT /api/cart-builds/[id] - Update a build
export async function PUT(request: NextRequest, context: RouteContext) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = await context.params;
        const body = await request.json();

        // Validate status if provided
        const validStatuses = ['blueprint', 'production', 'delivered'];
        if (body.status && !validStatuses.includes(body.status)) {
            return NextResponse.json(
                { success: false, error: 'Invalid status. Must be: blueprint, production, or delivered' },
                { status: 400 }
            );
        }

        const updatedBuild = await updateBuild(id, {
            clientName: body.clientName,
            model: body.model,
            status: body.status,
            price: body.price,
            images: body.images,
            description: body.description,
        });

        if (!updatedBuild) {
            return NextResponse.json(
                { success: false, error: 'Build not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: updatedBuild,
        });
    } catch (error) {
        console.error('Error updating build:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update build' },
            { status: 500 }
        );
    }
}

// DELETE /api/cart-builds/[id] - Delete a build
export async function DELETE(request: NextRequest, context: RouteContext) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = await context.params;
        const deleted = await deleteBuild(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, error: 'Build not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Build deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting build:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete build' },
            { status: 500 }
        );
    }
}
