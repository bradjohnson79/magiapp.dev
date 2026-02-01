'use client';

import clsx from 'clsx';

type Column<T> = {
    key: string;
    header: string;
    widthClass?: string;
    cell: (row: T) => React.ReactNode;
};

type Props<T> = {
    columns: Column<T>[];
    rows: T[];
    gridClassName: string;
    onRowClick?: (row: T) => void;
    getRowKey?: (row: T, index: number) => string;
    className?: string;
};

export function DataTable<T>({
    columns,
    rows,
    gridClassName,
    onRowClick,
    getRowKey,
    className,
}: Props<T>) {
    const clickable = !!onRowClick;

    return (
        <div
            className={clsx(
                'mt-3 w-full overflow-hidden bg-(--color-background) py-6',
                className
            )}
        >
            {/* Header */}
            <div
                className={clsx(
                    'grid gap-3 border-b border-(--color-surface-muted) px-4 py-3 text-sm font-semibold text-(--color-foreground)',
                    gridClassName
                )}
            >
                {columns.map((col) => (
                    <p key={col.key}>{col.header}</p>
                ))}
            </div>

            {/* Rows */}
            {rows.map((row, index) => {
                const key = getRowKey?.(row, index) ?? String(index);

                const RowTag: React.ElementType = clickable ? 'button' : 'div';

                return (
                    <RowTag
                        key={key}
                        type={clickable ? 'button' : undefined}
                        onClick={clickable ? () => onRowClick?.(row) : undefined}
                        className={clsx(
                            'grid w-full border-b  border-(--color-surface-muted) gap-3 px-4 py-4 text-left transition-colors',
                            gridClassName,
                            clickable && 'hover:bg-(--color-surface-soft)'
                        )}
                    >
                        {columns.map((col) => (
                            <div key={col.key} className="min-w-0 flex items-center">
                                {col.cell(row)}
                            </div>
                        ))}
                    </RowTag>
                );
            })}
        </div>
    );
}