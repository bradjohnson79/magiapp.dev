'use client'

import { Button } from "@/components/ui/Button"
import { container, fadeUp, slideInRight } from "@/constant/animation"
import { downloadMagi } from "@/constant/ui-data"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import Image from "next/image"

export function DownloadMAGISection() {
    return (
        <section className="mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6">
            <div className="mt-12 grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-0">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="px-2 flex flex-col justify-center items-start"
                >
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-3xl font-bold leading-tight lg:text-6xl mb-4"
                    >
                        Download MAGI
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg lg:text-xl font-semibold"
                    >
                        Start your free 3-day trial today.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-col gap-4 text-(--color-surface-darker) font-normal text-lg"
                    >
                        {downloadMagi.map((item) => (
                            <div key={item.key} className="flex items-start gap-2">
                                <Icon
                                    icon="weui:arrow-filled"
                                    width={10}
                                    className="mt-2 shrink-0"
                                />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div variants={fadeUp} className="mt-12">
                        <Button
                            label="Download MAGI"
                            href="#"
                            rightIcon={<Icon icon="meteor-icons:download" className='text-(--color-background)' width="18" height="18" />}
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                        />
                    </motion.div>
                </motion.div>
                <div
                    className="relative flex justify-center items-center"
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
                            src="/images/get-started/second-section.png"
                            alt=""
                            width={580}
                            height={580}
                            priority
                            className="w-full h-auto object-contain"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}