import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@radix-ui/react-popover';
import React from 'react';
import UserAvatar from './UserAvatar';
import SignOut from './SignOut';

export default function ProfileMenu() {
    return (
        <Popover>
            <PopoverTrigger>
                <UserAvatar />
            </PopoverTrigger>
            <PopoverContent>
                <SignOut />
            </PopoverContent>
        </Popover>
    );
}
