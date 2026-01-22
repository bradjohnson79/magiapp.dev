'use client'

import { OtpCodeField } from "@/components/auth/OTPCodeField";
import { FormProvider } from "@/components/hook-form/FormProvider";
import { Button } from "@/components/ui/Button";
import { verifyEmailSchema, VerifyEmailValues } from "@/validation/auth";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function VerifyEmailPageContent() {
    const router = useRouter();
    const { isLoaded, signUp, setActive } = useSignUp();
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
        if (!isLoaded) return;

        const code = data.code.join('');

        try {
            const res = await signUp.attemptEmailAddressVerification({ code });

            if (res.status === 'complete') {
                await setActive({ session: res.createdSessionId });
                router.push('/dashboard'); // change to your dashboard route
                return;
            }

            // if not complete, show a generic error
            setError('code', { type: 'manual', message: 'Invalid code. Try again.' });
        } catch (err: unknown) {
            let message = 'Invalid code. Try again.';

            if (
                typeof err === 'object' &&
                err !== null &&
                'errors' in err &&
                Array.isArray((err as { errors?: unknown }).errors)
            ) {
                const clerkErrors = (err as { errors: { message?: string; longMessage?: string }[] }).errors;
                message = clerkErrors[0]?.longMessage ?? clerkErrors[0]?.message ?? message;
            }

            setError('code', { type: 'manual', message });
        }
    });

    const onResend = async () => {
        if (!isLoaded) return;

        setResendLoading(true);
        try {
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            // optional: toast/snackbar later
        } catch (err) {
            console.error('RESEND CODE ERROR', err);
        } finally {
            setResendLoading(false);
        }
    };
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start">
                <Image src="/images/magi-logo.png" alt="MAGI" width={83} height={83} priority className="h-auto w-[83px]" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <p className="max-w-xl text-xl font-bold lg:text-2xl">Verify Email</p>
            </div>


            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-3">
                <OtpCodeField />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? 'Verifying...' : 'Verify email'}
                    leftIcon={isSubmitting ? <Icon icon="line-md:loading-twotone-loop" width={18} height={18} /> : null}
                    className="relative inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-4 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                />
                <Button
                    type="button"
                    onClick={onResend}
                    disabled={resendLoading}
                    label={resendLoading ? 'Resending...' : 'Resend code'}
                    leftIcon={
                        resendLoading ? (
                            <Icon icon="line-md:loading-twotone-loop" width={18} height={18} />
                        ) : null
                    }
                    className="inline-flex h-10 w-full items-center justify-center rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted) disabled:cursor-not-allowed disabled:opacity-60"
                />
            </FormProvider>
        </div>
    )
}