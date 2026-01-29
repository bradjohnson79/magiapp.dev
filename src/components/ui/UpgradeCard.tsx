'use client';

import { Button } from '@/components/ui/Button';

type UpgradeCardProps = {
    title: string;
    subtitle: string;
    buttonLabel?: string;
    onUpgrade?: () => void;
};

export function UpgradeCard({
    title,
    subtitle,
    buttonLabel = 'Upgrade Plan',
    onUpgrade,
}: UpgradeCardProps) {
    return (
        <div
            className="relative w-full overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) bg-[url('/images/ui-shapes/pub-bg-card.png')] bg-cover bg-center bg-no-repeat p-6"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/40" />

            <div className="relative z-10 flex flex-col gap-3">
                <p className="text-lg font-bold text-(--color-foreground)">
                    {title}
                </p>

                <p className="max-w-xl text-sm text-(--color-surface-darker)">
                    {subtitle}
                </p>

                <div className="pt-2">
                    <Button
                        type="button"
                        label={buttonLabel}
                        onClick={onUpgrade}
                        className="inline-flex h-11 w-fit cursor-pointer items-center justify-center rounded-md border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)]"
                    />
                </div>
            </div>
        </div>
    );
}