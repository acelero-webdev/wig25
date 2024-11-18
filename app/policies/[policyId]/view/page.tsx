import InfoChip from '@/components/InfoChip';
import MultiInfoChip from '@/components/MultiInfoChip';
import PolicyPriority from '@/components/PolicyPriority';
import StatusIndicator from '@/components/StatusIndicator';
import { Button } from '@/components/ui/button';
import { properCase } from '@/lib/utils/utils';
import { db } from '@/prisma/db';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Separator } from '@/components/ui/separator';

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
        <main className='text-accent space-y-10 px-5'>
            <section className='flex flex-row gap-2 justify-between items-start px-2'>
                <div>
                    <h1 className='text-4xl font-bold text-accent'>
                        {policy.name}
                    </h1>
                    {policy.description && (
                        <p className='text-xl font-bold pl-2'>
                            {policy.description}
                        </p>
                    )}
                </div>
                <div className='flex flex-row gap-2'>
                    <Link href={`/policies/${policy.id}/edit`}>
                        <Button className='bg-accent text-white hover:bg-white hover:text-accent font-sans'>
                            <Pencil />
                            Edit
                        </Button>
                    </Link>
                </div>
            </section>
            <section className='flex flex-col md:flex-row gap-10'>
                <div className='bg-white p-5 rounded-xl space-y-4 w-full md:w-1/2'>
                    <h2 className='text-3xl font-bold mb-5'>Policy Info</h2>
                    <Separator className='bg-accent' />
                    <InfoChip
                        title='Reasoning:'
                        value={policy.reasoning}
                    />
                    <InfoChip
                        title='Policy Type:'
                        value={properCase(policy.type)}
                    />
                    <InfoChip title='Priority Level:'>
                        <PolicyPriority priority={policy.priority} />
                    </InfoChip>
                    <InfoChip title='Status:'>
                        <StatusIndicator status={policy.status} />
                    </InfoChip>
                </div>
                <div className='bg-white p-5 rounded-xl space-y-4 w-full md:w-1/2'>
                    <h2 className='text-3xl font-bold mb-5'>Policy Metadata</h2>
                    <Separator className='bg-accent' />
                    <MultiInfoChip
                        title='Business Units:'
                        values={policy.businessScopes}
                    />
                    <MultiInfoChip
                        title='IT Applications:'
                        values={policy.itApplications}
                    />
                    <MultiInfoChip
                        title='Websites:'
                        values={policy.websites}
                    />
                    <MultiInfoChip
                        title='Systems:'
                        values={policy.systems}
                    />
                    <MultiInfoChip
                        title='Products:'
                        values={policy.products}
                    />
                    <MultiInfoChip
                        title='Legal Frameworks:'
                        values={policy.legalFrameworks}
                    />
                </div>
            </section>
        </main>
    );
}
