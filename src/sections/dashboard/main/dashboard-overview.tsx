'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import { useEffect, useMemo, useState } from 'react';

const START_SECONDS = 72 * 60 * 60;

function formatCountdown(totalSeconds: number) {
    const s = Math.max(0, totalSeconds);

    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;

    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    return `${hh}H:${mm}M:${ss}S`;
}


export function DashboardOverviewCards() {

    const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);

    useEffect(() => {
        const id = window.setInterval(() => {
            setSecondsLeft((prev) => (prev <= 1 ? START_SECONDS : prev - 1));
        }, 1000);

        return () => window.clearInterval(id);
    }, []);

    const countdownText = useMemo(() => formatCountdown(secondsLeft), [secondsLeft]);
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl lg:w-full">
            {/* Overview */}
            <div className="relative flex flex-col gap-4 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6">
                <div className="flex flex-col gap-3">
                    <p className="text-lg font-bold text-(--color-foreground)">Overview</p>

                    <div className="flex flex-col gap-2 text-sm text-(--color-foreground)">
                        <p>
                            <span className="font-medium">Subscription:</span> <span className="font-semibold">Trial Plan</span>
                        </p>
                        <p>
                            <span className="font-medium">Expire in:</span> <span className="font-semibold">{countdownText}</span>
                        </p>
                    </div>
                </div>

                <div className="pt-2">
                    <Button
                        type="button"
                        label="Manage Subscription"
                        rightIcon={<Icon icon="lucide:arrow-right" width={18} height={18} />}
                        className="inline-flex cursor-pointer h-11 w-full items-center justify-center rounded-md border border-(--color-foreground) bg-(--color-foreground) px-5 text-sm font-semibold text-(--color-background) shadow-sm transition-all hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)]"
                    />
                </div>
            </div>

            {/* Account Status */}
            <div className="relative flex flex-col gap-4 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6">
                <p className="text-lg font-bold text-(--color-foreground)">Account Status</p>

                <div className="flex flex-col gap-3 text-sm text-(--color-foreground)">
                    <p>
                        <span className="font-medium">Plan:</span> <span className="font-semibold">Trial</span>
                    </p>
                    <p>
                        <span className="font-medium">Billing:</span> <span className="font-semibold">Not required yet</span>
                    </p>
                    <p>
                        <span className="font-medium">Access:</span> <span className="font-semibold">Full features enabled</span>
                    </p>
                </div>
            </div>
        </div>
    );
}