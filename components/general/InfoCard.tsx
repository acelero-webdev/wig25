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
import { Query } from '../../app/policies/page';

interface InfoCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    link: string;
    className?: string;
    query?: Query;
    height?: string;
    objectPosition?: string;
}

export default function InfoCard({
    title,
    description,
    image,
    imageAlt,
    link,
    className,
    query,
    height,
    objectPosition,
}: InfoCardProps) {
    return (
        <Card className={`font-sans max-w-[400px] mx-auto ${className}`}>
            <CardHeader>
                <CardTitle className='text-center text-xl text-primary2'>
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
                        height: height || '100px',
                        objectFit: 'cover',
                        objectPosition: objectPosition || 'top',
                    }}
                />
            </CardContent>
            <CardFooter>
                <Link
                    href={{
                        pathname: link,
                        query,
                    }}
                    className='text-center text-primary font-bold block w-full'>
                    View Policies
                </Link>
            </CardFooter>
        </Card>
    );
}
