'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '@clerk/nextjs';

import { OtpCodeField } from '@/components/auth/OTPCodeField';
import { FormProvider } from '@/components/hook-form/FormProvider';
import { Button } from '@/components/ui/Button';
import { verifyEmailSchema, type VerifyEmailValues } from '@/validation/auth';
import { toast } from 'sonner';

export function VerifyLoginPageContent() {
    const router = useRouter();
    const { isLoaded, signIn, setActive } = useSignIn();
    const [resendLoading, setResendLoading] = useState(false);

    const methods = useForm<VerifyEmailValues>({
        resolver: zodResolver(verifyEmailSchema),
        defaultValues: { code: Array(6).fill('') },
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });

    const { handleSubmit, formState, setError } = methods;
    const { isSubmitting } = formState;

    const onSubmit = handleSubmit(async (data) => {
        if (!isLoaded || !signIn) return;

        const code = data.code.join('');

        try {
            // ✅ login second-factor verify (email_code)
            const res = await signIn.attemptSecondFactor({
                strategy: 'email_code',
                code,
            });

            if (res.status === 'complete') {
                await setActive({ session: res.createdSessionId });
                toast.success('Welcome back 👋');
                router.push('/dashboard');
                return;
            }

            setError('code', { type: 'manual', message: 'Verification incomplete. Try again.' });
        } catch (err: unknown) {
            let message = 'Invalid or expired code. Try again.';

            if (
                typeof err === 'object' &&
                err !== null &&
                'errors' in err &&
                Array.isArray((err as { errors?: unknown }).errors)
            ) {
                const clerkErrors = (err as {
                    errors: { message?: string; longMessage?: string }[];
                }).errors;

                message =
                    clerkErrors[0]?.longMessage ??
                    clerkErrors[0]?.message ??
                    message;
            }

            toast.error('Verification failed', {
                description: message,
            });

            setError('code', {
                type: 'manual',
                message,
            });
        }
    });

    const onResend = async () => {
        if (!isLoaded || !signIn) return;

        setResendLoading(true);
        try {
            // ✅ resend second-factor email code
            await signIn.prepareSecondFactor({ strategy: 'email_code' });
            toast.success('Code resent');
        } catch (err: unknown) {
            toast.error('Failed to resend', { description: getClerkErrorMessage(err) ?? 'Try again.' });
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-20.75" />
            </div>

            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Verify Sign-in</p>
            </div>

            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-3">
                <OtpCodeField />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? 'Verifying...' : 'Verify'}
                    leftIcon={isSubmitting ? <Icon icon="line-md:loading-twotone-loop" width={18} height={18} /> : null}
                    className="relative inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-4 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <Button
                    type="button"
                    onClick={onResend}
                    disabled={resendLoading}
                    label={resendLoading ? 'Resending...' : 'Resend code'}
                    leftIcon={resendLoading ? <Icon icon="line-md:loading-twotone-loop" width={18} height={18} /> : null}
                    className="inline-flex h-10 w-full items-center justify-center rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted) disabled:cursor-not-allowed disabled:opacity-60"
                />
            </FormProvider>
        </div>
    );
}

// ✅ safe error parsing (no any)
function getClerkErrorMessage(err: unknown): string | undefined {
    if (!err || typeof err !== 'object') return undefined;

    if ('errors' in err && Array.isArray((err as { errors?: unknown }).errors)) {
        const first = (err as { errors: Array<{ longMessage?: string; message?: string; code?: string }> }).errors[0];
        return first?.longMessage ?? first?.message;
    }

    if (err instanceof Error) return err.message;
    return undefined;
}