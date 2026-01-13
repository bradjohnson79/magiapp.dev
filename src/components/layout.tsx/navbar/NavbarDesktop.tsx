import Image from 'next/image';
import { Icon } from '@iconify/react';
import { navItems } from '@/constant/layout';
import { Button } from '@/components/ui/Button';
import { NavLink } from '@/components/ui/NavLink';

export function NavbarDesktop() {
  return (
    <header className='relative hidden w-full bg-transparent md:block'>
      <div className='border-b border-(--color-surface-muted)'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
          <div className='flex items-center'>
            <Image
              src='/images/magi-logo.png'
              alt='MAGI'
              width={57}
              height={57}
              priority
              className='h-auto w-[57px]'
            />
          </div>

          <nav className='flex items-center gap-8'>
            {navItems.map((item) => {
              // Normal links
              if (!('children' in item)) {
                return (
                  <NavLink
                    key={item.label}
                    label={item.label}
                    href={item.href}
                  />
                );
              }

              return (
                <div key={item.label} className='group relative'>
                  <button
                    type='button'
                    className='inline-flex items-center cursor-pointer gap-1 text-sm font-medium text-(--color-foreground)'
                  >
                    <span>{item.label}</span>
                    <Icon icon='ci:chevron-down' width='18' height='18' />
                  </button>
                  <div className='invisible absolute left-0 top-full z-50 mt-2 min-w-40 rounded-xl border border-(--color-surface-muted) bg-(--color-background) p-2 opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100'>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        label={child.label}
                        href={child.href}
                        className='block rounded-lg px-3 py-2 text-sm font-medium text-(--color-foreground) hover:bg-(--color-surface-soft)'
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right: Buttons */}
          <div className='flex items-center gap-3'>
            <Button
              label='Log in'
              className='rounded border border-(--color-surface-muted) bg-(--color-surface-soft) px-4 py-2 text-xs font-semibold text-(--color-foreground) cursor-pointer transition-colors hover:bg-(--color-surface-muted)'
            />
            <Button
              label='Get Started'
              className='relative inline-flex items-center cursor-pointer border justify-center overflow-hidden rounded bg-(--color-foreground) px-4 py-2 text-xs font-semibold text-(--color-background) transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
