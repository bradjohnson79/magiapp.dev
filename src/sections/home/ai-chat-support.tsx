'use client';

import { fadeUp, slideInRight } from '@/constant/animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AIChatSupportSection() {
  return (
    <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <div className='relative w-full overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6 shadow-md lg:p-12'>
        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-4 text-center lg:text-start'
          >
            <h2 className='text-4xl font-bold leading-tight lg:text-6xl'>
              AI Chat Support
            </h2>

            <p className='mt-2 font-semibold text-md lg:text-lg'>
              Help when you need it — without the noise.
            </p>

            <p className='max-w-xl text-(--color-surface-darker) font-normal text-sm lg:text-md mx-auto lg:mx-0'>
              MAGI includes an AI-powered support assistant trained on platform
              knowledge, documentation, and common issues. Get clear answers
              without waiting or searching.
            </p>

            <p className='max-w-xl text-(--color-surface-darker) font-normal text-sm italic mx-auto lg:mx-0'>
              (Support AI is scoped for help and guidance — not project
              modification.)
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.35 }}
            className='flex justify-center lg:justify-end'
          >
            <Image
              src='/images/home/seven-section-one.png'
              alt=''
              aria-hidden
              width={400}
              height={250}
              className='w-full object-contain'
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
