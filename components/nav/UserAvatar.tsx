import React from 'react';

import { auth } from '@/auth';
import { Skeleton } from '../ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function UserAvatar() {
    const session = await auth();

    if (!session) {
        return <Skeleton className='h-12 w-12 rounded-full' />;
    }

    return (
        <Avatar className='hover:cursor-pointer'>
            <AvatarImage src={session?.user?.image ?? undefined} />
            <AvatarFallback>
                {session?.user?.name?.slice(0, 1) || 'IT'}
            </AvatarFallback>
        </Avatar>
    );
}
