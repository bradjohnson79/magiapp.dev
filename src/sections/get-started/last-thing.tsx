'use client';

import { oneLastThing } from '@/constant/ui-data';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { container, fadeUp, slideInRight } from '@/constant/animation';

export function LastThingSection() {
    return (
        <section className='py-12 px-4 text-(--color-foreground) lg:py-24 lg:px-6'>
            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <motion.div
                        variants={container}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className='flex flex-col justify-center'
                    >
                        <motion.h1
                            variants={fadeUp}
                            className='mb-4 text-3xl font-bold leading-tight lg:text-6xl'
                        >
                            One Last Thing
                        </motion.h1>

                        <motion.p variants={fadeUp} className='text-lg font-semibold lg:text-xl'>
                            MAGI is not here to replace your thinking.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className='mt-8 mb-12 flex flex-col gap-4 text-(--color-surface-darker) font-normal text-lg'
                        >
                            {oneLastThing.map((item) => (
                                <div key={item.key} className='flex items-start gap-2'>
                                    <Icon icon='weui:arrow-filled' width={10} className='mt-2 shrink-0' />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className='flex flex-wrap items-center gap-x-1 text-md font-normal lg:text-lg'
                        >
                            <span>Need help getting started? Check the</span>

                            <a
                                href='#'
                                className='inline-flex items-center gap-1 font-bold whitespace-nowrap text-(--color-foreground) transition-colors hover:underline'
                            >
                                Documentation
                                <Icon icon='icon-park-outline:share' />
                            </a>

                            <span>or reach out through MAGI is built-in support.</span>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={slideInRight}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.25 }}
                        className='flex w-full items-center justify-center'
                    >
                        <Image
                            src='/images/home/magi-character.svg'
                            alt='Magi character'
                            width={440}
                            height={440}
                            priority
                            className='h-auto w-[320px] lg:w-[440px]'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}