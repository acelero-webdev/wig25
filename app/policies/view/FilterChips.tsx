'use client';

import { ColumnFiltersState } from '@tanstack/react-table';
import React from 'react';
import FilterChip from './FilterChip';

interface PolicyFilterChipProps {
    columnFilters: ColumnFiltersState;
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

export default function PolicyFilterChip({
    columnFilters,
    setColumnFilters,
}: PolicyFilterChipProps) {
    // @ts-expect-error - filter.value is of type string[];
    if (!columnFilters.find((filter) => filter.value.length > 0)) {
        return null;
    }

    return (
        <nav className='flex flex-row gap-4'>
            {columnFilters.map((filter) =>
                // @ts-expect-error - filter.value is of type string[];
                filter?.value.map((value: string) => (
                    <FilterChip
                        key={value}
                        value={value}
                        id={filter?.id}
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                ))
            )}
        </nav>
    );
}
