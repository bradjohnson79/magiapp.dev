import { AnimatePresence, motion } from "framer-motion";

export function MobileOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                    onClick={onClose}
                />
            ) : null}
        </AnimatePresence>
    );
}