import { Priority } from '@prisma/client';
import React from 'react';

export default function PolicyPriority({ priority }: { priority: Priority }) {
    if (priority === 'LOW') {
        return (
            <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-green-500'></div>
                Low
            </div>
        );
    } else if (priority === 'MEDIUM') {
        return (
            <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400'></div>
                Medium
            </div>
        );
    } else {
        return (
            <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-red-600'></div>
                High
            </div>
        );
    }
}
