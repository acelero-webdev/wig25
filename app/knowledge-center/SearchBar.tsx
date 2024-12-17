'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

interface SearchBarProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
    return (
        <div className='w-full text-3xl text-black relative'>
            <Search className='absolute top-1/2 left-3 -translate-y-1/2' />
            <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className='w-full border-black border-2 pl-12 rounded-full pr-8 py-8 md:text-2xl focus:text-black placeholder:text-neutral-500 focus:border-accent-2 focus-visible:ring-accent-2'
                placeholder='Find Resources'
            />
        </div>
    );
}
