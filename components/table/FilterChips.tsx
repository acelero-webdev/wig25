'use client';

import { ColumnFiltersState } from '@tanstack/react-table';
import React from 'react';
import FilterChip from './FilterChip';
import { CircleX } from 'lucide-react';

interface FilterChipsProps {
    globalFilter: string;
    setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
    columnFilters: ColumnFiltersState;
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

export default function FilterChips({
    globalFilter,
    setGlobalFilter,
    columnFilters,
    setColumnFilters,
}: FilterChipsProps) {
    if (
        // @ts-expect-error - filter.value is of type string[];
        !columnFilters.find((filter) => filter.value.length > 0) &&
        globalFilter === ''
    ) {
        return null;
    }

    return (
        <nav className='flex flex-row gap-4 flex-wrap'>
            {globalFilter && globalFilter !== '' && (
                <div className='flex flex-row justify-center items-center px-3 py-2 gap-2 bg-white text-primary rounded-xl'>
                    <p className='font-sans font-bold text-[14px] bg-accent text-white rounded-2xl px-4'>
                        search
                    </p>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <p className='font-sans text-[14px] font-bold'>
                            {globalFilter}
                        </p>
                        <CircleX
                            className='w-4 hover:cursor-pointer text-destructive'
                            onClick={() => setGlobalFilter('')}
                        />
                    </div>
                </div>
            )}

            {columnFilters.map((filter) => (
                <FilterChip
                    key={filter.id}
                    // @ts-expect-error - filter.value is of type string[];
                    values={filter.value}
                    id={filter?.id}
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                />
            ))}
        </nav>
    );
}
