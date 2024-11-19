import React from 'react';
import { Skeleton } from '../ui/skeleton';
import HeadingSkeleton from './HeadingSkeleton';
import LabelSkeleton from './LabelSkeleton';
import InputSkeleton from './InputSkeleton';

export default function PolicyTableSkeleton() {
    return (
        <div className='space-y-8'>
            <div className='grid gap-8 grid-cols-12 mt-8'>
                <HeadingSkeleton className='h-6 w-[80px] bg-neutral-300 col-span-12' />
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-8'>
                <HeadingSkeleton className='h-6 w-[80px] bg-neutral-300 col-span-12' />
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-8'>
                <HeadingSkeleton className='h-6 w-[80px] bg-neutral-300 col-span-12' />
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>

                <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-2'>
                    <div className='space-y-2'>
                        <LabelSkeleton />
                        <InputSkeleton />
                    </div>
                </div>
            </div>

            <Skeleton className='h-4 w-[25px] rounded-xl' />
        </div>
    );
}
