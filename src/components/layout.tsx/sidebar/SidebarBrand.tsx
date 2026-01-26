import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";

export function SidebarBrand({ collapsed, onClose, onOpen }: { collapsed: boolean; onClose: () => void; onOpen: () => void; }) {
    return (
        <div className={['flex items-center gap-2 px-1 py-1', collapsed ? 'justify-center' : 'justify-between'].join(' ')}>
            {!collapsed ? (
                <>
                    <div className="flex items-center gap-2">
                        <Image src="/images/magi-logo.png" alt="MAGI" width={40} height={20} priority className="h-5 w-10" />
                    </div>

                    <Button
                        type="button"
                        onClick={onClose}
                        label=""
                        leftIcon={<Icon icon="lucide:sidebar-close" width={18} height={18} />}
                        className="grid h-8 w-8 cursor-col-resize place-items-center rounded-lg border border-transparent bg-transparent transition-colors hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)"
                        aria-label="Collapse sidebar"
                    />
                </>
            ) : (
                <Button
                    type="button"
                    onClick={onOpen}
                    label=""
                    className="group relative grid h-10 w-10 place-items-center rounded-lg border border-transparent bg-transparent transition-colors hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)"
                    aria-label="Open sidebar"
                >
                    <span className="absolute inset-0 grid place-items-center opacity-100 transition-opacity group-hover:opacity-0">
                        <Image src="/images/magi-logo.png" alt="MAGI" width={40} height={20} priority className="h-4 w-8" />
                    </span>
                    <span className="absolute inset-0 grid cursor-col-resize place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                        <Icon icon="lucide:sidebar-open" width={18} height={18} />
                    </span>
                </Button>
            )}
        </div>
    );
}