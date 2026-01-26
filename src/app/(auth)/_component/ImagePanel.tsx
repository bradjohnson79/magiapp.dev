'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImagePanel() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
                src="/images/auth/hero-section.png"
                alt="Authentication illustration"
                fill
                priority
                className="object-cover"
            />

            <motion.div
                className="absolute left-42 top-4 z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Image src="/images/ui-shapes/stars.png" alt="" aria-hidden width={34} height={34} className="object-contain" />
            </motion.div>

            <motion.div
                className="absolute bottom-12 right-42 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
                <Image src="/images/ui-shapes/stars.png" alt="" aria-hidden width={34} height={34} className="object-contain" />
            </motion.div>
        </div>
    );
}