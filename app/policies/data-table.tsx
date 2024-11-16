'use client';

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    VisibilityState,
    SortingState,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import MenuButton from '@/components/MenuButton';
import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import FilterDropdown from '@/components/FilterDropdown';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PlusCircle, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { searchEnumArray } from '@/lib/utils';
import { Policy } from '@prisma/client';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData extends Policy, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = React.useState<string>('');
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            name: false,
            actions: false,
            description: false,
            type: false,
            status: false,
            priority: false,
            reasoning: false,
            businessUnits: false,
            itApplications: false,
            websites: false,
            systems: false,
            products: false,
            legalFrameworks: false,
        });

    useEffect(() => {
        setColumnVisibility(
            window.innerWidth < 400
                ? {
                      description: false,
                      type: false,
                      status: false,
                      priority: false,
                      reasoning: false,
                      businessUnits: false,
                      itApplications: false,
                      websites: false,
                      systems: false,
                      products: false,
                      legalFrameworks: false,
                  }
                : window.innerWidth < 600
                ? {
                      priority: true,
                      description: false,
                      type: false,
                      status: false,
                      reasoning: false,
                      businessUnits: false,
                      itApplications: false,
                      websites: false,
                      systems: false,
                      products: false,
                      legalFrameworks: false,
                  }
                : window.innerWidth < 768
                ? {
                      status: true,
                      priority: true,
                      description: false,
                      type: false,
                      reasoning: false,
                      businessUnits: false,
                      itApplications: false,
                      websites: false,
                      systems: false,
                      products: false,
                      legalFrameworks: false,
                  }
                : {
                      description: false,
                      type: true,
                      status: true,
                      priority: true,
                      reasoning: false,
                      businessUnits: false,
                      itApplications: false,
                      websites: false,
                      systems: false,
                      products: false,
                      legalFrameworks: false,
                  }
        );
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            globalFilter,
        },
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: (row, columnId, filterValue) => {
            const policyRow = row.original;
            const name: string = row.getValue('name');
            const type: string = row.getValue('type');
            const status: string = row.getValue('status');
            const priority: string = row.getValue('priority');
            const description: string = row.getValue('description');
            const reasoning: string = row.getValue('reasoning');

            return (
                searchEnumArray(policyRow.businessScopes, filterValue) ||
                searchEnumArray(policyRow.itApplications, filterValue) ||
                searchEnumArray(policyRow.legalFrameworks, filterValue) ||
                searchEnumArray(policyRow.websites, filterValue) ||
                searchEnumArray(policyRow.systems, filterValue) ||
                searchEnumArray(policyRow.products, filterValue) ||
                name.toLowerCase().includes(filterValue.toLowerCase()) ||
                type.toLowerCase().includes(filterValue.toLowerCase()) ||
                status.toLowerCase().includes(filterValue.toLowerCase()) ||
                priority.toLowerCase().includes(filterValue.toLowerCase()) ||
                description.toLowerCase().includes(filterValue.toLowerCase()) ||
                reasoning.toLowerCase().includes(filterValue.toLowerCase())
            );
        },
    });

    return (
        <div className='rounded-md space-y-8'>
            <div className='w-full flex flex-col-reverse sm:flex-row gap-4'>
                <Input
                    className='bg-white text-black font-sans w-full sm:w-1/3 placeholder:text-neutral-400'
                    placeholder='global policy search'
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <div className='flex gap-3 w-full flex-wrap'>
                    <FilterDropdown
                        title='Type'
                        tableColumnId='type'
                        options={[
                            'SECURITY',
                            'LEGAL',
                            'BREACH',
                            'ACCESSIBILITY',
                            'PRIVACY',
                        ]}
                        setColumnFilters={setColumnFilters}
                    />
                    <FilterDropdown
                        title='Priority'
                        tableColumnId='priority'
                        options={['HIGH', 'MEDIUM', 'LOW']}
                        setColumnFilters={setColumnFilters}
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <MenuButton
                                className='bg-white text-black text-[10px] sm:text-sm'
                                CustomIcon={Settings2}>
                                Columns
                            </MenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className='capitalize'
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }>
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    );
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className='sm:self-end sm:ml-auto'>
                        <Link href='/policies/add'>
                            <Button className='bg-accent text-[10px] sm:text-sm font-sans hover:bg-white hover:text-accent'>
                                <PlusCircle /> New Policy
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Table className='bg-white text-black rounded-xl font-sans'>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className='text-accent'>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className='h-24 text-center'>
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className='flex items-center justify-end space-x-2 py-4'>
                <MenuButton
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    Previous
                </MenuButton>
                <MenuButton
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}>
                    Next
                </MenuButton>
            </div>
        </div>
    );
}
