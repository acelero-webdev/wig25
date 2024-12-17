'use client';

import React, { useState } from 'react';
import ArticlesGrid from './ArticlesGrid';
import ArticleTags from './ArticleTags';
import SearchBar from './SearchBar';
import { Article, Tag } from '@prisma/client';
import useSWR from 'swr';

interface ResourcesPageProps {
    defaultTags: Tag[];
}

export type ArticleWithTag = Article & {
    tags: Tag[];
};

const host =
    process.env.NODE_ENV === 'production'
        ? 'https://wig.shanekobylecky.tech'
        : 'http://localhost:3000';

export default function ResourcesPage({ defaultTags }: ResourcesPageProps) {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const { data: articles, error } = useSWR(
        ['/api/articles', selectedTags],
        async ([url, selectedTags]): Promise<ArticleWithTag[]> => {
            const tagQuery = selectedTags.map((tag) => tag.id).toString();
            const res = await fetch(
                `${host}${url}${
                    selectedTags.length !== 0 ? `?selectedTags=${tagQuery}` : ''
                }`,
                {
                    method: 'GET',
                }
            );
            const { articles } = await res.json();
            return articles;
        }
    );

    if (error) {
        return <p>There was an error in your request.</p>;
    }

    return (
        <main className='flex flex-col gap-10 justify-center items-center h-[90%] p-8'>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
            <ArticleTags
                tags={defaultTags}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
            <ArticlesGrid articles={articles || []} />
        </main>
    );
}
