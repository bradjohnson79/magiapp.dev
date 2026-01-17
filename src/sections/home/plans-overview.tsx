'use client';

import { Button } from '@/components/ui/Button';
import { fadeUp, slideInLR } from '@/constant/animation';
import { PLAN_TEASER_CARDS } from '@/constant/ui-data';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function PlansOverviewSection() {
  return (
    <section className='bg-(--color-surface-soft) mt-6 lg:mt-12'>
      <div className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
        <motion.h1
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='text-3xl font-bold leading-tight lg:text-6xl text-start'
        >
          Plans Overview (Teaser)
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col gap-2 justify-center items-center lg:flex-row lg:justify-between mt-6 lg:mt-12'
        >
          <div className='flex flex-col gap-1 text-center lg:text-start'>
            <p className='font-semibold text-md lg:text-lg'>
              Start free. Scale when you’re ready.
            </p>
            <p className='text-(--color-surface-darker) font-normal text-md'>
              Whether you’re exploring ideas or building at scale, MAGI meets
              you where you are.
            </p>
          </div>
          <Button
            label='View Docs'
            href='#'
            rightIcon={<Icon icon='quill:link-out' width='18' height='18' />}
            className='inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20'
          />
        </motion.div>
        <div className='mt-6 lg:mt-12 flex flex-col gap-3'>
          {PLAN_TEASER_CARDS.map((card, index) => {
            const desktopJustifyClass =
              card.desktopJustify === 'start'
                ? 'lg:justify-start'
                : card.desktopJustify === 'center'
                ? 'lg:justify-center'
                : 'lg:justify-end';

            return (
              <div
                key={card.id}
                className={`w-full flex justify-center ${desktopJustifyClass}`}
              >
                <motion.div
                  variants={slideInLR}
                  custom={index === 0 ? 'left' : index === 1 ? 'right' : 'left'}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative w-full max-w-[465px] overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) py-8 pl-8 pr-24 flex flex-col gap-2 ${
                    card.desktopOffsetClass ?? ''
                  }`}
                >
                  <Image
                    src={card.imageSrc}
                    alt=''
                    aria-hidden
                    width={card.imageW}
                    height={card.imageH}
                    className='pointer-events-none absolute top-0 right-0'
                  />
                  <p className='font-semibold text-md lg:text-lg'>
                    {card.title}
                  </p>
                  <p className='text-(--color-surface-darker) font-normal text-sm lg:text-md max-w-md min-h-[2.5em] lg:min-h-[3em]'>
                    {card.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
