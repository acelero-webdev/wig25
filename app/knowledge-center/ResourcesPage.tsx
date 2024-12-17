'use client';

import React, { useState } from 'react';
import ArticlesGrid from './ArticlesGrid';
import ArticleTags from './ArticleTags';
import SearchBar from './SearchBar';
import { Tag } from '@prisma/client';
import useSWR from 'swr';

interface ResourcesPageProps {
    defaultTags: Tag[];
}

export default function ResourcesPage({ defaultTags }: ResourcesPageProps) {
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState(defaultTags);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const { data: articles, error } = useSWR(
        ['/api/articles', selectedTags],
        async ([url, selectedTags]) => {
            const tagQuery = selectedTags.map((tag) => tag.id).toString();
            const res = await fetch(
                `http://localhost:3000${url}${
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

    console.log(articles);

    return (
        <main className='flex flex-col gap-10 justify-center items-center h-[90%] p-8'>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
            <ArticleTags
                tags={tags}
                setTags={setTags}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
            <ArticlesGrid articles={articles || []} />
        </main>
    );
}
