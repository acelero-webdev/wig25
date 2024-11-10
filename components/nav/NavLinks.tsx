'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className='flex flex-row justify-between w-full'>
            <div className='text-accent font-normal text-xl'>
                <Link href='/'>
                    <li
                        className={`hover:font-bold ${
                            pathname === '/' ? ' font-bold' : ''
                        }`}>
                        WIG
                    </li>
                </Link>
            </div>
            <div className='flex flex-row gap-8 text-accent font-normal text-xl'>
                <Link href='/policies'>
                    <li
                        className={`hover:font-bold ${
                            pathname === '/policies' ? 'font-bold' : ''
                        }`}>
                        Policies
                    </li>
                </Link>
                <Link href='/scoreboard'>
                    <li
                        className={`hover:font-bold ${
                            pathname === '/scoreboard' ? ' font-bold' : ''
                        }`}>
                        Scoreboard
                    </li>
                </Link>
            </div>
        </div>
    );
}
