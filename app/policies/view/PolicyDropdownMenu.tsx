'use client';

import { Button } from '@/components/ui/button';
import { Policy } from '@prisma/client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { MoreHorizontal, Link2, Pencil } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

export default function PolicyDropdownMenu({ policy }: { policy: Policy }) {
    const { toast } = useToast();
    console.log(policy);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='h-8 w-8 p-0'>
                    <span className='sr-only'>Actions</span>
                    <MoreHorizontal className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='start'
                className='bg-accent text-white p-3 rounded-md space-y-2 font-sans'>
                {policy.link && policy.link !== '' && (
                    <DropdownMenuItem
                        onClick={() => {
                            navigator.clipboard.writeText(policy.link!);
                            toast({
                                title: 'Link Copied Succesfully',
                                className: 'bg-accent text-white',
                            });
                        }}
                        className='hover:text-bold hover:cursor-pointer outline-none flex items-center gap-2'>
                        <Link2 width={16} />
                        Copy Policy Link
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem className='hover:text-bold hover:cursor-pointer outline-none'>
                    <Link
                        href={`/policies/${policy.id}/edit`}
                        className='flex items-center gap-2'>
                        <Pencil width={16} />
                        Edit Policy
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
