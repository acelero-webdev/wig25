import NavLinks from '@/components/nav/NavLinks';
import ProfileMenu from '@/components/ProfileMenu';
import React from 'react';

export default function Nav() {
    return (
        <nav className='py-8 px-2 sm:px-8'>
            <ul className='flex flex-row items-center gap-5'>
                <NavLinks />
                <ProfileMenu />
            </ul>
        </nav>
    );
}
