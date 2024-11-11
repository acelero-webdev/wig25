'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MenuButton from './MenuButton';
import { LucideIcon, PlusCircle } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

interface FilterDropdownProps {
    title: string;
    CustomIcon?: LucideIcon;
}

export default function FilterDropdown({
    title,
    CustomIcon,
}: FilterDropdownProps) {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
    const [showActivityBar, setShowActivityBar] =
        React.useState<Checked>(false);
    const [showPanel, setShowPanel] = React.useState<Checked>(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuButton CustomIcon={CustomIcon || PlusCircle}>
                    {title}
                </MenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}>
                    Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    disabled>
                    Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}>
                    Panel
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
