import { properCase } from '@/lib/utils/utils';
import React from 'react';

export default function TableCellList({ data }: { data: string[] }) {
    if (data.length === 1 && data[0] === 'NOT_AVAILABLE') {
        return <p>-</p>;
    }

    return (
        <ul className='flex text-[10px] font-sans flex-wrap gap-2'>
            {data.map((value) => (
                <li
                    className='bg-accent2 text-white font-bold rounded-md px-2 py-1'
                    key={value}>
                    {properCase(value)}
                </li>
            ))}
        </ul>
    );
}
