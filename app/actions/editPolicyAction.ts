'use server';
import { policyFormSchema } from '@/lib/schemas/PolicySchema';
import { PolicyType, Priority, Status } from '@prisma/client';
import { db } from '@/prisma/db';

export type FormState = {
    message: string;
    ok: boolean;
};

export async function editPolicyAction(
    data: FormData,
    policyId: number
): Promise<FormState> {
    const formData = {
        type: data.get('type')?.toString() as PolicyType,
        name: data.get('name')?.toString() ?? '',
        description: data.get('description')?.toString() || '',
        priority: data.get('priority')?.toString() as Priority,
        reasoning: data.get('reasoning')?.toString() || '',
        status: data.get('status')?.toString() as Status,
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
        link: '',
    };

    const validation = policyFormSchema.safeParse(formData);

    if (!validation.success) {
        return {
            message: 'Invalid form data.',
            ok: false,
        };
    }

    try {
        await db.policy.update({
            where: {
                id: policyId,
            },
            data: formData,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message,
                ok: false,
            };
        } else {
            return { message: 'An unknown error occured.', ok: false };
        }
    }

    return {
        message: 'Policy Updated Successfully.',
        ok: true,
    };
}
