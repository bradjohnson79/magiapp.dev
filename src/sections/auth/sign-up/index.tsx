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

export function SignUpPageContent() {
    const router = useRouter();
    const { signUp, isLoaded } = useSignUp();

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

    const onSubmit = handleSubmit(async (data) => {
        if (!isLoaded) return;

        try {
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            });

            router.push('/verify-email');
        } catch (err) {
            console.error('CLERK SIGNUP ERROR', err);
        }
    });

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-[83px]" />
            </div>

            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Create your account</p>

                <Button
                    leftIcon={<Icon icon="ant-design:google-outlined" width={18} height={18} />}
                    label="Continue With Google"
                    className="flex w-full cursor-pointer items-center justify-center rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 py-2 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted)"
                />
            </div>

            <Divider text="Or" />

            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-1">
                <RHFTextField name="fullName" label="Full name" placeholder="Full name" autoComplete="name" />
                <RHFTextField name="email" label="Email" type="email" placeholder="Email" autoComplete="email" />
                <RHFTextField name="password" label="Password" type="password" placeholder="Password" autoComplete="new-password" />

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