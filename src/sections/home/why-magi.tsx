'use client';

import { container, fadeUp, slideInRight } from '@/constant/animation';
import { magiPillars, whyMagiPoints } from '@/constant/ui-data';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function WhyMagi() {
  return (
    <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <div className='flex flex-col items-start text-start gap-y-3'>
        <motion.h1
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='text-3xl font-bold leading-tight lg:text-6xl'
        >
          Why MAGI Is Different
        </motion.h1>
        <div className='mt-12 grid w-full grid-cols-1 lg:grid-cols-[1.5fr_1fr] lg:gap-0'>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className='px-2'
          >
            <motion.p variants={fadeUp} className='text-xl font-semibold'>
              MAGI thinks in systems — not fragments.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className='mt-8 flex flex-col gap-4 text-(--color-surface-darker) font-normal text-lg'
            >
              {whyMagiPoints.map((item) => (
                <div key={item.key} className='flex items-start gap-2'>
                  <Icon
                    icon='weui:arrow-filled'
                    width={10}
                    className='mt-2 shrink-0'
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className='mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-3'
            >
              {magiPillars.map((card) => (
                <motion.div
                  key={card.key}
                  variants={fadeUp}
                  className='relative overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6 flex flex-col gap-8'
                >
                  <Image
                    src={card.image.src}
                    alt=''
                    aria-hidden
                    width={card.image.width}
                    height={card.image.height}
                    className={`pointer-events-none ${card.image.className}`}
                  />
                  <p className='font-semibold text-md lg:text-lg'>
                    {card.title}
                  </p>
                  <p className='text-(--color-surface-darker) font-normal text-md'>
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div
            className='relative flex justify-center items-center bg-no-repeat bg-contain bg-center'
            style={{
              backgroundImage: "url('/images/ui-shapes/lines-shape.png')",
            }}
          >
            <motion.div
              variants={slideInRight}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className='relative mx-auto w-full max-w-[900px] px-4 flex justify-center'
            >
              <Image
                src='/images/home/third-section-one.png'
                alt=''
                width={900}
                height={506} // keep real aspect ratio if you know it
                priority
                className='w-full h-auto object-contain'
                sizes='(min-width: 1024px) 50vw, 100vw'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
