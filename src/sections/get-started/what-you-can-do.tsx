'use client'

import { container, fadeUp, imageRevealV } from "@/constant/animation";
import { WHAT_YOU_CAN_DO_SECTION } from "@/constant/ui-data";
import { motion } from "framer-motion";
import Image from "next/image";

export function WhatYouCanDo() {
    return (
        <section className="py-12 lg:py-0 lg:pt-24  text-(--color-foreground)">
            <div className="mx-auto max-w-4xl">
                <h1
                    className="text-3xl font-bold leading-tight lg:text-6xl mb-4 lg:mx-0 mx-6 text-start lg:text-center">
                    WHAT YOU CAN DO DURING THE FREE TRIAL
                </h1>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-0">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show" className="flex flex-col items-start text-start mt-6 lg:mt-0 max-w-4xl lg:mx-auto mx-6 justify-center">

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-4 font-semibold text-md lg:text-lg"
                    >
                        Everything — except publish.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-2 max-w-xl text-(--color-surface-darker) font-normal text-sm lg:text-md"
                    >
                        The MAGI trial is designed to let you experience the full intelligence of the platform, without putting anything live.During the trial, you can:
                    </motion.p>

                    <div className="mt-8 flex w-full flex-col gap-4">
                        {WHAT_YOU_CAN_DO_SECTION.map((item) => (
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
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-sm font-semibold text-(--color-foreground) lg:text-md z-10 mt-12"
                    >
                        __You are using the real MAGI, not a sandbox toy.
                    </motion.p>
                </motion.div>
                <div className="w-full mt-24 lg:mt-0">
                    <motion.div
                        variants={imageRevealV}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <Image
                            src="/images/get-started/section-three.png"
                            alt="MAGI preview"
                            width={1200}
                            height={900}
                            priority
                            className="w-full h-auto"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}