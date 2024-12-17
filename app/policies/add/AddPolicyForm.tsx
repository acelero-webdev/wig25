'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

import MultiSelectInput from '@/components/form/MultiSelectInput';
import { H2 } from '@/components/typography/h2';
import { P } from '@/components/typography/p';
import { Button } from '@/components/ui/button';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { addPolicyAction } from '@/app/actions/addPolicyAction';
import { useToast } from '@/hooks/use-toast';
import {
    businessScopeOptions,
    itApplicationOptions,
    legalFrameworkOptions,
    productOptions,
    systemOptions,
    websiteOptions,
} from '../../../lib/utils/options';
import { useRouter } from 'next/navigation';
import FormGroup from '@/components/form/FormGroup';
import ControlledFormGroup from '@/components/form/ControlledFormGroup';

export default function AddPolicyForm() {
    const toast = useToast();
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof policyFormSchema>>({
        resolver: zodResolver(policyFormSchema),
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

        if (!response.ok) {
            return toast.toast({
                title: response.message,
                variant: 'destructive',
            });
        }

        form.reset();
        toast.toast({
            title: response.message,
        });

        setTimeout(() => {
            router.push('/policies');
        }, 1000);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='text-neutral-600 space-y-8 font-sans text-sm'
                autoComplete='off'>
                <div className='grid gap-8 grid-cols-12'>
                    <FormGroup
                        form={form}
                        fieldName='name'
                        label='Name'
                        isRequired>
                        <Input placeholder='Policy Name' />
                    </FormGroup>

                    <FormGroup
                        form={form}
                        fieldName='reasoning'
                        label='Policy Reasoning'>
                        <Input placeholder='Reasoning' />
                    </FormGroup>

                    <FormGroup
                        form={form}
                        fieldName='description'
                        label='Policy Description'>
                        <Input placeholder='Description' />
                    </FormGroup>
                </div>

                <div className='grid grid-cols-12 gap-8'>
                    <H2 className='text-xl text-primary2 col-span-12'>
                        Policy Data
                    </H2>
                    <ControlledFormGroup
                        form={form}
                        fieldName='type'
                        label='Policy Type'
                        isRequired>
                        <Select>
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
                                <SelectItem value='LEGAL'>Legal</SelectItem>
                                <SelectItem value='BREACH'>Breach</SelectItem>
                                <SelectItem value='ACCESSIBILITY'>
                                    Accessibility
                                </SelectItem>
                                <SelectItem value='PRIVACY'>Privacy</SelectItem>
                            </SelectContent>
                        </Select>
                    </ControlledFormGroup>

                    <ControlledFormGroup
                        form={form}
                        fieldName='priority'
                        label='Priority'
                        isRequired>
                        <Select>
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
                    </ControlledFormGroup>

                    <ControlledFormGroup
                        form={form}
                        fieldName='status'
                        label='Status'
                        isRequired>
                        <Select>
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
                                <SelectItem value='DRAFT'>Draft</SelectItem>
                                <SelectItem value='TO_BE_DRAFTED'>
                                    To Be Drafted
                                </SelectItem>
                                <SelectItem value='TBD'>TBD</SelectItem>
                                <SelectItem value='ARCHIVE'>Archive</SelectItem>
                            </SelectContent>
                        </Select>
                    </ControlledFormGroup>
                </div>

                <div className='grid grid-cols-12 gap-8'>
                    <H2 className='text-xl text-primary2 col-span-12'>
                        Policy Meta
                    </H2>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                        <MultiSelectInput
                            form={form}
                            options={businessScopeOptions}
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
                            options={itApplicationOptions}
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
                            options={websiteOptions}
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
                            options={systemOptions}
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
                            options={productOptions}
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
                            options={legalFrameworkOptions}
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
                    className='col-span-12 mt-10 bg-accent hover:bg-white hover:text-primary hover:border-2 hover:border-accent'>
                    Submit
                </Button>
            </form>
        </Form>
    );
}
