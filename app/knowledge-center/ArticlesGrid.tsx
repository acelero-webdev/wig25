import { H2 } from '@/components/typography/h2';
import React from 'react';
import ArticleCard from './ArticleCard';
import { ArticleWithTag } from './ResourcesPage';

export default function ArticlesGrid({
    articles,
}: {
    articles: ArticleWithTag[];
}) {
    return (
        <div className='flex flex-col w-full'>
            <H2 className='text-2xl font-semibold mb-4 text-primary'>
                Articles
            </H2>
            <div className='grid grid-cols-12 gap-8'>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>
        </div>
    );
}
