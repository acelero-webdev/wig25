import { db } from '@/prisma/db';
import React from 'react';
import EditPolicyForm from './EditPolicyForm';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';

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
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error('Sorry, an known error occured.');
        }
    }

    if (!policy) {
        throw new Error(`Unable to find a policy with the id: ${policyId}`);
    }

    return (
        <main className='bg-white p-8 rounded-xl mx-4'>
            <div className='flex flex-row justify-between items-start'>
                <h1 className='text-primary text-3xl mb-4 font-extrabold md:text-4xl'>
                    {policy.name}
                </h1>
                <Link href={`/policies/${policy.id}/view`}>
                    <Button className='bg-accent text-white hover:bg-accent2 hover:text-white font-sans'>
                        <EyeIcon />
                        View
                    </Button>
                </Link>
            </div>
            <EditPolicyForm policy={policy} />
        </main>
    );
}
