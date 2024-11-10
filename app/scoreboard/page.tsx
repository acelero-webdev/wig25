import { H1 } from '@/components/typography/h1';
import { P } from '@/components/typography/p';
import React from 'react';

export default function ScoreboardPage() {
    return (
        <main className='flex flex-col gap-10 justify-center items-center h-[90%]'>
            <H1 className='text-accent text-5xl font-extrabold min-[900px]:text-6xl'>
                Coming Soon.
            </H1>
            <P className='text-accent2 font-bold text-xl'>Scoreboard Page</P>
        </main>
    );
}
