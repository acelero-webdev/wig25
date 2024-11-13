'use server';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { Policy } from '@prisma/client';
import { db } from '@/prisma/db';

export type FormState = {
    message: string;
};

export async function addPolicyAction(data: FormData): Promise<FormState> {
    const formData: Policy = {
        //data.get('type')?.toString() ||
        type: 'ACCESSIBILITY',
        name: data.get('name')?.toString() ?? '',
        description: data.get('description')?.toString() || '',
        //data.get('priority')?.toString() ||
        priority: 'HIGH',
        reasoning: data.get('reasoning')?.toString() || '',
        // data.get('status')?.toString() ||
        status: 'ARCHIVE',
        businessScopes: JSON.parse(
            data.get('businessScopes')?.toString() || ''
        ),
        itApplications: JSON.parse(
            data.get('itApplications')?.toString() || ''
        ),
        websites: JSON.parse(data.get('websites')?.toString() || ''),
        systems: JSON.parse(data.get('systems')?.toString() || ''),
        products: JSON.parse(data.get('products')?.toString() || ''),
        legalFrameworks: JSON.parse(
            data.get('legalFrameworks')?.toString() || ''
        ),
        id: 1,
        link: '',
    };

    const validation = policyFormSchema.safeParse(formData);

    if (!validation.success) {
        return {
            message: 'Invalid form data.',
        };
    }

    // try {
    await db.policy.create({
        data: formData,
    });
    // } catch (error: Error) {
    //     return {
    //         message: error.message,
    //     };
    // }

    return {
        message: 'Policy Added.',
    };
}
