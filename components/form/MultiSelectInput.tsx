'use client';

import { Label } from '@radix-ui/react-label';
import React, { useEffect, useState } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import Select from 'react-select';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { z } from 'zod';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectInputProps {
    form: UseFormReturn<z.infer<typeof policyFormSchema>>;
    fieldName: keyof z.infer<typeof policyFormSchema>;
    options: Option[];
    label: string;
    required?: boolean;
    defaultValue?: Option[];
}

export default function MultiSelectInput({
    form,
    fieldName,
    options,
    label,
    required,
    defaultValue,
}: MultiSelectInputProps) {
    const id = Date.now().toString();
    const [isMounted, setIsMounted] = useState(false);

    // Must be deleted once
    // https://github.com/JedWatson/react-select/issues/5459 is fixed.
    useEffect(() => setIsMounted(true), []);

    return isMounted ? (
        <Controller
            control={form.control}
            name={fieldName}
            render={({ field: { onChange, onBlur, name, ref } }) => (
                <>
                    <Label className='font-sans text-sm'>
                        {label}
                        {required && (
                            <span className='text-red-600 italic bold ml-1'>
                                *
                            </span>
                        )}
                    </Label>
                    <Select
                        defaultValue={defaultValue}
                        id={id}
                        className='mt-2'
                        options={options}
                        isMulti={true}
                        onBlur={onBlur}
                        onChange={(val) => onChange(val.map((c) => c.value))}
                        name={name}
                        ref={ref}
                    />
                </>
            )}
        />
    ) : null;
}
