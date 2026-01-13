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
      className='relative min-h-screen w-full bg-cover bg-top'
      style={{
        backgroundImage: "url('/images/home/header-bg.png')",
      }}
    >
      <div className='relative z-10'>
        <motion.div
          style={{ y: starsY }}
          className='absolute left-72 top-48 hidden lg:block'
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
          className='absolute right-72 bottom-48 hidden lg:block'
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

        <Navbar />

        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='mx-auto flex max-w-3xl flex-col items-center px-4 pt-16 text-center text-(--color-foreground) lg:pt-24'
        >
          <motion.div variants={fadeUp} className='mb-6'>
            <Image
              src='/images/home/magi-character.svg'
              alt='Magi character'
              width={220}
              height={220}
              priority
              className='h-auto w-[160px] lg:w-[220px]'
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className='text-3xl font-bold leading-tight lg:text-6xl'
          >
            Build Apps That Actually Think
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
            className='mt-8 flex items-center justify-center gap-3 lg:justify-start'
          >
            <Button
              label='View Docs'
              href='#'
              rightIcon={<Icon icon='quill:link-out' width='18' height='18' />}
              className='relative inline-flex items-center justify-center overflow-hidden rounded bg-(--color-foreground) px-8 py-2 text-sm border border-(--color-foreground) lg:text-md font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:shadow-md'
            />
            <Button
              label='Get MAGI'
              href='#'
              className='relative inline-flex items-center justify-center overflow-hidden rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-10 py-2 text-sm lg:text-md font-semibold text-(--color-foreground) shadow-sm transition-colors hover:bg-(--color-surface-muted)'
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
