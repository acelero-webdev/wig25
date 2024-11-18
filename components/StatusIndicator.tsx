import { properCase } from '@/lib/utils/utils';
import { Status } from '@prisma/client';
import React from 'react';

export default function StatusIndicator({ status }: { status: Status }) {
    const colorStatusMap = {
        COMPLETE: 'bg-green-400',
        DRAFT: 'bg-yellow-300',
        TO_BE_DRAFTED: 'bg-yellow-300',
        TBD: 'bg-neutral-400',
        ARCHIVE: 'bg-red-400',
    };

    return (
        <div
            className={`${colorStatusMap[status]} rounded-2xl px-3 py-1 text-white font-bold font-sans flex justify-center items-center`}>
            <p className='text-[14px]'>{properCase(status)}</p>
        </div>
    );
}
