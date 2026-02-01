'use client';

import clsx from 'clsx';

type BadgeVariant =
    | 'neutral'   // light gray (draft, default)
    | 'primary'   // blue
    | 'pink'      // ai
    | 'violet'    // perplexity
    | 'dark'      // published / strong
    | 'success'   // future use
    | 'warning';  // future use

type Props = {
    label: string;
    variant?: BadgeVariant;
};

export function Badge({
    label,
    variant = 'neutral',
}: Props) {
    return (
        <span
            className={clsx(
                'inline-flex h-7 items-center rounded-md border px-3 text-xs font-semibold whitespace-nowrap',
                styles[variant]
            )}
        >
            {label}
        </span>
    );
}

/* ---------------------------------- */
/* Color System (Design Tokens) */
/* ---------------------------------- */

const styles: Record<BadgeVariant, string> = {
    /* Default / Draft / Soft */
    neutral:
        'border-(--color-surface-muted) bg-(--color-surface-soft) text-(--color-foreground)',

    /* Main / Human / Primary */
    primary:
        'border-(--color-magic-blue) bg-(--color-soft-blue) text-(--color-foreground)',

    /* AI / Highlight */
    pink:
        'border-(--color-magic-pink) bg-(--color-soft-pink) text-(--color-foreground)',

    /* Knowledge / Perplexity */
    violet:
        'border-(--color-magic-violet) bg-(--color-soft-violet) text-(--color-foreground)',

    /* Published / Strong / Final */
    dark:
        'border-black bg-black text-white',

    /* Optional Future */
    success:
        'border-(--color-accent-green) bg-(--color-accent-green)/15 text-(--color-foreground)',

    warning:
        'border-(--color-accent-orange) bg-(--color-accent-orange)/15 text-(--color-foreground)',
};