import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import { db } from '@/prisma/db';
import React from 'react';
import PolicyActions from './PolicyActions';

export default async function PolicyTable() {
    const policies = await db.policy.findMany({});

    if (policies.length === 0) {
        return (
            <div className='text-center space-y-6 flex flex-col'>
                <div className='text-left'>
                    <H2 className='text-2xl md:text-3xl text-accent'>
                        Policy Table
                    </H2>
                    <P className='text-accent2 font-bold text-lg'>
                        No Policies Found
                    </P>
                </div>

                <div className='flex flex-row justify-between'>
                    <div></div>
                    <PolicyActions />
                </div>
            </div>
        );
    }

    return (
        <div className='text-center space-y-6'>
            <div className='flex flex-row'>
                <H2 className='text-2xl md:text-3xl text-accent text-center'>
                    Policy Table
                </H2>
                <P className='text-accent2 font-bold text-lg'>
                    Find the policy you need quickly.
                </P>
                <PolicyActions />
            </div>
        </div>
    );
}
