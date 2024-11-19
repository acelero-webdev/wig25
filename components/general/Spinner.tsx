'use client';

import React from 'react';
import { P } from '../typography/p';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Spinner({ message }: { message?: string }) {
    return (
        <div className='min-h-[90%] flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <ClipLoader
                    color='#664388'
                    aria-label='Loading Spinner'
                    data-testid='loader'
                />
                <P className='text-accent text-xl'>
                    {message || 'Fetching your data from the database.'}
                </P>
            </div>
        </div>
    );
}
