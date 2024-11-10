import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface SecurityCardInfoProps {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    link: string;
    className?: string;
}

export default function SecurityInfoCard({
    title,
    description,
    image,
    imageAlt,
    link,
    className,
}: SecurityCardInfoProps) {
    return (
        <Card className={`font-sans max-w-[400px] mx-auto ${className}`}>
            <CardHeader>
                <CardTitle className='text-center text-xl text-accent2'>
                    {title}
                </CardTitle>
                <CardDescription className='text-center sm:text-left'>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={image}
                    alt={imageAlt}
                    className='mx-auto'
                    quality={100}
                    placeholder='blur'
                    sizes='100vw'
                    style={{
                        width: '55%',
                        height: '100px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                    }}
                />
            </CardContent>
            <CardFooter>
                <Link
                    href={link}
                    className='text-center text-accent font-bold block w-full'>
                    Learn More
                </Link>
            </CardFooter>
        </Card>
    );
}
