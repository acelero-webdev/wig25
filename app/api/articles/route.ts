import { db } from '@/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const selectedTags = searchParams.get('selectedTags');
    const selectedTagIds = selectedTags?.split(',').map((id) => parseInt(id));

    if (selectedTags) {
        const articles = await db.article.findMany({
            include: {
                tags: true,
            },
            where: {
                tags: {
                    some: {
                        id: {
                            in: selectedTagIds,
                        },
                    },
                },
            },
        });

        return NextResponse.json(
            {
                articles,
            },
            {
                status: 200,
            }
        );
    }

    const articles = await db.article.findMany({
        include: {
            tags: true,
        },
        where: {
            tags: {
                some: {},
            },
        },
    });
    return NextResponse.json(
        {
            articles,
        },
        {
            status: 200,
        }
    );
}
