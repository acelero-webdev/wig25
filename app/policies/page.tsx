import React from 'react';
import { db } from '@/prisma/db';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import { columns } from './columns';
import { DataTable } from './data-table';

export type Query = { [key: string]: string | string[] | undefined };

export default async function PoliciesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const policies = await db.policy.findMany();
    const query = await searchParams;

    const getDefaultFilterState = () => {
        return Object.keys(query)
            .filter((queryKey) => queryKey !== 'search')
            .map((queryKey) => ({
                id: queryKey,
                value: Array.isArray(query[queryKey])
                    ? query[queryKey].map((value) => value.toUpperCase())
                    : [query[queryKey]].map((value) =>
                          value ? value.toUpperCase() : undefined
                      ),
            }));
    };

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
                defaultColumnFilterState={getDefaultFilterState()}
                defaultSearchState={
                    Array.isArray(query.search) ? query.search[0] : query.search
                }
            />
        </main>
    );
}
