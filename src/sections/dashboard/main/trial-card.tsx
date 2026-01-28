'use client';

import { Button } from '@/components/ui/Button';

export function TrialPeriodCard() {
    return (
        <div
            className="relative w-full overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) bg-[url('/images/dashboard/trial-bg.png')] bg-cover bg-center bg-no-repeat p-6"
        >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-background/40" />

            <div className="relative z-10 flex flex-col gap-3">
                <p className="text-lg font-bold text-(--color-foreground)">
                    Trial Period
                </p>

                <p className="max-w-xl text-sm text-(--color-surface-darker)">
                    You have 3 days left in free trial. Upgrade now to keep access to MAGI services.
                </p>

                <div className="pt-2">
                    <Button
                        type="button"
                        label="Upgrade Plan"
                        className="inline-flex cursor-pointer h-11 w-fit items-center justify-center rounded-md border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)]" />
                </div>
            </div>
        </div>
    );
}