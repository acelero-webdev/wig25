import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function HeadingSkeleton({ className }: { className?: string }) {
    return (
        <Skeleton
            className={`${className || 'h-10 w-[300px] bg-neutral-300'}`}
        />
    );
}
