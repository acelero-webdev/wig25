import React from 'react';

import { H1 } from '@/components/typography/h1';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import SecurityInfoCard from '../../components/general/InfoCard';

import hippaImage from '@/public/images/hippa.jpg';
import developmentImage from '@/public/images/development.png';
import publicSystemsImage from '@/public/images/public-systems.png';
import legalImage from '@/public/images/legal.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SecurityPage() {
    return (
        <main className='flex flex-col gap-10 items-center h-[90%] mb-3 px-8 sm:px-8'>
            <section className='flex flex-col items-center gap-4'>
                <H1 className='text-accent text-3xl mb-0 font-extrabold md:text-5xl'>
                    Security Package
                </H1>
                <P className='w-full text-accent2 font-bold text-md sm:text-lg md:text-xl md:w-2/3 text-center'>
                    Security is our shared responsibility. This section provides
                    resources and information to help every employee contribute
                    to a secure and resilient work environment.
                </P>
                <Link href='/policies'>
                    <Button className='bg-accent font-sans hover:bg-white hover:text-accent'>
                        View All Policies
                    </Button>
                </Link>
            </section>
            <section className='space-y-8'>
                <H2 className='text-2xl md:text-3xl text-accent text-center'>
                    Select a framework to find out more.
                </H2>
                <div className='grid grid-cols-12 gap-8'>
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='HIPPA'
                        description='HIPAA (Health Insurance Portability and Accountability Act) is a US law that protects the privacy and security of patients health information.'
                        image={hippaImage}
                        imageAlt='HIPPA logo'
                        link='/policies'
                        query={{
                            search: 'HIPAA',
                            priority: ['High'],
                        }}
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Web Development'
                        description={`By working together and adhering to security best practices, we can ensure that our websites and web applications are secure and protected from threats.`}
                        image={developmentImage}
                        imageAlt='An image of all things related to web development'
                        link='/policies'
                        query={{
                            search: 'Web',
                            type: ['Accessibility', 'Privacy'],
                        }}
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Public Systems'
                        description='Quickly view our high prioirty public system policies. These policies safeguard vital public services.'
                        image={publicSystemsImage}
                        imageAlt='Spark Logo'
                        link='/policies'
                        query={{
                            priority: ['High', 'Medium'],
                            businessUnits: [
                                'PUBLIC_SYSTEMS',
                                'SHINE_EARLY_LEARNING',
                            ],
                        }}
                        height='110px'
                        objectPosition='bottom'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Legal'
                        description={`This collaboration bridges the gap between legal and IT, ensuring our technology initiatives are legally sound and our legal frameworks embrace technological advancements.`}
                        image={legalImage}
                        imageAlt='Gavel'
                        link='/policies'
                        query={{
                            priority: ['High', 'Medium'],
                            type: ['Legal'],
                        }}
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Web Development'
                        description={`By working together and adhering to security best practices, we can ensure that our websites and web applications are secure and protected from threats.`}
                        image={developmentImage}
                        imageAlt='An image of all things related to web development'
                        link='/policies'
                        query={{
                            search: 'Web',
                            type: ['Accessibility', 'Privacy'],
                        }}
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Public Systems'
                        description='Quickly view our high prioirty public system policies. These policies safeguard vital public services.'
                        image={publicSystemsImage}
                        imageAlt='Spark Logo'
                        link='/policies'
                        query={{
                            priority: ['HIGH'],
                            businessUnits: [
                                'PUBLIC_SYSTEMS',
                                'SHINE_EARLY_LEARNING',
                            ],
                        }}
                        height='110px'
                        objectPosition='bottom'
                    />
                </div>
            </section>
        </main>
    );
}
