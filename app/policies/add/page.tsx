import React from 'react';
import AddPolicyForm from './AddPolicyForm';

export default function AddPolicyPage() {
    return (
        <main className='bg-white p-8 rounded-xl mx-4'>
            <h1 className='text-primary text-3xl mb-4 font-extrabold md:text-4xl'>
                Add Policy Form
            </h1>
            <AddPolicyForm />
        </main>
    );
}
