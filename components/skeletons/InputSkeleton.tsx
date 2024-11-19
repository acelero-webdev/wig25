import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function InputSkeleton({ className }: { className?: string }) {
    return (
        <Skeleton
            className={`${className || 'h-8 w-full rounded-xl bg-neutral-300'}`}
        />
    );
}
