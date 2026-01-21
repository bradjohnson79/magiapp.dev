'use client'

import { container, fade, fadeUp, stepCardV, stepsGridV } from "@/constant/animation"
import { TRIAL_DAYS_WORKS } from "@/constant/ui-data"
import { motion } from "framer-motion"
import Image from "next/image"

export function TrailDaysWorkSection() {
    return (
        <section className="py-12 lg:py-24 px-4 text-(--color-foreground) lg:px-6 bg-(--color-surface-soft)">
            <div className="mx-auto max-w-7xl">
                <motion.div variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }} className="flex flex-col items-start mb-12">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-3xl font-bold leading-tight lg:text-6xl mb-4"
                    >
                        HOW THE 3-DAY TRIAL WORKS
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg lg:text-xl font-semibold"
                    >
                        No automatic surprises. No forced upgrades.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={stepsGridV}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className='grid grid-cols-1 gap-4 lg:grid-cols-3'
                >
                    {TRIAL_DAYS_WORKS.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={stepCardV}
                            className='relative flex flex-col gap-4 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6'
                        >
                            <motion.div variants={fade} className='hidden lg:block'>
                                <Image
                                    src={step.image.src}
                                    alt={step.image.alt}
                                    width={step.image.width}
                                    height={step.image.height}
                                    priority
                                    className={`object-contain ${step.image.className}`}
                                    sizes='(min-width: 1024px) 50vw, 100vw'
                                />
                            </motion.div>

                            <p className='text-md font-semibold lg:text-lg'>{step.title}</p>

                            <p className='min-h-[2.5em] text-md font-normal text-(--color-surface-darker)'>
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}