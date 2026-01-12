import { NextRequest, NextResponse } from 'next/server';
import { getAllBuilds } from '@/lib/db';

// GET /api/builds - Public endpoint to list all builds
export async function GET(request: NextRequest) {
    try {
        const builds = await getAllBuilds();

        // Filter to only show delivered builds publicly (or all if you want)
        // const publicBuilds = builds.filter(b => b.status === 'delivered');

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
