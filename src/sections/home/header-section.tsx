'use client';

import { Navbar } from '@/components/layout.tsx/navbar';
import { Button } from '@/components/ui/Button';
import { container, fadeUp } from '@/constant/animation';
import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function HeaderSection() {
  const { scrollY } = useScroll();
  const starsY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <header
      className='relative min-h-screen w-full bg-cover bg-top pb-12'
      style={{
        backgroundImage: "url('/images/home/header-bg.png')",
      }}
    >
      <div className='relative z-10'>
        <Navbar />

        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='mx-auto flex max-w-5xl flex-col items-center px-4 pt-16 text-center text-(--color-foreground) lg:pt-24'
        >
          <motion.div variants={fadeUp} className='mb-6 relative'>
            <motion.div
              style={{ y: starsY }}
              className='absolute right-0 top-40 hidden lg:block'
            >
              <Image
                src='/images/ui-shapes/stars.png'
                alt=''
                aria-hidden
                width={24}
                height={24}
                priority
                className='object-contain'
              />
            </motion.div>
            <motion.div
              style={{ y: starsY }}
              className='absolute left-0 bottom-0 hidden lg:block'
            >
              <Image
                src='/images/ui-shapes/stars.png'
                alt=''
                aria-hidden
                width={24}
                height={24}
                priority
                className='object-contain'
              />
            </motion.div>
            <Image
              src='/images/home/magi-character.svg'
              alt='Magi character'
              width={440}
              height={440}
              priority
              className='h-auto w-[320px] lg:w-[440px]'
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className='text-3xl font-bold leading-tight lg:text-6xl'
          >
            Build Apps That Actually{' '}
            <span className='relative inline-block text-(--color-magic-blue)'>
              Think
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25,
                }}
                className='pointer-events-none absolute top-0'
              >
                <Image
                  src='/images/ui-shapes/square-dashed.svg'
                  alt=''
                  aria-hidden
                  width={250}
                  height={250}
                  className='h-auto'
                />
              </motion.div>
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className='mt-4 max-w-xl text-base font-semibold lg:text-lg'
          >
            MAGI is an autonomous app-building intelligence that designs, fixes,
            and evolves real production systems — not templates, not demos, not
            toy projects.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='mt-3 max-w-xl text-sm font-medium lg:text-base'
          >
            From web and mobile apps to dashboards, games, and AI-powered tools,
            MAGI understands the entire stack and helps you build with
            confidence.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className='mt-12 flex items-center justify-center gap-3 lg:justify-start'
          >
            <Button
              label='Get MAGI'
              href='#'
              className='group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_75%,white)] hover:shadow-none active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20'
            />

            <Button
              label='View Docs'
              href='#'
              rightIcon={<Icon icon='quill:link-out' width='18' height='18' />}
              className='inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) shadow-sm transition-all duration-300 hover:bg-(--color-background) hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15'
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
