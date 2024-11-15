import React from 'react';
import { db } from '@/prisma/db';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import { columns } from '../columns';
import { DataTable } from '../data-table';

export default async function ViewPoliciesPage() {
    const policies = await db.policy.findMany();

    return (
        <main className='space-y-6 px-8'>
            <div className='text-center space-y-6 flex flex-col'>
                <div className='text-left'>
                    <H2 className='text-2xl md:text-3xl text-accent'>
                        Policy Table
                    </H2>
                    <P className='text-accent2 font-bold text-lg'>
                        Find the policy you need quickly.
                    </P>
                </div>
            </div>

            <DataTable
                columns={columns}
                data={policies}
            />
        </main>
    );
}
