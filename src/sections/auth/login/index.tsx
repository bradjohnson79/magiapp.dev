'use client'

import { FormProvider } from "@/components/hook-form/FormProvider";
import { RHFTextField } from "@/components/hook-form/RHFTextField";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { loginSchema, LoginValues } from "@/validation/auth";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginPageContent() {
    const router = useRouter();
    const { isLoaded, signIn, setActive } = useSignIn();
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const methods = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
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
            await signIn.authenticateWithRedirect({
                strategy: 'oauth_google',
                redirectUrl: '/sso-callback',
                redirectUrlComplete: '/dashboard',
            });
            // Redirect happens → no need to set loading false
        } catch (err) {
            console.error('CLERK GOOGLE SIGNIN ERROR', err);
            toast.error('Google sign-in failed', { description: 'Please try again.' });
            setIsGoogleLoading(false);
        }
    };


    const onSubmit = handleSubmit(async (data) => {
        if (!isLoaded) return;

        try {
            const res = await signIn.create({
                identifier: data.email,
                password: data.password,
            });

            if (res.status === 'complete') {
                await setActive({ session: res.createdSessionId });
                toast.success('Welcome back 👋');
                router.push('/dashboard');
                return;
            }

            if (res.status === 'needs_second_factor') {
                const second = res.supportedSecondFactors?.[0]?.strategy;
                console.log(second)

                if (second === 'email_code') {
                    // send OTP to email
                    await signIn.prepareSecondFactor({ strategy: 'email_code' });

                    toast.message('Verify your sign-in', {
                        description: 'We sent a code to your email.',
                    });

                    router.push('/verify-2fa');
                    return;
                }

                toast.message('Second factor required', {
                    description: second ? `Strategy: ${second}` : 'Continue verification to finish sign-in.',
                });
                router.push('/verify-2fa');
                return;
            }

            if (res.status === 'needs_first_factor' || res.status === 'needs_identifier') {
                toast.message('Continue sign-in', {
                    description: 'More steps are required to finish signing in.',
                });
                return;
            }

            // fallback for anything unexpected
            toast.message('Continue sign-in', { description: `Status: ${res.status}` });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Invalid email or password.';
            toast.error('Login failed', { description: message });
        }
    });
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-20.75" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Login</p>
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
                <RHFTextField name="email" label="Email" type="email" placeholder="Email" autoComplete="email" />
                <RHFTextField name="password" label="Password" type="password" placeholder="Password" autoComplete="current-password" />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? 'Signing in...' : 'Sign in'}
                    leftIcon={isSubmitting ? <Icon icon="line-md:loading-twotone-loop" width={18} height={18} /> : null}
                    className="relative inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-4 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <p className="text-center text-sm">
                    Don&apos;t have an account? <a href="/sign-up" className="font-bold hover:underline">Sign up</a>
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
    )
}