import { db } from '@/prisma/db';
import ResourcesPage from './ResourcesPage';

export default async function KnowledgeCenterPage() {
    const tags = await db.tag.findMany({
        include: {
            articles: true,
        },
        where: {
            articles: {
                some: {},
            },
        },
        orderBy: {
            searchCount: 'desc',
        },
        take: 5,
    });

    return <ResourcesPage defaultTags={tags} />;
}
