'use client';

import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/constant/animation';
import { motion } from 'framer-motion';

export function FinalCTASection() {
  return (
    <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <div className='flex flex-col gap-4 text-center items-center justify-center'>
        <motion.h1
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='text-3xl font-bold leading-tight lg:text-6xl text-start'
        >
          Build With Intelligence
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='text-3xl font-bold leading-tight lg:text-6xl text-start'
        >
          Not Guesswork
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className='text-base font-semibold lg:text-lg'
        >
          MAGI is built for people who want to create real systems — and want
          tools that respect their time, skill, and ambition.
        </motion.p>
        <Button
          label='Get MAGI'
          href='#'
          className='group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_75%,white)] hover:shadow-none active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20'
        />
      </div>
    </section>
  );
}
