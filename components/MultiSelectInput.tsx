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
    fieldName: string;
    options: Option[];
    label: string;
    required?: boolean;
}

export default function MultiSelectInput({
    form,
    fieldName,
    options,
    label,
    required,
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
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
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
                        id={id}
                        className='mt-2'
                        options={options}
                        isMulti={true}
                        onBlur={onBlur}
                        value={options.filter(
                            (c) => value && value.includes(c.value)
                        )}
                        onChange={(val) => onChange(val.map((c) => c.value))}
                        name={name}
                        ref={ref}
                    />
                </>
            )}
        />
    ) : null;
}
