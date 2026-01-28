'use client'

import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SidebarProfileMenu({
    collapsed,
    userName,
    role,
    imageUrl,
    initial,
    profileOpen,
    onToggle,
    onLogout,
    profileRef,
}: {
    collapsed: boolean;
    imageUrl?: string | null;
    userName: string;
    role: string;
    initial: string;
    profileOpen: boolean;
    onToggle: () => void;
    onLogout: () => void;
    profileRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div ref={profileRef} className={['relative overflow-visible', collapsed ? 'flex justify-center' : ''].join(' ')}>
            <Button
                type="button"
                onClick={onToggle}
                label=""
                className="grid h-10 w-10 place-items-center rounded-full border border-(--color-surface-muted) bg-(--color-background) transition-colors hover:bg-(--color-surface-soft)"
                aria-label="Open profile menu"
            >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-(--color-soft-blue) text-xs font-bold text-(--color-foreground)">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt=""
                            width={36}
                            height={36}
                            className="h-full w-full object-cover rounded-full"
                        />
                    ) : (
                        initial
                    )}
                </span>
            </Button>

            {profileOpen ? (
                <motion.div
                    initial={{ opacity: 0, x: collapsed ? 6 : 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: collapsed ? 6 : 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={[
                        'absolute z-50 bottom-12 w-56 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-1.5 shadow-sm',
                        collapsed ? 'left-full ml-2 translate-x-0' : 'left-0',
                    ].join(' ')}
                >
                    <div className="px-2 py-1.5">
                        <p className="truncate text-xs font-semibold text-(--color-foreground)">{userName}</p>
                        <p className="truncate text-[11px] text-(--color-surface-darker)">{role}</p>
                    </div>

                    <div className="flex flex-col gap-1">

                        <Button
                            type="button"
                            onClick={onLogout}
                            label="Logout"
                            leftIcon={<Icon icon="solar:logout-2-linear" width={16} height={16} />}
                            className="flex w-full items-center cursor-pointer justify-start gap-2 rounded-lg border border-transparent px-2.5 py-1.5 text-left text-xs font-semibold text-(--color-foreground) transition-colors hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)"
                        />
                    </div>
                </motion.div>
            ) : null}
        </div>
    );
}