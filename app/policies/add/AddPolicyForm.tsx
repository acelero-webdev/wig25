'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@radix-ui/react-select';
import { Input } from '@/components/ui/input';

import MultiSelectInput from '@/components/MultiSelectInput';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import { Button } from '@/components/ui/button';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { addPolicyAction } from '@/app/actions/addPolicyAction';

export default function AddPolicyForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof policyFormSchema>>({
        resolver: zodResolver(policyFormSchema),
        defaultValues: {
            name: '',
            description: '',
            reasoning: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof policyFormSchema>) {
        const formData = new FormData();
        formData.append('type', data.type);
        formData.append('name', data.name);
        formData.append(
            'description',
            data?.description ? data.description : ''
        );
        formData.append('priority', data.priority);
        formData.append('reasoning', data?.reasoning ? data.reasoning : '');
        formData.append('status', data.status);
        formData.append('businessScopes', JSON.stringify(data.businessScopes));
        formData.append('itApplications', JSON.stringify(data.itApplications));
        formData.append('websites', JSON.stringify(data.websites));
        formData.append('systems', JSON.stringify(data.systems));
        formData.append('products', JSON.stringify(data.products));
        formData.append(
            'legalFrameworks',
            JSON.stringify(data.legalFrameworks)
        );

        const response = await addPolicyAction(formData);

        // USE RESPONSE IN UI OR REDIRECT
        return response;
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='text-neutral-600 space-y-8 font-sans text-sm'
                autoComplete='off'>
                <div className='grid gap-8 grid-cols-12'>
                    <H2 className='text-xl text-accent2 col-span-12'>
                        Policy Info
                    </H2>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>
                                    Name
                                    <span className='text-red-600 italic bold ml-1'>
                                        *
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Policy Name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='reasoning'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>Policy Reasoning</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Reasoning'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>Policy Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Description'
                                        {...field}
                                        value={field.value || undefined}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className='grid grid-cols-12 gap-8'>
                    <H2 className='text-xl text-accent2 col-span-12'>
                        Policy Data
                    </H2>
                    <FormField
                        control={form.control}
                        name='type'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>
                                    Policy Type
                                    <span className='text-red-600 italic bold ml-1'>
                                        *
                                    </span>
                                </FormLabel>

                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    {...field}>
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder='Policy Type'
                                            className='text-neutral-600'
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='SECURITY'>
                                            Security
                                        </SelectItem>
                                        <SelectItem value='LEGAL'>
                                            Legal
                                        </SelectItem>
                                        <SelectItem value='BREACH'>
                                            Breach
                                        </SelectItem>
                                        <SelectItem value='ACCESSIBILITY'>
                                            Accessibility
                                        </SelectItem>
                                        <SelectItem value='PRIVACY'>
                                            Privacy
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='priority'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>
                                    Priority
                                    <span className='text-red-600 italic bold ml-1'>
                                        *
                                    </span>
                                </FormLabel>

                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    {...field}>
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder='Priority'
                                            className='text-neutral-600'
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem
                                            value='HIGH'
                                            className='flex items-center'>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-4 h-4 rounded-full bg-red-600'></div>
                                                High
                                            </div>
                                        </SelectItem>
                                        <SelectItem value='MEDIUM'>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-4 h-4 rounded-full bg-yellow-400'></div>
                                                Medium
                                            </div>
                                        </SelectItem>
                                        <SelectItem value='LOW'>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-4 h-4 rounded-full bg-green-500'></div>
                                                Low
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='status'
                        render={({ field }) => (
                            <FormItem className='col-span-12 sm:col-span-6 lg:col-span-4'>
                                <FormLabel>
                                    Status
                                    <span className='text-red-600 italic bold ml-1'>
                                        *
                                    </span>
                                </FormLabel>

                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    {...field}>
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder='Status'
                                            className='text-neutral-600'
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='COMPLETE'>
                                            Complete
                                        </SelectItem>
                                        <SelectItem value='DRAFT'>
                                            Draft
                                        </SelectItem>
                                        <SelectItem value='TO_BE_DRAFTED'>
                                            To Be Drafted
                                        </SelectItem>
                                        <SelectItem value='TBD'>TBD</SelectItem>
                                        <SelectItem value='ARCHIVE'>
                                            Archive
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className='grid grid-cols-12 gap-8'>
                    <H2 className='text-xl text-accent2 col-span-12'>
                        Policy Meta
                    </H2>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'ACELERO_INC',
                                    label: 'Acelero, Inc.',
                                },
                                {
                                    value: 'SHINE_EARLY_LEARNING',
                                    label: 'Shine Early Learning',
                                },
                                {
                                    value: 'ACELERO_LEARNING',
                                    label: 'Acelero Learning',
                                },
                                {
                                    value: 'PUBLIC_SYSTEMS',
                                    label: 'Public Systems',
                                },
                                {
                                    value: 'RFP',
                                    label: 'RFP',
                                },
                                {
                                    value: 'LIMITED',
                                    label: 'Limited',
                                },
                            ]}
                            fieldName='businessScopes'
                            label='Business Scopes'
                            required
                        />
                        <P className='font-normal text-red-600'>
                            {form.formState.errors?.businessScopes?.message}
                        </P>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'CREDIT_CARD_PROCESSING',
                                    label: 'Credit Card Processing',
                                },
                                {
                                    value: 'ONLINE_SALES',
                                    label: 'Online Sales',
                                },
                                {
                                    value: 'WEBSITES',
                                    label: 'Websites',
                                },
                                {
                                    value: 'CYBERSECURITY_INSURANCE',
                                    label: 'Cybersecurity Insurance',
                                },
                                {
                                    value: 'STAFF_CONTRACTOR_AGREEMENTS',
                                    label: 'Staff Contractor Agreements',
                                },
                            ]}
                            fieldName='itApplications'
                            label='IT Applications'
                            required
                        />
                        <P className='font-normal text-red-600'>
                            {form.formState.errors?.itApplications?.message}
                        </P>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'ACELERO_COM',
                                    label: 'acelero.com',
                                },
                                {
                                    value: 'SHINEEARLY_COM',
                                    label: 'shineearly.com',
                                },
                                {
                                    value: 'ACELEROLEARNING_COM',
                                    label: 'acelerolearning.com',
                                },
                                {
                                    value: 'SHINEEARLY_STORE',
                                    label: 'shineearly.store',
                                },
                                {
                                    value: 'YOUNGSTARCONNECT_COM',
                                    label: 'youngstarconnect.com',
                                },
                                {
                                    value: 'SPARKPHILLYPREK_COM',
                                    label: 'sparkphillyprek.com',
                                },
                                {
                                    value: 'INDIANASPARK_COM',
                                    label: 'indianaspark.com',
                                },
                                {
                                    value: 'SPARKMONTANA_COM',
                                    label: 'sparkmontana.com',
                                },
                                {
                                    value: 'PEER_ACELERO_COM',
                                    label: 'peer.acelero.com',
                                },
                            ]}
                            fieldName='websites'
                            label='Websites'
                            required
                        />
                        <P className='font-normal text-red-600'>
                            {form.formState.errors?.websites?.message}
                        </P>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'WORKDAY',
                                    label: 'Workday',
                                },
                                {
                                    value: 'GOOGLE',
                                    label: 'Google',
                                },
                                {
                                    value: 'NETSUITE',
                                    label: 'NetSuite',
                                },
                                {
                                    value: 'CORNERSTONE',
                                    label: 'Cornerstone',
                                },
                                {
                                    value: 'HUBSPOT',
                                    label: 'Hubspot',
                                },
                                {
                                    value: 'AODOCS',
                                    label: 'AODocs',
                                },
                                {
                                    value: 'SHINE_INSIGHT',
                                    label: 'Shine Insight',
                                },
                                {
                                    value: 'PLAYGROUND',
                                    label: 'Playground',
                                },
                            ]}
                            fieldName='systems'
                            label='Systems'
                            required
                        />
                        <P className='font-normal text-red-600'>
                            {form.formState.errors?.systems?.message}
                        </P>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'SHINEINSIGHT_COM',
                                    label: 'Shine Insight',
                                },
                                {
                                    value: 'SHINEHELPCONNECT_COM',
                                    label: 'Shine HELP Connect',
                                },
                                {
                                    value: 'FAMILYAPPLICATION_SHINEINSIGHT_COM',
                                    label: 'Online Family Application',
                                },
                                {
                                    value: 'MYSPARKLEARNINGLAB',
                                    label: 'My Spark Learning Lab',
                                },
                            ]}
                            fieldName='products'
                            label='Products'
                            required
                        />
                        <P className='font-normal text-red-600'>
                            {form.formState.errors?.products?.message}
                        </P>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={[
                                {
                                    value: 'HEADSTART',
                                    label: 'Head Start',
                                },
                                {
                                    value: 'FERPA',
                                    label: 'FERPA',
                                },
                                {
                                    value: 'HIPPA',
                                    label: 'HIPPA',
                                },
                            ]}
                            fieldName='legalFrameworks'
                            label='Legal Frameworks'
                            required
                        />
                        <P className='font-normal font-sans text-red-600'>
                            {form.formState.errors?.legalFrameworks?.message}
                        </P>
                    </div>
                </div>

                <Button
                    type='submit'
                    className='col-span-12 mt-10 bg-accent hover:bg-white hover:text-accent hover:border-2 hover:border-accent'>
                    Submit
                </Button>
            </form>
        </Form>
    );
}
