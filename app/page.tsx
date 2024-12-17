import Image from 'next/image';

import { H1 } from '@/components/typography/h1';
import { P } from '@/components/typography/p';
import wigPerson from '../public/images/wig-person.png';
import wig from '@/public/svg/hair.svg';

export default function Home() {
    return (
        <main className='flex flex-col-reverse gap-10 items-center justify-center h-[90%] p-4 min-[900px]:flex-row'>
            <div className='w-full space-y-3 mx-3 text-center md:w-1/2 min-[900px]:text-left'>
                <H1 className='text-primary text-5xl font-extrabold min-[900px]:text-6xl'>
                    2025 IT WIG
                </H1>
                <P className='text-accent font-bold text-lg'>
                    We will move from working procedures to key network-wide IT
                    privacy and security policies by EOY.
                </P>
                <P className='text-accent font-bold text-xl'>
                    Finance Team, IT Team
                </P>
            </div>
            <div className='w-1/2 relative group/wig'>
                <Image
                    src={wigPerson}
                    alt='Pink wig figure'
                    priority={true}
                />
                <Image
                    src={wig}
                    alt='wig'
                    className='-rotate-6 translate-x-4 duration-300 absolute w-12 top-1 right-1/2 sm:w-16 sm:translate-x-5 sm:top-2 lg:top-0 lg:w-24 lg:-translate-x-8 group-hover/wig:-translate-y-3 '
                />
            </div>
        </main>
    );
}
