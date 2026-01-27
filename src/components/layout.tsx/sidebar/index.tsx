'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useClerk, useUser } from '@clerk/nextjs';
import { SidebarBrand } from './SidebarBrand';
import { SidebarProfileMenu } from './SidebarProfileMenu';
import { SidebarNavItem } from './SidebarNavItem';
import { sideNav } from '@/constant/layout';



export function SidebarDesktop() {
    const pathname = usePathname();
    const router = useRouter();
    const { signOut } = useClerk();
    const { user } = useUser();
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

    const isUserLoaded = !!user;

    const userName = isUserLoaded
        ? user?.fullName ||
        user?.firstName ||
        user?.username ||
        user?.primaryEmailAddress?.emailAddress ||
        'User'
        : '';

    const initial = isUserLoaded && userName
        ? userName.trim()[0].toUpperCase()
        : '';

    const role =
        (user?.publicMetadata?.role as string) === 'admin'
            ? 'Admin'
            : 'Member';

    return (
        <aside
            className={[
                'sticky top-0 hidden h-screen shrink-0 border-r border-(--color-surface-muted) bg-(--color-background) lg:flex',
                'bg-[url(/images/dashboard/sidebar-bg.png)] bg-cover bg-no-repeat bg-center',
                collapsed ? 'w-16' : 'w-72',
            ].join(' ')}
        >
            <div className="flex h-full w-full flex-col p-3 z-10">
                <SidebarBrand collapsed={collapsed} onClose={closeSidebar} onOpen={openSidebar} />

                {/* Nav */}
                <div className="mt-4">
                    {!collapsed ? (
                        <p className="px-2 pb-2 text-xs font-semibold text-(--color-surface-darker)">Navigation</p>
                    ) : null}
                    <div className="flex flex-col gap-1">
                        {sideNav
                            .filter(
                                (item) => !item.role || item.role === role.toLowerCase()
                            )
                            .map((item) => (
                                <SidebarNavItem
                                    key={item.href}
                                    item={item}
                                    active={pathname === item.href}
                                    collapsed={collapsed}
                                />
                            ))}
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                <SidebarProfileMenu
                    role={role}
                    collapsed={collapsed}
                    userName={userName}
                    initial={initial}
                    profileOpen={profileOpen}
                    onToggle={() => setProfileOpen((v) => !v)}
                    onLogout={onLogout}
                    profileRef={profileRef}
                />
            </div>
        </aside>
    );
}

export const Sidebar = SidebarDesktop;