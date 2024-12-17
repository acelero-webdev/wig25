import { H1 } from '@/components/typography/h1';
import { H2 } from '@/components/typography/h2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import wpengineAccounts from '@/public/images/articles/wpengine-user-roles/wpengine-accounts.png';

export default function WPEngineUserRoles() {
    return (
        <article className='text-black pb-20 max-w-[1200px] px-8'>
            <H1 className='my-8 text-4xl text-secondary'>
                Managing User Accounts in WP Engine
            </H1>
            <div className='w-full mb-8'>
                <Image
                    src={wpengineAccounts}
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
                    Unless a user needs access to several sites or is an
                    internal technical contact they should have the role
                    <Link href='#partial-with-billing'>
                        <span className='text-primary font-bold'>
                            {' '}
                            “Partial with billing”{' '}
                        </span>
                    </Link>
                    or{' '}
                    <Link href='#partial-no-billing'>
                        <span className='text-primary font-bold'>
                            {' '}
                            “Partial no billing”
                        </span>
                    </Link>
                    .
                </li>
                <li>
                    Users with the “Owner” or “Full” role will have access to
                    all projects in the given account.
                </li>
                <li>Limit the number of users with “Owner” or “Full”.</li>
            </ul>

            <H2 className='my-4 text-2xl bg-accent w-fit px-6 py-2 text-white'>
                User Portal Roles
            </H2>

            <h3 className='my-2 text-2xl font-bold ml-16'>Owner</h3>
            <ul className='text-xl list-disc ml-32'>
                <li>
                    Has access to everything in the User Portal, including the
                    ability to delete Sites, move Sites to other accounts,
                    rename an account, close an account, and remove users from
                    the account.
                </li>
                <li>
                    Can initiate and accept Transferable Sites, as well as
                    promote a Transferable to a Billable Site.
                </li>
                <li>
                    This role can purchase the Smart Plugin Manager add on for
                    an account, as well as enable, disable or modify these
                    settings on individual environments.
                </li>
                <li>
                    More information on account ownership can be found here.
                </li>
            </ul>

            <h3 className='my-2 text-2xl font-bold ml-16'>
                Full (with billing)
            </h3>
            <ul className='text-xl list-disc ml-32'>
                <li>
                    Can access the Billing section of the User Portal and make
                    Billing changes, such as purchasing product extensions.
                    However, it cannot delete sites, move sites to other
                    accounts, rename an account, close an account, or remove
                    users from the User Portal.
                </li>
                <li>
                    Can initiate and accept Transferable Sites, as well as
                    promote a Transferable to a Billable Site.
                </li>
                <li>
                    Can enable, disable and modify Smart Plugin Manager on
                    individual environments.
                </li>
            </ul>

            <h3 className='my-2 text-2xl font-bold ml-16'>Full (no billing)</h3>
            <ul className='text-xl list-disc ml-32'>
                <li>
                    Can accept Transferable Sites, but not initiate transfers or
                    promote from Transferable to Billable.
                </li>
                <li>
                    Can enable, disable and modify Smart Plugin Manager on
                    individual environments.
                </li>
                <li>
                    These users only have access to specific environments on the
                    WP Engine plan.
                </li>
            </ul>

            <div
                className='flex items-center gap-4'
                id='partial-with-billing'>
                <h3 className='my-2 text-2xl font-bold ml-16'>
                    Partial (with billing)
                </h3>
                <span className='inline bg-secondary px-4 py-1 text-white rounded-xl font-bold'>
                    PREFERRED
                </span>
            </div>
            <ul className='text-xl list-disc ml-32'>
                <li>Granted access only to specified environments.</li>
                <li>
                    Can access the Billing section of the User Portal and make
                    Billing changes, such as purchasing product extensions.
                </li>
                <li>
                    Can copy and restore between environments they have access
                    to.
                </li>
                <li>
                    Can initiate the transfer of a Transferable Site and promote
                    a Transferable to a billable Site for all environments the
                    user has been granted access to.
                </li>
                <li>
                    Cannot perform any actions related to Smart Plugin Manager.
                </li>
                <li>
                    Cannot create or delete sites, move sites to other accounts,
                    close an account, or remove users from the User Portal.
                </li>
            </ul>

            <div
                className='flex items-center gap-4'
                id='partial-no-billing'>
                <h3 className='my-2 text-2xl font-bold ml-16'>
                    Partial (no billing)
                </h3>
                <span className='inline bg-secondary px-4 py-1 text-white rounded-xl font-bold'>
                    PREFERRED
                </span>
            </div>
            <ul className='text-xl list-disc ml-32'>
                <li>
                    Has all the limitations of “Full (no billing)” but cannot
                    create WordPress environments.
                </li>
                <li>
                    Can only modify an environment that has been designated by
                    the Owner.
                </li>
                <li>
                    Can copy and restore between environments they have access
                    to.
                </li>
                <li>
                    Cannot perform actions related to Transferable Sites or
                    Smart Plugin Manager.
                </li>
            </ul>
        </article>
    );
}
