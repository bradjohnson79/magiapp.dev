'use client'

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { MobileTopBar } from './MobileTopBar';
import { MobileOverlay } from './MobileOverlay';
import { BottomSheet } from './BottomSheet';
import { NavSheetContent } from './NavSheetContent';
import { ProfileSheetContent } from './ProfileSheetContent';
import { useClerk } from '@clerk/nextjs';

type SheetId = 'nav' | 'profile' | null;

export type NavLink = {
    label: string;
    href: string;
    icon: string;
    variant: 'soft' | 'plain';
};

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/dashboard', icon: 'solar:home-2-linear', variant: 'soft' },
    { label: 'Search', href: '/dashboard/search', icon: 'ic:baseline-search', variant: 'plain' },
];

export function SideBarMobile() {
    const router = useRouter();
    const { signOut } = useClerk();

    // later: replace with real Clerk user
    const userName = 'Zighed';
    const initial = userName?.trim()?.[0]?.toUpperCase() ?? 'U';

    const [openSheet, setOpenSheet] = useState<SheetId>(null);

    // kept for future: swipe/drag logic
    const navPanelRef = useRef<HTMLDivElement | null>(null);
    const profilePanelRef = useRef<HTMLDivElement | null>(null);

    const navOpen = openSheet === 'nav';
    const profileOpen = openSheet === 'profile';

    const closeAll = () => setOpenSheet(null);

    const onLogout = async () => {
        try {
            await signOut();
            closeAll()
            router.replace('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <MobileTopBar
                initial={initial}
                onOpenNav={() => setOpenSheet('nav')}
                onOpenProfile={() => setOpenSheet('profile')}
            />

            <MobileOverlay open={openSheet !== null} onClose={closeAll} />

            <div ref={navPanelRef}>
                <BottomSheet open={navOpen} onClose={closeAll} ariaLabel="nav-sheet">
                    <NavSheetContent onClose={closeAll} />
                </BottomSheet>
            </div>

            <div ref={profilePanelRef}>
                <BottomSheet open={profileOpen} onClose={closeAll} ariaLabel="profile-sheet">
                    <ProfileSheetContent userName={userName} initial={initial} onClose={closeAll} onLogout={onLogout} />
                </BottomSheet>
            </div>
        </>
    );
}