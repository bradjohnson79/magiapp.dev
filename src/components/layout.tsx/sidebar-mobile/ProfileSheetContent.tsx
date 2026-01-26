import { Icon } from "@iconify/react";

export function ProfileSheetContent({
    userName,
    initial,
    onClose,
    onLogout,
}: {
    userName: string;
    initial: string;
    onClose: () => void;
    onLogout: () => void;
}) {
    return (
        <div className="px-3 pb-4">
            <div className="flex items-center gap-3 rounded-lg border border-(--color-surface-muted) bg-(--color-background) px-3 py-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-(--color-soft-blue) text-xs font-bold text-(--color-foreground)">{initial}</span>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-(--color-foreground)">{userName}</p>
                    <p className="truncate text-[11px] text-(--color-surface-darker)">Account</p>
                </div>
            </div>

            <div className="mt-3 flex flex-col gap-1">
                <a
                    href="/profile"
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-2.5 py-2 text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted)"
                >
                    <Icon icon="solar:user-linear" width={16} height={16} />
                    Profile
                </a>

                <button
                    type="button"
                    onClick={onLogout}
                    className="flex w-full items-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-background) px-2.5 py-2 text-left text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-soft)"
                >
                    <Icon icon="solar:logout-2-linear" width={16} height={16} />
                    Logout
                </button>
            </div>
        </div>
    );
}