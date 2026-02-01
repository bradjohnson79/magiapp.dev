import { useCallback, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Icon } from "@iconify/react";


export function FilterMenu<T extends string>({
    open,
    options,
    value,
    onChange,
    onClose,
}: {
    open: boolean;
    options: { label: string; value: T }[];
    value: T;
    onChange: (v: T) => void;
    onClose: () => void;
}) {
    const menuRef = useRef<HTMLDivElement | null>(null);

    const onDown = useCallback((e: MouseEvent) => {
        const target = e.target as Node;
        const el = menuRef.current;
        if (!el) return;
        if (!el.contains(target)) onClose();
    }, [onClose]);

    useEffect(() => {
        if (!open) return;

        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, [open, onDown]);

    if (!open) return null;

    return (
        <div
            ref={menuRef}
            className="absolute right-0 top-[calc(100%+8px)] z-20 w-44 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-1 shadow-sm"
        >
            {options.map((opt) => {
                const active = opt.value === value;

                return (
                    <Button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                            onChange(opt.value);
                            onClose();
                        }}
                        label={opt.label}
                        rightIcon={active ? <Icon icon="lucide:check" width={16} height={16} /> : undefined}
                        className={[
                            'flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-xs font-semibold transition-colors',
                            active
                                ? 'bg-(--color-surface-soft) text-(--color-foreground)'
                                : 'text-(--color-foreground) hover:bg-(--color-surface-soft)',
                        ].join(' ')}
                    />
                );
            })}
        </div>
    );
}