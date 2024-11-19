import { properCase } from '@/lib/utils/utils';
import { ColumnFiltersState } from '@tanstack/react-table';
import { CircleX } from 'lucide-react';
import React from 'react';

interface FilterChipProps {
    values: string[];
    id: string;
    columnFilters: ColumnFiltersState;
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

export default function FilterChip({
    values,
    id,
    columnFilters,
    setColumnFilters,
}: FilterChipProps) {
    const handleUpdateColumnFilters = (selectedValue: string, id: string) => {
        const updatedColumnFilters = columnFilters.map((filter) => {
            return filter.id === id
                ? {
                      ...filter,
                      value: Array.isArray(filter.value)
                          ? filter.value.filter(
                                (value: string) => value !== selectedValue
                            )
                          : filter.value,
                  }
                : filter;
        });

        setColumnFilters(updatedColumnFilters);
    };

    if (values.length === 0) {
        return null;
    }

    return (
        <div className='flex flex-row flex-wrap justify-center items-center px-3 py-2 gap-2 bg-white text-accent rounded-xl'>
            {values && (
                <>
                    <p className='font-sans font-bold text-[14px] bg-accent text-white rounded-2xl px-4'>
                        {id}
                    </p>
                </>
            )}
            {values.map((value: string) => (
                <div
                    className='flex flex-row gap-2 items-center justify-center mx-2 bg-neutral-200 px-3 text-accent rounded-xl'
                    key={value}>
                    <p className='font-sans text-[14px] font-bold'>
                        {properCase(value)}
                    </p>
                    <CircleX
                        className='w-4 hover:cursor-pointer text-destructive'
                        onClick={() => handleUpdateColumnFilters(value, id)}
                    />
                </div>
            ))}
        </div>
    );
}
