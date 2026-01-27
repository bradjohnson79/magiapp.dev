'use client';

import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Icon } from '@iconify/react';
import { sideNav } from '@/constant/layout';

function SheetLink({
    item,
    active,
    onClick,
}: {
    item: typeof sideNav[number];
    active: boolean;
    onClick: () => void;
}) {
    const base =
        'flex items-center gap-2 rounded-lg border border-(--color-surface-muted) px-2.5 py-2 text-xs font-semibold text-(--color-foreground) transition-colors';

    const activeCls =
        'bg-(--color-surface-soft) hover:bg-(--color-surface-muted)';

    const normalCls =
        'bg-(--color-background) hover:bg-(--color-surface-soft)';

    return (
        <a
            href={item.href}
            onClick={onClick}
            className={[base, active ? activeCls : normalCls].join(' ')}
        >
            <Icon icon={item.icon} width={16} height={16} />
            {item.label}
        </a>
    );
}

export function NavSheetContent({ onClose }: { onClose: () => void }) {
    const pathname = usePathname();
    const { user } = useUser();

    return (
        <div className="px-3 pb-4">
            <p className="px-2 pb-2 text-xs font-semibold text-(--color-surface-darker)">
                Navigation
            </p>

            <div className="flex flex-col gap-1">
                {sideNav
                    .filter(
                        (item) => !item.role || item.role === (user?.publicMetadata?.role as string)
                    )
                    .map((item) => {
                        const isHome = item.href === '/dashboard';

                        const active = isHome
                            ? pathname === '/dashboard' || pathname === '/dashboard/'
                            : pathname === item.href || pathname.startsWith(item.href + '/');

                        return (
                            <SheetLink
                                key={item.href}
                                item={item}
                                active={active}
                                onClick={onClose}
                            />
                        );
                    })}
            </div>
        </div>
    );
}