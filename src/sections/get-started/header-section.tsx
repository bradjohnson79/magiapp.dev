'use client';

import { LandingHeaderShell } from '@/components/layout.tsx/landing-header-shell';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/Button';
import { container, fadeUp } from '@/constant/animation';

export function HeaderSection() {
  const { scrollY } = useScroll();

  const circleOneY = useTransform(scrollY, [0, 900], [0, 90]);
  const circleTwoY = useTransform(scrollY, [0, 900], [0, -90]);

  return (
    <LandingHeaderShell className="min-h-screen overflow-x-hidden overflow-y-hidden">
      <motion.div
        style={{ y: circleOneY }}
        className="absolute -right-98 -top-12 md:-right-64 lg:-right-52 z-0"
      >
        <Image
          src="/images/ui-shapes/circle-linear-one.svg"
          alt=""
          aria-hidden
          width={600}
          height={600}
          priority
          className="object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: circleTwoY }}
        className="absolute -left-142 top-52 md:-left-64 lg:-left-92 z-0"
      >
        <Image
          src="/images/ui-shapes/circle-linear-two.svg"
          alt=""
          aria-hidden
          width={850}
          height={850}
          priority
          className="object-contain"
        />
      </motion.div>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pt-16 text-center text-(--color-foreground) lg:pt-24 z-10">
        <div className="relative mb-2 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55, ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
            className="absolute -top-2 -left-4 hidden lg:block origin-top-left"
          >
            <Image
              src="/images/ui-shapes/square-two-words.svg"
              alt=""
              aria-hidden
              width={370}
              height={80}
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="absolute top-12 left-24 hidden lg:block"
          >
            <Icon icon="fluent:cursor-20-filled" className="h-24 w-24" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold leading-tight lg:text-6xl"
          >
            Get Started With MAGI
          </motion.h1>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show">

          <motion.div variants={fadeUp} className='mb-8 lg:mb-12'>
            <p className="mt-4 max-w-xl text-base font-semibold lg:text-lg">Build with intelligence — no commitment required.</p>
            <p className="mt-4 max-w-xl text-base font-normal lg:text-lg">MAGI is available as a free 3-day trial, giving you full access to its core capabilities so you can explore, test, and understand how it thinks before you commit.</p>
            <p className="mt-4 max-w-xl text-base font-normal lg:text-lg">No demos, No watered-down mode, Just real tools, real systems, and a clear path forware</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button
              label="Download MAGI"
              href="#"
              rightIcon={<Icon icon="meteor-icons:download" className='text-(--color-background)' width="18" height="18" />}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </LandingHeaderShell>
  );
}
