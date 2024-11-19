import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function ButtonSkeleton({ className }: { className?: string }) {
    return (
        <Skeleton
            className={`${className || 'h-10 w-[80px] bg-neutral-300'}`}
        />
    );
}
