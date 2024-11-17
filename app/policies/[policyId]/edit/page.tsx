import { db } from '@/prisma/db';
import React from 'react';
import EditPolicyForm from './EditPolicyForm';

export default async function EditPolicyPage({
    params,
}: {
    params: Promise<{ policyId: string }>;
}) {
    const { policyId } = await params;
    const policy = await db.policy.findUnique({
        where: { id: parseInt(policyId) },
    });

    if (!policy) {
        return (
            <p>
                Sorry, we were unable to find a policy with the ID: {policyId}
            </p>
        );
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
