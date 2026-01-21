'use client'

import { container, fadeUp, slideInRight } from "@/constant/animation"
import { WHAT_LIMIT } from "@/constant/ui-data"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function WhatIsLimitedSection() {
    const { scrollY } = useScroll();

    const circle = useTransform(scrollY, [0, 900], [0, 90]);
    return (
        <section className="relative py-12 lg:py-24 px-4 text-(--color-foreground) lg:px-6 overflow-x-hidden overflow-y-hidden">
            <motion.div
                style={{ y: circle }}
                className="absolute -right-120 bottom-32 md:-right-120 lg:-right-100 z-0"
            >
                <Image
                    src="/images/ui-shapes/mixed-linear.svg"
                    alt=""
                    aria-hidden
                    width={900}
                    height={900}
                    priority
                    className="object-contain"
                />
            </motion.div>
            <div className="mx-auto max-w-7xl">
                <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div
                        className="relative flex justify-center items-center order-2 lg:order-1"
                    >
                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative mx-auto w-full max-w-[900px] px-4 flex justify-center mt-24 lg:mt-0"
                        >
                            <Image
                                src="/images/get-started/section-fore.png"
                                alt=""
                                width={580}
                                height={580}
                                priority
                                className="w-full h-auto object-contain"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="px-2 flex flex-col justify-center items-start order-1 lg:order-2"
                    >
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-3xl font-bold leading-tight lg:text-6xl mb-4"
                        >
                            WHAT is LIMITED DURING THE TRIAL
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mt-4 font-semibold text-md lg:text-lg"
                        >
                            Publishing is disabled.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mt-2 max-w-xl text-(--color-surface-darker) font-normal text-sm lg:text-md"
                        >
                            During the 3-day trial:
                        </motion.p>
                        <div className="mt-8 flex w-full flex-col gap-4">
                            {WHAT_LIMIT.map((item) => (
                                <div key={item.id} className="relative">
                                    <span
                                        aria-hidden
                                        className="absolute -bottom-1 left-0 h-2 w-2 bg-(--color-magic-blue) z-0"
                                    />
                                    <motion.p
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="text-sm font-semibold text-(--color-foreground) lg:text-md z-10"
                                    >
                                        {item.text}
                                    </motion.p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 mt-12">
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-sm font-semibold text-(--color-foreground) lg:text-md z-10"
                            >
                                __This keeps the trial safe while still letting you test everything that matters.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="text-sm font-semibold text-(--color-foreground) lg:text-md z-10"
                            >
                                __Once you upgrade, publishing unlocks instantly.
                            </motion.p>
                        </div>
                    </motion.div>
                </div></div>
        </section>
    )
}