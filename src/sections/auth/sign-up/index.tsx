'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { FormProvider } from '@/components/hook-form/FormProvider';
import { RHFTextField } from '@/components/hook-form/RHFTextField';

import { signUpSchema, type SignUpValues } from '@/validation/auth';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@clerk/nextjs';
import { useState } from 'react';
import { toast } from 'sonner';

export function SignUpPageContent() {
    const router = useRouter();
    const { signUp, isLoaded } = useSignUp();
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);


    const methods = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const { handleSubmit, formState } = methods;
    const { isSubmitting } = formState;

    const isBusy = isSubmitting || isGoogleLoading;

    const onGoogle = async () => {
        if (!isLoaded || isBusy) return;

        setIsGoogleLoading(true);
        try {
            await signUp.authenticateWithRedirect({
                strategy: 'oauth_google',
                redirectUrl: '/sso-callback',
                redirectUrlComplete: '/dashboard',
            });
            // NOTE: redirect happens, so no need to set loading false here usually.
        } catch (err) {
            console.error('CLERK GOOGLE SIGNUP ERROR', err);
            setIsGoogleLoading(false);
        }
    };


    const onSubmit = handleSubmit(async (data) => {
        if (!isLoaded) return;

        try {
            const fullName = data.fullName?.trim();
            const parts = fullName ? fullName.split(/\s+/).filter(Boolean) : [];
            const firstName = parts[0] ?? undefined;
            const lastName = parts.length > 1 ? parts.slice(1).join(' ') : undefined;

            await signUp.create({
                emailAddress: data.email,
                password: data.password,
                firstName,
                lastName,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            });

            toast.success('Check your email 📩', {
                description: 'We sent you a verification code.',
            });

            router.push('/verify-email');
        } catch (err: unknown) {
            if (
                typeof err === 'object' &&
                err !== null &&
                'errors' in err &&
                Array.isArray((err).errors)
            ) {
                const clerkError = (err).errors[0];
                const code = clerkError.code as string | undefined;

                switch (code) {
                    case 'form_identifier_exists':
                        toast.error('Email already in use', {
                            description: 'Try logging in instead.',
                        });
                        return;

                    case 'form_invalid_email_address':
                        toast.error('Invalid email', {
                            description: clerkError.message,
                        });
                        return;

                    case 'captcha_missing_token':
                    case 'captcha_invalid':
                        toast.error('Security check failed', {
                            description: 'Please refresh the page and try again.',
                        });
                        return;

                    case 'rate_limit_exceeded':
                        toast.error('Too many attempts', {
                            description: 'Please wait a moment and try again.',
                        });
                        return;

                    default:
                        toast.error('Sign up failed', {
                            description: clerkError.message ?? 'Something went wrong.',
                        });
                        return;
                }
            }

            // 🔥 Fallback (unexpected error)
            toast.error('Sign up failed', {
                description: 'Unexpected error. Please try again.',
            });

            console.error('CLERK SIGNUP ERROR', err);
        }
    });

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-20.75" />
            </div>

            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Create your account</p>

                <Button
                    type="button"
                    onClick={onGoogle}
                    disabled={isBusy}
                    leftIcon={
                        isGoogleLoading ? (
                            <Icon icon="line-md:loading-twotone-loop" width={18} height={18} />
                        ) : (
                            <Icon icon="ant-design:google-outlined" width={18} height={18} />
                        )
                    }
                    label={isGoogleLoading ? 'Connecting...' : 'Continue With Google'}
                    className="flex w-full cursor-pointer items-center justify-center rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 py-2 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted) disabled:cursor-not-allowed disabled:opacity-60"
                />
            </div>

            <Divider text="Or" />

            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-1">
                <RHFTextField name="fullName" label="Full name" placeholder="Full name" autoComplete="name" />
                <RHFTextField name="email" label="Email" type="email" placeholder="Email" autoComplete="email" />
                <RHFTextField name="password" label="Password" type="password" placeholder="Password" autoComplete="new-password" />
                <div id="clerk-captcha" />
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? 'Creating...' : 'Create an account'}
                    leftIcon={isSubmitting ? <Icon icon="line-md:loading-twotone-loop" width={18} height={18} /> : null}
                    className="relative inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-4 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <p className="text-center text-sm">
                    Already have an account? <a href="/login" className="font-bold hover:underline">Login</a>
                </p>
            </FormProvider>

            <Divider />

            <div className="flex justify-start">
                <p className="text-xs">
                    By continue, you agree to the <a href="#" className="font-medium underline">Terms of Services</a> and{' '}
                    <a href="#" className="font-medium underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}