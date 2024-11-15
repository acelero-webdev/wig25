'use client';

import * as React from 'react';

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
import { ColumnFilter, ColumnFiltersState } from '@tanstack/react-table';
import { useState } from 'react';
import { properCase } from '@/lib/utils';

interface FilterDropdownProps {
    title: string;
    options: string[];
    tableColumnId: string;
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
    CustomIcon?: LucideIcon;
}

export default function FilterDropdown({
    title,
    CustomIcon,
    tableColumnId,
    options,
    setColumnFilters,
}: FilterDropdownProps) {
    const initialState = options.map((option) => ({
        checked: false,
        value: option,
    }));
    const [optionsState, setOptionsState] = useState(initialState);

    const onOptionChecked = (checked: boolean, value: string) => {
        setOptionsState([
            { checked: !checked, value: value },
            ...optionsState.filter((option) => option.value !== value),
        ]);
    };

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
                {optionsState.map(({ checked, value }) => (
                    <DropdownMenuCheckboxItem
                        key={value}
                        checked={checked}
                        onCheckedChange={() => {
                            onOptionChecked(checked, value);
                            setColumnFilters((prev) => {
                                const targetedFilter: ColumnFilter = prev.find(
                                    (filter) => filter.id === tableColumnId
                                ) || { id: 'unknown', value: [] };

                                if (
                                    !targetedFilter ||
                                    !targetedFilter?.value ||
                                    targetedFilter.id === 'unknown'
                                ) {
                                    return prev.concat({
                                        id: tableColumnId,
                                        value: [value],
                                    });
                                }

                                return prev.map((filter) =>
                                    filter.id === tableColumnId
                                        ? {
                                              ...filter,
                                              value:
                                                  Array.isArray(
                                                      targetedFilter?.value
                                                  ) && checked
                                                      ? targetedFilter?.value.filter(
                                                            (
                                                                targetedValue: unknown
                                                            ) =>
                                                                targetedValue !==
                                                                value
                                                        )
                                                      : Array.isArray(
                                                            targetedFilter?.value
                                                        ) &&
                                                        targetedFilter?.value.concat(
                                                            value
                                                        ),
                                          }
                                        : filter
                                );
                            });
                        }}>
                        {properCase(value)}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
