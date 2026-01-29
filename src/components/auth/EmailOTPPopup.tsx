'use client';

import { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/Button';

export function EmailOtpModal({
    open,
    email,
    loading,
    onClose,
    onVerify,
    onResend,
}: {
    open: boolean;
    email: string;
    loading: boolean;
    onClose: () => void;
    onVerify: (code: string) => Promise<void> | void;
    onResend?: () => Promise<void> | void;
}) {
    const [code, setCode] = useState('');

    const canVerify = useMemo(() => code.trim().length === 6 && !loading, [code, loading]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" onClick={onClose}>
            <div className="w-full max-w-md rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-4 shadow-sm" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                    <div className="min-w-0">
                        <p className="text-sm font-bold text-(--color-foreground)">Verify your email</p>
                        <p className="truncate text-xs text-(--color-surface-darker)">Enter the code sent to {email}</p>
                    </div>

                    <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-(--color-surface-muted) bg-(--color-background) hover:bg-(--color-surface-soft)">
                        <Icon icon="lucide:x" width={18} height={18} />
                    </button>
                </div>

                {/* Replace this with your OTP component */}
                <div className="mt-4">
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        inputMode="numeric"
                        placeholder="••••••"
                        className="h-10 w-full rounded-md border border-(--color-surface-muted) bg-(--color-background) px-3 text-sm text-(--color-foreground) outline-none focus:border-(--color-foreground)"
                    />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                    <button type="button" onClick={onResend} className="text-xs font-semibold text-(--color-foreground) hover:underline disabled:opacity-60" disabled={!onResend || loading}>
                        Resend code
                    </button>

                    <Button
                        type="button"
                        disabled={!canVerify}
                        onClick={() => onVerify(code.trim())}
                        label={loading ? 'Verifying...' : 'Verify'}
                        className="relative inline-flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded border border-(--color-foreground) bg-(--color-foreground) px-6 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] disabled:cursor-not-allowed disabled:opacity-60"
                    />
                </div>
            </div>
        </div>
    );
}