'use client';

import { fadeUp } from '@/constant/animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='mx-auto max-w-7xl py-12 px-4 text-(--color-foreground) lg:px-6'>
      <div className='relative w-full overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) p-6 lg:p-12'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16'>
          <div className='flex justify-center lg:justify-start'>
            <Image
              src='/images/magi-logo.png'
              alt='MAGI'
              width={90}
              height={40}
              className='h-auto w-auto'
              priority={false}
            />
          </div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-10 text-center lg:flex-row lg:gap-24 lg:text-start'
          >
            <div className='flex flex-col gap-4'>
              <p className='text-sm font-normal text-(--color-surface-darker)'>
                Pages
              </p>
              <div className='flex flex-col gap-3 text-sm font-semibold'>
                <a href='#' className='hover:opacity-80'>
                  Home
                </a>
                <a href='#' className='hover:opacity-80'>
                  Enterprise
                </a>
                <a href='#' className='hover:opacity-80'>
                  Community
                </a>
                <a href='#' className='hover:opacity-80'>
                  Pricing
                </a>
              </div>
            </div>

            {/* Social */}
            <div className='flex flex-col gap-4'>
              <p className='text-sm font-normal text-(--color-surface-darker)'>
                Social Media
              </p>
              <div className='flex flex-col gap-3 text-sm font-semibold'>
                <a href='#' className='hover:opacity-80'>
                  X/Twitter
                </a>
                <a href='#' className='hover:opacity-80'>
                  Facebook
                </a>
                <a href='#' className='hover:opacity-80'>
                  Instagram
                </a>
                <a href='#' className='hover:opacity-80'>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-4 text-center lg:text-start'
          >
            <p className='text-sm font-normal text-(--color-surface-darker)'>
              Contact Us
            </p>
            <div className='flex flex-col gap-3 text-sm font-semibold'>
              <p>example@example.com</p>
              <p>+1234343424442</p>
              <p>City 12, New York, US</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
