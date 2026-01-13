'use client';

import { container, fadeUp } from '@/constant/animation';
import { buildCards } from '@/constant/ui-data';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function WhatCanBuildSection() {
  return (
    <>
      <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col items-center text-center gap-y-3'
        >
          <motion.h1
            variants={fadeUp}
            className='text-3xl font-bold leading-tight lg:text-6xl'
          >
            What You Can Build
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className='text-base font-semibold lg:text-lg'
          >
            MAGI isn&apos;t limited to landing pages or static apps. It&apos;s
            designed to help you create full systems — the kind that scale,
            adapt, and survive real-world use. No token restrictions. No prompt
            limitations. You own the code. No strings attached.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16'
        >
          {buildCards.map((card) => (
            <motion.div
              key={card.key}
              variants={fadeUp}
              className='group overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-4 lg:px-8 lg:pt-8 lg:pb-0'
            >
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded ${card.icon.chipBg}`}
                  >
                    <Icon
                      icon={card.icon.name}
                      width={18}
                      height={18}
                      className={card.icon.iconColor}
                    />
                  </div>
                  <p className='text-xl font-semibold'>{card.title}</p>
                </div>
                <div className='min-h-12'>
                  <p className='text-md font-normal text-(--color-surface-darker)'>
                    {card.description}
                  </p>
                </div>
                <div className='relative h-44 overflow-hidden rounded-xl -mb-12'>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    className='object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1.5'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
