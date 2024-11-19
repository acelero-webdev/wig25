import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function LabelSkeleton({ className }: { className?: string }) {
    return (
        <Skeleton
            className={`${
                className || 'h-3 w-[120px] rounded-full bg-neutral-300'
            }`}
        />
    );
}
