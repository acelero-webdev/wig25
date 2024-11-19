import ButtonSkeleton from '@/components/skeletons/ButtonSkeleton';
import HeadingSkeleton from '@/components/skeletons/HeadingSkeleton';
import PolicyTableSkeleton from '@/components/skeletons/PolicyTableSkeleton';

export default function EditPolicyLoadingPage() {
    return (
        <main className='bg-white p-8 rounded-xl mx-4'>
            <div className='flex flex-row justify-between items-start'>
                <HeadingSkeleton />
                <ButtonSkeleton />
            </div>
            <PolicyTableSkeleton />;
        </main>
    );
}
