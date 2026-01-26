import { Icon } from "@iconify/react";
import { NAV_LINKS, NavLink } from ".";

function SheetLink({ item, onClick }: { item: NavLink; onClick: () => void }) {
    const base = 'flex items-center gap-2 rounded-lg border border-(--color-surface-muted) px-2.5 py-2 text-xs font-semibold text-(--color-foreground) transition-colors';
    const variant =
        item.variant === 'soft'
            ? 'bg-(--color-surface-soft) hover:bg-(--color-surface-muted)'
            : 'bg-(--color-background) hover:bg-(--color-surface-soft)';

    return (
        <a href={item.href} onClick={onClick} className={[base, variant].join(' ')}>
            <Icon icon={item.icon} width={16} height={16} />
            {item.label}
        </a>
    );
}

export function NavSheetContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="px-3 pb-4">
            <p className="px-2 pb-2 text-xs font-semibold text-(--color-surface-darker)">Navigation</p>

            <div className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                    <SheetLink key={item.href} item={item} onClick={onClose} />
                ))}
            </div>
        </div>
    );
}