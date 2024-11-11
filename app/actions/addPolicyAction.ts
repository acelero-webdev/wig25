'use server';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { Policy } from '@prisma/client';
import { db } from '@/prisma/db';

export type FormState = {
    message: string;
};

export async function addPolicyAction(data: FormData): Promise<FormState> {
    let formData: Policy = {
        type: data.get('type')?.toString()!,
        name: data.get('name')?.toString()!,
        description: data.get('description')?.toString()!,
        priority: data.get('priority')?.toString()!,
        reasoning: data.get('reasoning')?.toString()!,
        status: data.get('status')?.toString()!,
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
    };

    const validation = policyFormSchema.safeParse(formData);

    if (!validation.success) {
        return {
            message: 'Invalid form data.',
        };
    }

    try {
        await db.policy.create({
            data: formData,
        });
    } catch (error: any) {
        return {
            message: error.message,
        };
    }

    return {
        message: 'Policy Added.',
    };
}
