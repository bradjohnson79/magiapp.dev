import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MAGI | Authentication',
    description: 'Sign in or create your MAGI account',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='min-h-screen w-full bg-(--color-background) p-3'>
            <div className='mx-auto grid min-h-[calc(100vh-1.5rem)] w-full grid-cols-1 items-stretch lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div className='w-full max-w-sm'>{children}</div>
                </div>

                <div className='hidden lg:flex items-center justify-center p-3'>
                    <div className='h-full w-full rounded-lg bg-(--color-surface-soft) border border-(--color-surface-muted)' />
                </div>
            </div>
        </main>
    );
}