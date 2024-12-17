'use client';

import { H2 } from '@/components/typography/h2';
import { Tag } from '@prisma/client';
import React from 'react';
import ArticleTag from './ArticleTag';

interface PopularTagsProps {
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export default function ArticleTags({
    tags,
    setTags,
    selectedTags,
    setSelectedTags,
}: PopularTagsProps) {
    return (
        <div className='flex flex-col w-full'>
            <H2 className='text-2xl font-semibold mb-4 text-primary'>
                Popular Tags
            </H2>
            <ul className='flex gap-5 justify-start items-center w-full'>
                {tags.map((tag) => (
                    <ArticleTag
                        key={tag.id}
                        tag={tag}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                ))}
            </ul>
        </div>
    );
}
