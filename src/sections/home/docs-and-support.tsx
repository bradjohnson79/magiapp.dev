'use client';

import { Button } from '@/components/ui/Button';
import { fadeUp, slideInLeft } from '@/constant/animation';
import { DOCS_SUPPORT_POINTS } from '@/constant/ui-data';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function DocsAndSupportSection() {
  return (
    <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]'>
        {/* Left visual */}
        <div className='flex justify-center lg:justify-start'>
          <div className='relative w-full max-w-[440px]'>
            <motion.div
              variants={slideInLeft}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.35 }}
            >
              <Image
                src='/images/home/six-section-one.png'
                alt=''
                aria-hidden
                width={520}
                height={640}
                className='h-40% lg:h-auto w-full object-cover'
                priority={false}
              />
            </motion.div>
          </div>
        </div>

        {/* Right content */}
        <div className='flex flex-col items-center text-center lg:items-start lg:text-start mt-6 lg:mt-0'>
          <motion.h2
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='text-4xl font-bold leading-tight lg:text-6xl'
          >
            Docs &amp; Support
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='mt-4 font-semibold text-md lg:text-lg'
          >
            Clarity beats guesswork.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='mt-2 max-w-xl text-(--color-surface-darker) font-normal text-sm lg:text-md'
          >
            MAGI comes with clear documentation and built-in support so you’re
            never stuck digging through forums or guessing what went wrong.
          </motion.p>

          <div className='mt-8 flex w-full flex-col gap-4'>
            {DOCS_SUPPORT_POINTS.map((item) => (
              <div key={item.id} className='relative'>
                <span
                  aria-hidden
                  className='absolute -bottom-1 left-0 h-2 w-2 bg-(--color-magic-blue) z-0 hidden lg:block'
                />
                <motion.p
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.3 }}
                  className='text-sm font-semibold text-(--color-foreground) lg:text-md z-10'
                >
                  {item.text}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='mt-10'
          >
            <Button
              label='View Docs'
              href='#'
              rightIcon={<Icon icon='quill:link-out' width='18' height='18' />}
              className='inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
