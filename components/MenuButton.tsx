import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    CustomIcon?: LucideIcon;
}

const MenuButton: React.FC<MenuButtonProps> = ({
    children,
    CustomIcon,
    ...props
}) => {
    return (
        <Button
            className='bg-white text-black text-xs rounded-md p-2 font-sans hover:bg-accent hover:text-white'
            {...props}>
            {CustomIcon && <CustomIcon />}
            <span>{children}</span>
        </Button>
    );
};

export default MenuButton;
