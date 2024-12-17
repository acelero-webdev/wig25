import { Tag } from '@prisma/client';
import React, { useState } from 'react';

interface ArticleTagProps {
    tag: Tag;
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export default function ArticleTag({
    tag,
    selectedTags,
    setSelectedTags,
}: ArticleTagProps) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <li
            className={`${
                isSelected ? 'bg-primary' : 'bg-secondary'
            } text-white rounded-xl py-2 px-4 font-semibold hover:cursor-pointer`}
            onClick={() => {
                if (isSelected) {
                    setIsSelected(!isSelected);
                    return setSelectedTags([
                        ...selectedTags.filter(
                            (tagToSearch) => tagToSearch.id !== tag.id
                        ),
                    ]);
                }

                setIsSelected(!isSelected);
                setSelectedTags((prev) => [...prev, tag]);
            }}>
            {tag.tag}
            <span className='bg-white text-secondary ml-4 rounded-full px-1'>
                {tag.searchCount}
            </span>
        </li>
    );
}
