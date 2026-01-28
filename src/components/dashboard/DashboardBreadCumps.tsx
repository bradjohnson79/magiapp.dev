'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LabelMap = Record<string, string>;

const DEFAULT_LABELS: LabelMap = {
    dashboard: 'Home',
    profile: 'Profile',
    tokens: 'Tokens',
    support: 'Support',
    settings: 'Settings',
    docs: 'Doc Editor',
    tool: 'Admin Tool',
};

function prettify(seg: string) {
    return seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function DashboardBreadcrumbs({
    labels = DEFAULT_LABELS,
    className = '',
}: {
    labels?: LabelMap;
    className?: string;
}) {
    const pathname = usePathname();

    const segments = pathname.split('/').filter(Boolean);

    // Only show for dashboard routes
    if (segments[0] !== 'dashboard') return null;

    const crumbs = segments.map((seg, idx) => {
        const href = '/' + segments.slice(0, idx + 1).join('/');
        const label = labels[seg] ?? prettify(seg);
        return { href, label };
    });

    return (
        <nav aria-label="Breadcrumb" className={['flex items-center gap-2 text-xs', className].join(' ')}>
            {crumbs.map((c, idx) => {
                const isLast = idx === crumbs.length - 1;

                return (
                    <div key={c.href} className="flex items-center gap-2">
                        {isLast ? (
                            <span className="font-semibold text-(--color-foreground)">{c.label}</span>
                        ) : (
                            <Link href={c.href} className="text-(--color-surface-darker) hover:underline">
                                {c.label}
                            </Link>
                        )}

                        {!isLast ? <span className="text-(--color-surface-darker)">/</span> : null}
                    </div>
                );
            })}
        </nav>
    );
}