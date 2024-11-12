import React from 'react';

import { H1 } from '@/components/typography/h1';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import SecurityInfoCard from './component/SecurityInfoCard';

import hippaImage from '@/public/images/hippa.jpg';
import developmentImage from '@/public/images/development.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PoliciesPage() {
    return (
        <main className='flex flex-col gap-10 items-center h-[90%] mb-3 px-4 sm:px-8'>
            <section className='flex flex-col items-center gap-4'>
                <H1 className='text-accent text-3xl mb-0 font-extrabold md:text-5xl'>
                    Security Package
                </H1>
                <P className='w-full text-accent2 font-bold text-md sm:text-lg md:text-xl md:w-2/3 text-center'>
                    Security is our shared responsibility. This section provides
                    resources and information to help every employee contribute
                    to a secure and resilient work environment.
                </P>
                <Link href='/policies/view'>
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
                        link='/policies/hippa'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='Web Development'
                        description={`By working together and adhering to security best practices, we can ensure that our websites and web applications are secure and protected from threats.`}
                        image={developmentImage}
                        imageAlt='An image of all things related to web development'
                        link='/policies/dev'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='HIPPA'
                        description='HIPAA (Health Insurance Portability and Accountability Act) is a US law that protects the privacy and security of patients health information.'
                        image={hippaImage}
                        imageAlt='HIPPA logo'
                        link='/policies/hippa'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='HIPPA'
                        description='HIPAA (Health Insurance Portability and Accountability Act) is a US law that protects the privacy and security of patients health information.'
                        image={hippaImage}
                        imageAlt='HIPPA logo'
                        link='/policies/hippa'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='HIPPA'
                        description='HIPAA (Health Insurance Portability and Accountability Act) is a US law that protects the privacy and security of patients health information.'
                        image={hippaImage}
                        imageAlt='HIPPA logo'
                        link='/policies/hippa'
                    />
                    <SecurityInfoCard
                        className='col-span-12 sm:col-span-6 lg:col-span-4'
                        title='HIPPA'
                        description='HIPAA (Health Insurance Portability and Accountability Act) is a US law that protects the privacy and security of patients health information.'
                        image={hippaImage}
                        imageAlt='HIPPA logo'
                        link='/policies/hippa'
                    />
                </div>
            </section>
        </main>
    );
}