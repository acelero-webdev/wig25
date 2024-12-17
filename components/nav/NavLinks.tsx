'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className='flex flex-row justify-between w-full'>
            <div className='text-primary font-normal text-xl'>
                <Link href='/'>
                    <li
                        className={`hover:font-bold ${
                            pathname === '/' ? ' font-bold' : ''
                        }`}>
                        WIG
                    </li>
                </Link>
            </div>
            <div className='flex flex-row gap-8 text-primary font-normal text-xl'>
                <Link href='/knowledge-center'>
                    <li
                        className={`hover:font-bold ${
                            pathname.startsWith('/knowledge-center')
                                ? 'font-bold'
                                : ''
                        }`}>
                        Knowledge Center
                    </li>
                </Link>

                <Link href='/security'>
                    <li
                        className={`hover:font-bold ${
                            pathname.startsWith('/security') ? 'font-bold' : ''
                        }`}>
                        Security
                    </li>
                </Link>

                <Link href='/policies'>
                    <li
                        className={`hover:font-bold ${
                            pathname.startsWith('/policies') ? 'font-bold' : ''
                        }`}>
                        Policies
                    </li>
                </Link>
                <Link href='/scoreboard'>
                    <li
                        className={`hover:font-bold ${
                            pathname.startsWith('/scoreboard')
                                ? ' font-bold'
                                : ''
                        }`}>
                        Scoreboard
                    </li>
                </Link>
            </div>
        </div>
    );
}
