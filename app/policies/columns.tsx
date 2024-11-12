'use client';

import PolicyPriority from '@/components/PolicyPriority';
import { Button } from '@/components/ui/button';
import { properCase } from '@/lib/utils';
import { Policy } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import PolicyDropdownMenu from './view/PolicyDropdownMenu';

export const columns: ColumnDef<Policy>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }>
                    Name
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
    },
    {
        accessorKey: 'type',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                    className='hidden sm:flex'>
                    Type
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
        cell: (props) => (
            <div className='hidden sm:table-cell text-center'>
                {properCase(props.getValue() as string)}
            </div>
        ),
        enableColumnFilter: true,
        filterFn: (row, columnId, typeFilters) => {
            if (typeFilters.length === 0) return true;

            const type = row.getValue(columnId);
            return typeFilters.includes(type);
        },
    },
    {
        accessorKey: 'status',
        header: () => (
            <div className='font-bold hidden sm:table-cell'>Status</div>
        ),
        cell: ({ row }) => {
            return (
                <div className='hidden sm:table-cell'>
                    {properCase(row.getValue('status'))}
                </div>
            );
        },
    },
    {
        accessorKey: 'priority',
        header: () => <div className='font-bold'>Priority</div>,
        cell: ({ row }) => {
            return <PolicyPriority priority={row.getValue('priority')} />;
        },
        filterFn: (row, columnId, typeFilters) => {
            if (typeFilters.length === 0) return true;

            const type = row.getValue(columnId);
            return typeFilters.includes(type);
        },
    },
    {
        accessorKey: 'description',
        header: () => (
            <div className='font-bold hidden sm:table-cell max-w-[250px]'>
                Description
            </div>
        ),
        cell: ({ row }) => {
            return (
                <div className='hidden sm:table-cell max-w-[250px]'>
                    {row.getValue('description')}
                </div>
            );
        },
    },
    {
        id: 'actions',
        header: () => <div className='font-bold'>Actions</div>,
        cell: ({ row }) => {
            const policy = row.original;

            return <PolicyDropdownMenu policy={policy} />;
        },
    },
];
