'use client';

import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ErrorPage({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <main className='flex justify-center items-center min-h-[90%]'>
            <div className='h-fit space-y-4'>
                <h1 className='text-5xl text-accent font-bold text-center'>
                    Oops, we ran into an error.
                </h1>
                <p className='text-xl font-bold text-center text-accent2'>
                    {error.message ||
                        'An unknown error occured please try again.'}
                </p>
                <div className='w-full flex items-center justify-center font-sans'>
                    <Link
                        href='/'
                        className='text-center'>
                        <Button className='bg-accent text-white hover:bg-white hover:text-accent'>
                            <HomeIcon />
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
