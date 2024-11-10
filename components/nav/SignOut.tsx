import { signOutAction } from '@/app/actions/signOutAction';
import React from 'react';

export default function SignOut() {
    return (
        <form action={signOutAction}>
            <button
                type='submit'
                className='py-2 px-4 bg-accent rounded-xl font-normal mt-2'>
                Sign Out
            </button>
        </form>
    );
}
