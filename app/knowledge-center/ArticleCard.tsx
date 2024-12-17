import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArticleWithTag } from './ResourcesPage';

export default function ArticleCard({ article }: { article: ArticleWithTag }) {
    return (
        <Card className='col-span-4 h-full'>
            <CardContent className='p-4 flex flex-col gap-3 justify-end h-full'>
                <div className='flex justify-between items-center'>
                    <CardTitle className='text-lg text-secondary'>
                        {article.name}
                    </CardTitle>
                    <span
                        className={`text-black self-baseline ml-4 px-4 py-1 rounded-xl font-thin ${
                            article.internal
                                ? 'bg-secondary text-white'
                                : 'bg-primary text-white'
                        }
                    `}>
                        {article.internal ? 'INTERNAL' : 'EXTERNAL'}
                    </span>
                </div>

                <CardDescription className='text-secondary font-bold'>
                    {article.description}
                </CardDescription>

                <Image
                    src={article.imageURL}
                    alt='article image'
                    width={800}
                    className='h-40 bg-cover'
                    height={800}
                />

                <div className='flex flex-wrap gap-2'>
                    {article.tags.map((tag) => (
                        <span
                            className='bg-secondary text-white rounded-xl px-4 py-1'
                            key={tag.id}>
                            {tag.tag}
                        </span>
                    ))}
                </div>

                <Link
                    href={article.link}
                    target={article.internal ? '_top' : '_blank'}
                    className='self-end mt-auto'>
                    <Button className='text-sm text-white font-semibold hover:bg-accent'>
                        Read Article
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
