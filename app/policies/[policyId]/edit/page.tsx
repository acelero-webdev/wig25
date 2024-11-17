import { db } from '@/prisma/db';
import React from 'react';
import EditPolicyForm from './EditPolicyForm';

export default async function EditPolicyPage({
    params,
}: {
    params: Promise<{ policyId: string }>;
}) {
    const { policyId } = await params;
    let policy;

    try {
        policy = await db.policy.findUnique({
            where: {
                id: parseInt(policyId),
            },
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error(
            'There was an issue fetching this policy from the database.'
        );
    }

    if (!policy) {
        throw new Error(`Unable to find a policy with the id: ${policyId}`);
    }

    return (
        <main className='bg-white p-8 rounded-xl mx-4'>
            <h1 className='text-accent text-3xl mb-4 font-extrabold md:text-4xl'>
                {policy.name}
            </h1>
            <EditPolicyForm policy={policy} />
        </main>
    );
}
