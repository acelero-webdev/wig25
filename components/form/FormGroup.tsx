import React, { JSXElementConstructor, ReactElement } from 'react';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '../ui/form';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface FormGroupProps {
    form: UseFormReturn<z.infer<typeof policyFormSchema>>;
    fieldName: keyof z.infer<typeof policyFormSchema>;
    label: string;
    isRequired?: boolean;
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}

export default function FormGroup({
    form,
    fieldName,
    label,
    isRequired,
    children,
}: FormGroupProps) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                    <FormLabel>
                        {label}
                        {isRequired && (
                            <span className='text-red-600 italic bold ml-1'>
                                *
                            </span>
                        )}
                    </FormLabel>

                    <FormControl>
                        {React.cloneElement(children, {
                            ...field,
                            /* @ts-expect-error - value is unknown but type is input. */
                            value: field.value || '',
                        })}
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
