'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';

export type QuickLinkItem = {
    label: string;
    href: string;
    icon: string;
    description?: string;
};

export function DashboardQuickLinks({ items }: { items: QuickLinkItem[] }) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-4 transition-colors hover:bg-(--color-surface-soft)"
                >
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) transition-colors group-hover:bg-(--color-surface-muted)">
                        <Icon icon={item.icon} width={18} height={18} />
                    </span>

                    <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-(--color-foreground)">{item.label}</span>
                        {item.description ? (
                            <span className="mt-0.5 block line-clamp-2 text-xs text-(--color-surface-darker)">{item.description}</span>
                        ) : null}
                    </span>
                </Link>
            ))}
        </div>
    );
}