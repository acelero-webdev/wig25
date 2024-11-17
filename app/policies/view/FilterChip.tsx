import { properCase } from '@/lib/utils/utils';
import { ColumnFiltersState } from '@tanstack/react-table';
import { CircleX } from 'lucide-react';
import React from 'react';

interface FilterChipProps {
    value: string;
    id: string;
    columnFilters: ColumnFiltersState;
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

export default function FilterChip({
    value,
    id,
    columnFilters,
    setColumnFilters,
}: FilterChipProps) {
    const handleUpdateColumnFilters = (selectedValue: string, id: string) => {
        console.log('Filter ID: ', id);
        console.log('Filter Value: ', selectedValue);
        console.log('Current Filters: ', columnFilters);

        const updatedColumnFilters = columnFilters.map((filter) => {
            console.log(Array.isArray(filter.value));
            return filter.id === id
                ? {
                      ...filter,
                      value: Array.isArray(filter.value)
                          ? filter.value.filter(
                                (value: string) => value !== selectedValue
                            )
                          : value,
                  }
                : filter;
        });

        setColumnFilters(updatedColumnFilters);
    };

    return (
        <div className='flex flex-row justify-center items-center px-3 py-2 gap-2 bg-white text-accent rounded-xl'>
            <p className='font-sans text-[14px] font-bold'>
                {properCase(value)}
            </p>
            <CircleX
                className='w-4 hover:cursor-pointer text-destructive'
                onClick={() => handleUpdateColumnFilters(value, id)}
            />
        </div>
    );
}
