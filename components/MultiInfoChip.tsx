import { properCase } from '@/lib/utils/utils';
import React from 'react';

interface MultiInfoChipProps {
    title: string;
    values?: string[] | null;
}

export default function MultiInfoChip({ title, values }: MultiInfoChipProps) {
    if (values === null || values === undefined) {
        return null;
    }

    if (values.length === 1 && values[0] === 'NOT_AVAILABLE') {
        return null;
    }

    return (
        <div className='text-lg font-sans flex flex-row flex-wrap gap-2 items-center'>
            <span className='font-bold font-sans'>{title.trim()} </span>
            {values.map((value) => (
                <div
                    key={value}
                    className='flex flex-row justify-center items-center px-2 py-1 gap-2 bg-accent text-white rounded-xl'>
                    <p className='font-sans text-[12px] font-bold'>
                        {properCase(value)}
                    </p>
                </div>
            ))}
        </div>
    );
}
