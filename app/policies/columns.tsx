'use client';

import PolicyPriority from '@/components/PolicyPriority';
import { Button } from '@/components/ui/button';
import { properCase } from '@/lib/utils/utils';
import { Policy } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import PolicyDropdownMenu from './view/PolicyDropdownMenu';
import TableCellList from '@/components/TableCellList';

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
                    className='flex'>
                    Type
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
        cell: (props) => (
            <div className='text-center'>
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
        header: () => <div className='font-bold'>Status</div>,
        cell: ({ row }) => {
            return <div className=''>{properCase(row.getValue('status'))}</div>;
        },
    },
    {
        accessorKey: 'priority',
        header: () => <div className='font-bold'>Priority</div>,
        cell: ({ row }) => {
            return <PolicyPriority priority={row.getValue('priority')} />;
        },
        enableColumnFilter: true,
        filterFn: (row, columnId, typeFilters) => {
            if (typeFilters.length === 0) return true;

            const type = row.getValue(columnId);
            return typeFilters.includes(type);
        },
    },
    {
        accessorKey: 'description',
        header: () => (
            <div className='font-bold max-w-[250px]'>Description</div>
        ),
        cell: ({ row }) => {
            return (
                <div className='max-w-[250px]'>
                    {row.getValue('description') || '-'}
                </div>
            );
        },
    },
    {
        accessorKey: 'reasoning',
        header: () => <div className='font-bold max-w-[250px]'>Reasoning</div>,
        cell: ({ row }) => {
            return (
                <div className='max-w-[250px]'>
                    {row.getValue('reasoning') || '-'}
                </div>
            );
        },
    },
    {
        accessorKey: 'businessUnits',
        header: () => (
            <div className='font-bold max-w-[250px]'>Business Units</div>
        ),
        cell: ({ row }) => {
            return <TableCellList data={row.original.businessScopes} />;
        },
        enableColumnFilter: true,
        filterFn: (row, columnId, typeFilters) => {
            if (typeFilters.length === 0) return true;
            const businessUnits: string[] = row.original.businessScopes;

            return typeFilters.some(
                (filterValue: string) =>
                    businessUnits && businessUnits.includes(filterValue)
            );
        },
    },
    {
        accessorKey: 'itApplications',
        header: () => (
            <div className='font-bold max-w-[250px]'>IT Applications</div>
        ),
        cell: ({ row }) => {
            return <TableCellList data={row.original.itApplications} />;
        },
    },
    {
        accessorKey: 'websites',
        header: () => <div className='font-bold max-w-[250px]'>Websites</div>,
        cell: ({ row }) => {
            return <TableCellList data={row.original.websites} />;
        },
        enableColumnFilter: true,
        filterFn: (row, columnId, typeFilters) => {
            if (typeFilters.length === 0) return true;
            const websites: string[] = row.original.businessScopes;

            return typeFilters.some(
                (filterValue: string) =>
                    websites && websites.includes(filterValue)
            );
        },
    },
    {
        accessorKey: 'systems',
        header: () => <div className='font-bold max-w-[250px]'>Systems</div>,
        cell: ({ row }) => {
            return <TableCellList data={row.original.systems} />;
        },
    },
    {
        accessorKey: 'products',
        header: () => <div className='font-bold max-w-[250px]'>Products</div>,
        cell: ({ row }) => {
            return <TableCellList data={row.original.products} />;
        },
    },
    {
        accessorKey: 'legalFrameworks',
        header: () => (
            <div className='font-bold max-w-[250px]'>Legal Frameworks</div>
        ),
        cell: ({ row }) => {
            return <TableCellList data={row.original.legalFrameworks} />;
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
