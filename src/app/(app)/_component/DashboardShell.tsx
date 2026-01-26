

import { Sidebar } from '@/components/layout.tsx/sidebar';
import { SideBarMobile } from '@/components/layout.tsx/sidebar-mobile';
import { ReactNode } from 'react';

export function DashboardShell({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen w-full bg-(--color-background)">
            <div className="mx-auto flex min-h-screen w-full">
                {/* Desktop sidebar */}
                <Sidebar />

                {/* Mobile top bar */}
                <SideBarMobile />

                <main className="flex-1">
                    {/* Mobile spacing for top bar */}
                    <div className="h-14 lg:hidden" />

                    <div className="p-4 lg:p-6">
                        <div className="rounded-lg border border-(--color-surface-muted) bg-(--color-background)">
                            <div className="p-4 lg:p-6">{children}</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}