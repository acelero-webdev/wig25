import { db } from '@/prisma/db';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function ViewPolicyPage({
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
        <main>
            <section>
                <h1 className='text-3xl font-bold text-accent'>
                    {policy.name}
                </h1>
            </section>
        </main>
    );
}
