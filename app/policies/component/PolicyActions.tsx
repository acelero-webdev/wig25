import React from 'react';

import { Plus, PanelTopOpen } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MenuButton from '@/components/general/MenuButton';
import Link from 'next/link';

export default function PolicyActions() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuButton CustomIcon={PanelTopOpen}>Actions</MenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Policy Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href='/policies/add'>
                    <DropdownMenuItem className='hover:cursor-pointer'>
                        <Plus />
                        <span>Policy</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
