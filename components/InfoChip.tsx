import React, { ReactNode } from 'react';

interface InfoChipProps {
    children?: ReactNode | undefined;
    title: string;
    value?: string | null;
}

export default function InfoChip({ children, title, value }: InfoChipProps) {
    if (value === null) {
        return null;
    }

    return (
        <div className='text-lg font-sans flex flex-row gap-2 items-center'>
            <span className='text-lg font-bold font-sans'>{title.trim()} </span>
            {children ? children : value}
        </div>
    );
}
