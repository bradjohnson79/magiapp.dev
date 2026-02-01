import { Sidebar } from '@/components/layout.tsx/sidebar';
import { SideBarMobile } from '@/components/layout.tsx/sidebar-mobile';
import { UpgradeBanner } from '@/components/ui/UpgradeBanner';
import { ReactNode } from 'react';

export function DashboardShell({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen w-full bg-(--color-background)">
            <div className="mx-auto flex min-h-screen w-full">
                {/* Desktop sidebar */}
                <Sidebar />

                {/* Mobile top bar */}
                <SideBarMobile />

                <main className="flex-1 flex flex-col">
                    {/* Mobile spacing for top bar */}
                    <div className="h-14 lg:hidden" />

                    {/* Trial / Upgrade Banner */}
                    <UpgradeBanner />
                    {/* Page content */}
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="p-4 lg:p-6">{children}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}