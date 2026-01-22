'use client'

import { FormProvider } from "@/components/hook-form/FormProvider";
import { RHFTextField } from "@/components/hook-form/RHFTextField";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { loginSchema, LoginValues } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export function LoginPageContent() {
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

    const onSubmit = handleSubmit(async (data) => {
        console.log('LOGIN SUBMIT', data);
    });
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-[83px]" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Login</p>
                <Button
                    leftIcon={<Icon icon="ant-design:google-outlined" width={18} height={18} />}
                    label="Continue With Google"
                    className="flex w-full cursor-pointer items-center justify-center rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 py-2 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted)"
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