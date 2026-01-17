'use client';

import {
  fadeUp,
  STEP_NUMBER_PARALLAX,
  stepArrowV,
  stepCardV,
  stepImageV,
} from '@/constant/animation';
import { HOW_IT_WORKS_STEPS, HowItWorksStep } from '@/constant/ui-data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function StepNumber({ step }: { step: HowItWorksStep }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // scroll range through viewport
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [STEP_NUMBER_PARALLAX.fromY, STEP_NUMBER_PARALLAX.toY]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={step.decoNumberImg.desktopPosClass}
    >
      <Image
        src={step.decoNumberImg.src}
        alt=''
        aria-hidden
        width={step.decoNumberImg.w}
        height={step.decoNumberImg.h}
      />
    </motion.div>
  );
}

export function HowItWorksSection() {
  const MotionImage = motion.create(Image);
  return (
    <section className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <motion.h1
        variants={fadeUp}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='text-3xl font-bold leading-tight lg:text-6xl text-center'
      >
        How It Works
      </motion.h1>
      <div className='flex flex-col gap-y-12 mt-24'>
        {HOW_IT_WORKS_STEPS.map((step, idx) => {
          const isLeft = step.side === 'left';

          return (
            <div key={step.id} className='flex flex-col gap-y-12'>
              <div
                className={`flex w-full relative ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                <StepNumber step={step} />

                <div
                  className={`flex w-full flex-col items-center ${
                    isLeft
                      ? 'lg:flex-row lg:items-center'
                      : 'lg:justify-end lg:flex-row lg:items-center'
                  }`}
                >
                  {/* desktop image first when step is right (matches your step 2 layout) */}
                  {!isLeft && (
                    <MotionImage
                      variants={stepImageV}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true, amount: 0.35 }}
                      src={step.cardImg.src}
                      alt=''
                      aria-hidden
                      width={step.cardImg.w}
                      height={step.cardImg.h}
                      className={`pointer-events-none ${step.cardImg.desktopOverlapClass} z-10 hidden lg:block`}
                    />
                  )}

                  <motion.div
                    variants={stepCardV}
                    custom={step.side}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.35 }}
                    className={`relative w-full lg:w-auto overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background) py-8 pl-6 pr-6 pb-24 lg:pb-8 flex flex-col gap-2 ${
                      isLeft ? 'lg:pr-24' : 'lg:pl-24'
                    }`}
                  >
                    <p className='font-semibold text-md lg:text-lg'>
                      {step.title}
                    </p>
                    <p className='text-(--color-surface-darker) font-normal text-sm lg:text-md max-w-md'>
                      {step.description}
                    </p>
                  </motion.div>

                  {/* mobile image: outside card, overlaps from bottom */}
                  <Image
                    src={step.cardImg.src}
                    alt=''
                    aria-hidden
                    width={step.cardImg.w}
                    height={step.cardImg.h}
                    className='pointer-events-none z-10 -mt-16 mx-auto block lg:hidden'
                  />

                  {/* desktop image when step is left (matches your step 1 layout) */}
                  {isLeft && (
                    <MotionImage
                      variants={stepImageV}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true, amount: 0.35 }}
                      src={step.cardImg.src}
                      alt=''
                      aria-hidden
                      width={step.cardImg.w}
                      height={step.cardImg.h}
                      className={`pointer-events-none ${step.cardImg.desktopOverlapClass} z-10 hidden lg:block`}
                    />
                  )}
                </div>
              </div>

              {/* arrow between steps (skip after last) */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className='flex w-full justify-center'>
                  <motion.div
                    variants={stepArrowV}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <Image
                      src='/images/home/forth-section-arrow.svg'
                      alt=''
                      aria-hidden
                      width={25}
                      height={156}
                      className={`pointer-events-none h-auto ${step.arrowRotationClass}`}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
