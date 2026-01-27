import { NavItem } from "@/constant/layout";
import { Icon } from "@iconify/react";
import Link from "next/link";


export function SidebarNavItem({ item, active, collapsed }: { item: NavItem; active: boolean; collapsed: boolean }) {
    return (
        <Link
            href={item.href}
            className={[
                'group relative flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors',
                'text-(--color-foreground)',
                active ? 'bg-(--color-surface-soft) border border-(--color-surface-muted)' : 'border border-transparent',
                'hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)',
                collapsed ? 'justify-center' : '',
            ].join(' ')}
            aria-label={collapsed ? item.label : undefined}
        >
            <span className="grid h-7 w-7 place-items-center rounded-md transition-colors group-hover:bg-(--color-surface-soft)">
                <Icon icon={item.icon} width={16} height={16} />
            </span>

            {!collapsed ? <span className="truncate">{item.label}</span> : null}

            {collapsed ? (
                <span
                    className={[
                        'pointer-events-none absolute left-full top-1/2 z-20 ml-2 -translate-y-1/2',
                        'whitespace-nowrap rounded-md border border-(--color-surface-muted) bg-(--color-background) px-2 py-1',
                        'text-[11px] font-semibold text-(--color-foreground) shadow-sm',
                        'opacity-0 transition-opacity group-hover:opacity-100',
                    ].join(' ')}
                >
                    {item.label}
                </span>
            ) : null}
        </Link>
    );
}