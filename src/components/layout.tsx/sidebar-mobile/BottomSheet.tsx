import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export function BottomSheet({
    open,
    onClose,
    ariaLabel,
    children,
}: {
    open: boolean;
    onClose: () => void;
    ariaLabel: string;
    children: ReactNode;
}) {
    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    key={ariaLabel}
                    initial={{ y: '100%', opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 1 }}
                    transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={ariaLabel}
                >
                    <div className="mx-auto w-full max-w-md rounded-t-2xl border border-(--color-surface-muted) bg-(--color-background) shadow-sm">
                        <div className="flex items-center justify-between px-4 pb-2 pt-3">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-10 rounded-full bg-(--color-surface-muted)" />
                            </div>
                            <Button
                                type="button"
                                label=""
                                onClick={onClose}
                                leftIcon={<Icon icon="lucide:x" width={18} height={18} />}
                                className="grid h-9 w-9 place-items-center rounded-lg border border-transparent bg-transparent transition-colors hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)"
                                aria-label="Close"
                            />
                        </div>

                        {children}
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}