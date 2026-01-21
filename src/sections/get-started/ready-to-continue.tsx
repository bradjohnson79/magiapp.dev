'use client'

import { Button } from "@/components/ui/Button";
import { container, fadeUp } from "@/constant/animation";
import { unlockMagi } from "@/constant/ui-data";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ReadyToContinue() {
    const { scrollY } = useScroll();

    const circle = useTransform(scrollY, [0, 900], [0, 90]);
    return (
        <section className="relative py-12 lg:py-24 px-4 text-(--color-foreground) lg:px-6 overflow-x-hidden">
            <motion.div
                style={{ y: circle }}
                className="absolute -left-172 -top-12 md:-left-164 lg:-left-142 z-0"
            >
                <Image
                    src="/images/ui-shapes/circle-linear-three.svg"
                    alt=""
                    aria-hidden
                    width={900}
                    height={900}
                    priority
                    className="object-contain"
                />
            </motion.div>
            <motion.div className="mx-auto max-w-7xl"
                variants={container}
                initial="hidden"
                whileInView="show">
                <div className="flex flex-col gap-8 items-center">
                    <motion.h1 variants={fadeUp} className="text-3xl text-center font-bold leading-tight lg:text-6xl mb-4">
                        READY TO CONTINUE BUILDING WITH MAGI?
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-lg lg:text-xl font-semibold">If you are serious about building real systems, this is where you take the next step.</motion.p>
                    <div className="flex gap-4 items-center justify-center lg:flex-row flex-col">
                        <motion.div variants={fadeUp} className="relative flex flex-col gap-4 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6 shadow-md">
                            <p className='text-md font-semibold lg:text-lg'>Monthly Subscription</p>
                            <p className='min-h-[2.5em] text-md font-normal text-(--color-surface-darker)'>
                                Perfect for independent builders and ongoing projects.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative flex flex-col gap-4 rounded-lg border border-(--color-surface-muted) bg-(--color-background) p-6 shadow-md">
                            <p className='text-md font-semibold lg:text-lg'>Annual Subscription</p>
                            <p className='min-h-[2.5em] text-md font-normal text-(--color-surface-darker)'>
                                Best value for long-term builders and serious systems.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeUp} className="flex w-full justify-start max-w-5xl">
                        <p className="text-lg lg:text-xl font-semibold">Unlock:</p>
                        <div className="mt-8 flex flex-col gap-4 text-(--color-surface-darker) font-normal text-lg"
                        >
                            {unlockMagi.map((item) => (
                                <div key={item.key} className="flex items-start gap-2">
                                    <Icon
                                        icon="weui:arrow-filled"
                                        width={10}
                                        className="mt-2 shrink-0"
                                    />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-12 flex items-center justify-center gap-3 lg:justify-start"
                    >
                        <Button
                            label="Order My MAGI Subscription Now"
                            href="#"
                            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) shadow-sm transition-all duration-300 hover:bg-[color-mix(in_oklab,var(--color-foreground)_75%,white)] hover:shadow-none active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                        />

                        <Button
                            label="View Monthly & Annual Plans"
                            href="#"
                            rightIcon={<Icon icon="quill:link-out" width="18" height="18" />}
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) shadow-sm transition-all duration-300 hover:bg-(--color-background) hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section >
    )
}