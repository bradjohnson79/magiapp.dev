'use client'

import { useBoolean } from "@/hooks/use-boolean";
import { accountDetailsSchema, AccountDetailsValues } from "@/validation/profile";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { EmailAddressResource } from '@clerk/types';
import { splitName } from "@/lib/utils/help";
import { EmailOtpModal } from "@/components/auth/EmailOTPPopup";
import { FormProvider } from "@/components/hook-form/FormProvider";
import { Button } from "@/components/ui/Button";
import { RHFTextField } from "@/components/hook-form/RHFTextField";

export function EditInfo() {
    const { user, isLoaded } = useUser();

    const saving = useBoolean(false);
    const verifyOpen = useBoolean(false);

    const [pendingEmail, setPendingEmail] = useState<string>('');
    const [pendingEmailAddress, setPendingEmailAddress] = useState<EmailAddressResource | null>(null);

    const role =
        (user?.publicMetadata?.role as string) === 'admin'
            ? 'Admin'
            : 'Member';

    const defaultValues = useMemo<AccountDetailsValues>(() => {
        const fullName =
            user?.fullName ||
            user?.firstName ||
            user?.username ||
            user?.primaryEmailAddress?.emailAddress ||
            '';

        return {
            fullName: fullName || '',
            email: user?.primaryEmailAddress?.emailAddress || '',
            role,
        };
    }, [user, role]);

    const methods = useForm<AccountDetailsValues>({
        resolver: zodResolver(accountDetailsSchema),
        defaultValues,
        mode: 'onChange',
    });

    const { handleSubmit, reset, watch, formState } = methods;
    const { isValid, isDirty } = formState;

    // keep form in sync when user loads
    useEffect(() => {
        if (!isLoaded || !user) return;
        reset(defaultValues);
    }, [isLoaded, user, reset, defaultValues]);

    const currentEmail = user?.primaryEmailAddress?.emailAddress || '';
    const emailInput = watch('email');
    const nameInput = watch('fullName');

    const emailChanged = isLoaded && !!user && emailInput.trim() !== currentEmail.trim();

    const updateNameIfNeeded = async () => {
        if (!user) return;

        // If user didn’t change name, skip
        const existing =
            user.fullName ||
            user.firstName ||
            user.username ||
            user.primaryEmailAddress?.emailAddress ||
            '';

        if (nameInput.trim() === existing.trim()) return;

        const { firstName, lastName } = splitName(nameInput);
        await user.update({ firstName, lastName });
    };

    const startEmailOtpFlow = async () => {
        if (!user) return;

        // 1) create/add the new email address to the user
        const created = await user.createEmailAddress({ email: emailInput.trim() });

        // 2) send OTP code
        await created.prepareVerification({ strategy: 'email_code' });

        setPendingEmail(emailInput.trim());
        setPendingEmailAddress(created);
        verifyOpen.onTrue();
    };

    const onSubmit = handleSubmit(async () => {
        if (!user) return;

        try {
            saving.onTrue();

            // If name changed, update it first (safe + instant)
            await updateNameIfNeeded();

            // If email changed -> OTP popup flow
            if (emailChanged) {
                await startEmailOtpFlow();
                toast.success('Check your email 📩', { description: 'We sent you a verification code.' });
                return;
            }

            toast.success('Saved');
            reset({ ...methods.getValues(), role }); // keep clean "isDirty"
        } catch (err) {
            console.error(err);
            toast.error('Save failed', { description: 'Please try again.' });
        } finally {
            saving.onFalse();
        }
    });

    const onVerifyEmailCode = async (code: string) => {
        if (!user || !pendingEmailAddress) return;

        try {
            saving.onTrue();

            // 3) verify OTP
            const res = await pendingEmailAddress.attemptVerification({ code });

            if (res.verification.status !== 'verified') {
                toast.error('Invalid code', { description: 'Please check the code and try again.' });
                return;
            }

            // 4) set as primary
            await user.update({ primaryEmailAddressId: pendingEmailAddress.id });

            // (optional) cleanup old email(s) if you want
            // Keep it simple for now: don’t auto-delete.

            toast.success('Email updated ✅');
            verifyOpen.onFalse();

            // sync form state with new primary email
            reset({
                fullName: methods.getValues('fullName'),
                email: pendingEmail,
                role,
            });
        } catch (err) {
            console.error(err);
            toast.error('Verification failed', { description: 'Please try again.' });
        } finally {
            saving.onFalse();
        }
    };

    const onCloseVerify = () => {
        // If they close the modal: we keep the typed email (not verified yet).
        verifyOpen.onFalse();
        toast.message('Email not verified yet', { description: 'Click Save again to resend the code.' });
    };

    if (!isLoaded) return null;
    return (
        <>
            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-(--color-foreground)">Account Details</p>

                    <Button
                        type="submit"
                        disabled={!isDirty || !isValid || saving.value}
                        label={saving.value ? 'Saving...' : 'Save'}
                        className="relative inline-flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-6 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                </div>

                <RHFTextField name="fullName" label="Full Name" placeholder="Full name" autoComplete="name" />
                <RHFTextField name="email" label="Email" placeholder="email" type="email" autoComplete="email" />

                {/* Role read-only */}
                <RHFTextField name="role" label="Role" placeholder="Role" disabled />
            </FormProvider>

            <EmailOtpModal
                open={verifyOpen.value}
                email={pendingEmail}
                loading={saving.value}
                onClose={onCloseVerify}
                onVerify={onVerifyEmailCode}
                // optional: resend
                onResend={async () => {
                    if (!pendingEmailAddress) return;
                    try {
                        await pendingEmailAddress.prepareVerification({ strategy: 'email_code' });
                        toast.success('Code resent');
                    } catch (e) {
                        console.error(e);
                        toast.error('Failed to resend');
                    }
                }}
            />
        </>
    )
}