'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import { SidebarBrand } from './SidebarBrand';
import { SidebarProfileMenu } from './SidebarProfileMenu';
import { SidebarNavItem } from './SidebarNavItem';

export type NavItem = {
    label: string;
    href: string;
    icon: string;
};

const NAV: NavItem[] = [
    { label: 'Home', href: '/dashboard', icon: 'solar:home-2-linear' },
    { label: 'Search', href: '/dashboard/search', icon: 'ic:baseline-search' },
];

export function SidebarDesktop() {
    const pathname = usePathname();
    const router = useRouter();
    const { signOut } = useClerk();
    const [profileOpen, setProfileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const profileRef = useRef<HTMLDivElement | null>(null);

    const closeSidebar = useCallback(() => {
        setProfileOpen(false);
        setCollapsed(true);
    }, []);
    const openSidebar = useCallback(() => setCollapsed(false), []);

    useEffect(() => {
        if (!profileOpen) return;

        const onDown = (e: MouseEvent) => {
            const target = e.target as Node;
            if (!profileRef.current) return;
            if (!profileRef.current.contains(target)) setProfileOpen(false);
        };

        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, [profileOpen]);

    const onLogout = async () => {
        try {
            setProfileOpen(false);
            await signOut();
            router.replace('/login');
        } catch (err) {
            console.log(err);
        }
    };

    // later: replace with real user (Clerk)
    const userName = 'Zighed';
    const initial = userName?.trim()?.[0]?.toUpperCase() ?? 'U';

    return (
        <aside
            className={[
                'sticky top-0 hidden h-screen shrink-0 border-r border-(--color-surface-muted) bg-(--color-background) lg:flex',
                collapsed ? 'w-16' : 'w-72',
            ].join(' ')}
        >
            <div className="flex h-full w-full flex-col p-3">
                <SidebarBrand collapsed={collapsed} onClose={closeSidebar} onOpen={openSidebar} />

                {/* Nav */}
                <div className="mt-4">
                    {!collapsed ? (
                        <p className="px-2 pb-2 text-xs font-semibold text-(--color-surface-darker)">Navigation</p>
                    ) : null}
                    <div className="flex flex-col gap-1">
                        {NAV.map((item) => (
                            <SidebarNavItem key={item.href} item={item} active={pathname === item.href} collapsed={collapsed} />
                        ))}
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                <SidebarProfileMenu
                    collapsed={collapsed}
                    userName={userName}
                    initial={initial}
                    profileOpen={profileOpen}
                    onToggle={() => setProfileOpen((v) => !v)}
                    onClose={() => setProfileOpen(false)}
                    onLogout={onLogout}
                    profileRef={profileRef}
                />
            </div>
        </aside>
    );
}

export const Sidebar = SidebarDesktop;