'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { navItems } from '@/constant/layout';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { NavLink } from '@/components/ui/NavLink';

export function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const collapse = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };
  return (
    <>
      <header className='relative z-50 w-full bg-transparent md:hidden'>
        <div className='mx-auto flex max-w-7xl items-center justify-between border-b border-(--color-surface-muted) px-4 py-3'>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/magi-logo.png'
              alt='MAGI'
              width={44}
              height={44}
              priority
              className='h-auto w-[44px] sm:w-[57px]'
            />
          </div>

          <div className='flex items-center gap-2'>
            <Button
              label='Get Started'
              className='relative inline-flex items-center justify-center overflow-hidden rounded bg-(--color-foreground) px-3 py-2 text-xs font-semibold text-(--color-background) transition-all duration-300 hover:shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-foreground)_5%,transparent)]'
            />
            <button
              type='button'
              aria-label='Open menu'
              onClick={() => setIsMenuOpen(true)}
              className='inline-flex h-11 w-11 items-center justify-center text-black'
            >
              <Icon icon='ci:menu-alt-01' width='28' height='28' />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='fixed inset-0 z-100 bg-(--color-background)'
          >
            <div className='flex h-16 items-center justify-between px-4'>
              <Image
                src='/images/magi-logo.png'
                alt='MAGI'
                width={44}
                height={44}
                priority
                className='h-auto w-[44px]'
              />

              <button
                type='button'
                aria-label='Close menu'
                onClick={() => setIsMenuOpen(false)}
                className='inline-flex h-11 w-11 items-center justify-center text-(--color-foreground)'
              >
                <Icon icon='ep:close-bold' width='22' height='22' />
              </button>
            </div>

            <div className='h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6'>
              <div className='space-y-2'>
                {navItems.map((item) => {
                  if (!('children' in item)) {
                    return (
                      <NavLink
                        key={item.label}
                        label={item.label}
                        href={item.href}
                        className='block py-3'
                      />
                    );
                  }

                  return (
                    <div key={item.label}>
                      <button
                        type='button'
                        onClick={() => setIsResourcesOpen((v) => !v)}
                        className='flex w-full items-center justify-between py-3 text-sm font-medium text-(--color-foreground)'
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className='inline-flex'
                        >
                          <Icon icon='ci:chevron-down' width='20' height='20' />
                        </motion.span>
                      </button>

                      <motion.div
                        variants={collapse}
                        initial='closed'
                        animate={isResourcesOpen ? 'open' : 'closed'}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className='overflow-hidden'
                      >
                        <div className='pl-4'>
                          {item.children.map((child) => (
                            <NavLink
                              key={child.label}
                              label={child.label}
                              href={child.href}
                              className='block py-2 text-sm font-medium text-(--color-foreground)'
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
                <div className='mt-8'>
                  <Button
                    label='Log in'
                    className='w-full rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 py-3 text-sm font-medium text-(--color-foreground) transition-colors hover:bg-(--color-surface-muted)'
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
