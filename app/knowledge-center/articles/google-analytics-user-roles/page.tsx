import { H1 } from '@/components/typography/h1';
import { H2 } from '@/components/typography/h2';
import Image from 'next/image';
import React from 'react';

import googleAnalyticImage from '@/public/images/articles/google-analytics-user-roles/google-analytics.png';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const userRoles = [
    {
        role: 'Administrator',
        explanation:
            'Full control of Analytics. Can manage users (add/delete users, assign any role or data restriction). Can grant full permissions to any user, including themselves, for any account or property for which they have this role.',
    },
    {
        role: 'Editor',
        explanation:
            'Full control of settings at the property level. Cannot manage users. Includes permissions of the Analyst role.',
    },
    {
        role: 'Marketer',
        explanation:
            'Can create, edit, and delete audiences, events, and key events. Can edit attribution-model settings.',
    },
    {
        role: 'Analyst',
        explanation:
            'Can share created explorations to other users of the property. Can request unsampled explorations (Google Analytics 360 only).',
    },
    {
        role: 'Viewer',
        explanation:
            'Can see settings and data; can change which data appears in reports (e.g., add comparisons, add a secondary dimension); can see shared assets via the user interface or the APIs. Can create, edit, and delete created explorations.',
    },
    {
        role: 'None',
        explanation:
            'The user has no role for this resource. The user may have a role for another resource.',
    },
];

export default function GoogleAnalyticsUserRoles() {
    return (
        <article className='text-black pb-20 max-w-[1200px] px-8'>
            <H1 className='my-8 text-4xl text-secondary'>
                Managing User Accounts in Google Analytics
            </H1>
            <div className='w-full mb-8'>
                <Image
                    src={googleAnalyticImage}
                    alt='WPEngine account screen.'
                    className='h-80 w-full object-cover object-left-top'
                    quality={100}
                />
            </div>

            <H2 className='my-4 text-2xl bg-accent w-fit px-6 py-2 text-white'>
                Priciple of Least Privilege
            </H2>
            <ul className='text-xl ml-16'>
                <li>
                    At Acelero, we follow the principle of least privilege which
                    states that a user or system entity should only be granted
                    the minimum level of access necessary to perform their
                    required tasks
                </li>
            </ul>

            <H2 className='my-4 text-2xl bg-accent w-fit px-6 py-2 text-white'>
                Key Takeaways
            </H2>
            <ul className='text-xl list-disc ml-16'>
                <li>
                    Avoid adding account level admins unless you ahve a user who
                    needs the highest level of access to all properties in the
                    given account.
                </li>
                <li>
                    Avoid adding account or property level editors as well. This
                    role has the ability to delte the property and has full
                    control over the property level settings.
                </li>
            </ul>

            <H2 className='my-4 text-2xl bg-accent w-fit px-6 py-2 text-white'>
                User Roles and Permissions
            </H2>

            <Table>
                <TableCaption>
                    A list of user roles in Google Analytics.
                </TableCaption>
                <TableHeader>
                    <TableRow className='bg-secondary text-2xl'>
                        <TableHead className='w-fit xl:w-[250px] text-white font-bold'>
                            Role
                        </TableHead>
                        <TableHead className='text-white font-bold'>
                            Permisson
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {userRoles.map(({ role, explanation }) => (
                        <TableRow
                            key={role}
                            className='hover:bg-accent2 hover:text-white'>
                            <TableCell className='text-xl'>
                                {role}{' '}
                                {role === 'Marketer' && (
                                    <span className='text-sm inline bg-secondary px-4 py-1 lg:ml-2 text-white rounded-xl font-bold'>
                                        PREFERRED
                                    </span>
                                )}
                            </TableCell>
                            <TableCell className='text-xl'>
                                {explanation}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    );
}
