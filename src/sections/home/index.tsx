'use client';

import { Navbar } from '@/components/layout.tsx/navbar';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Home() {
  return (
    <header
      className='relative min-h-screen w-full bg-cover bg-top'
      style={{
        backgroundImage: "url('/images/home/header-bg.png')",
      }}
    >
      <div className='relative z-10'>
        <Navbar />

        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pt-16 text-(--color-foreground) lg:grid-cols-2 lg:items-start lg:px-6 lg:pt-24'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='flex flex-col items-center text-center lg:items-start lg:text-left'
          >
            <motion.h1
              variants={fadeUp}
              className='text-3xl font-bold leading-tight lg:text-6xl'
            >
              Build Apps That Actually Think
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className='mt-4 max-w-md text-base font-semibold lg:max-w-xl lg:text-lg'
            >
              MAGI is an autonomous app-building intelligence that designs,
              fixes, and evolves real production systems — not templates, not
              demos, not toy projects.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className='mt-3 max-w-md text-sm font-medium lg:max-w-xl lg:text-base'
            >
              From web and mobile apps to dashboards, games, and AI-powered
              tools, MAGI understands the&nbsp;entire stack&nbsp;and helps you
              build with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className='mt-8 flex items-center justify-center gap-3 lg:justify-start'
            >
              <Button
                label='View Docs'
                href='#'
                rightIcon={
                  <Icon icon='quill:link-out' width='18' height='18' />
                }
                className='relative inline-flex items-center justify-center overflow-hidden rounded bg-(--color-foreground) px-8 py-3 text-sm border border-(--color-foreground) lg:text-md font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:shadow-md'
              />
              <Button
                label='Get MAGI'
                href='#'
                className='relative inline-flex items-center justify-center overflow-hidden rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-12 py-3 text-sm lg:text-md font-semibold text-(--color-foreground) shadow-sm transition-colors hover:bg-(--color-surface-muted)'
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className='hidden lg:absolute lg:right-0 lg:flex lg:h-full lg:w-1/2 lg:items-center'
          >
            <Image
              src='/images/home/hero-img.png'
              alt='MAGI interface preview'
              width={1600}
              height={1000}
              priority
              className='h-full w-auto absolute right-0 object-contain'
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
        className='pointer-events-none absolute bottom-0 left-1/2 w-[180px] -translate-x-1/2 lg:left-72 lg:w-[320px] lg:translate-x-0'
      >
        <Image
          src='/images/home/magi-character.svg'
          alt='Magi character'
          width={220}
          height={220}
          priority
          className='h-auto w-full'
        />
      </motion.div>
    </header>
  );
}
