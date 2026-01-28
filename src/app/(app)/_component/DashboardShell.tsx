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

                <main className="flex-1 flex flex-col">
                    {/* Mobile spacing for top bar */}
                    <div className="h-14 lg:hidden" />

                    {/* Trial / Upgrade Banner */}
                    <div className="w-full border-b border-(--color-surface-muted) bg-black text-white">
                        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs lg:text-sm">
                            <p className="truncate">
                                Your free trial has expired. Please upgrade to continue using MAGI.
                            </p>

                            <button className="rounded bg-white px-3 py-1 text-xs font-semibold text-black transition hover:bg-gray-200">
                                Upgrade Now
                            </button>
                        </div>
                    </div>

                    {/* Page content */}
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="p-4 lg:p-6">{children}</div>
                    </div>
                </main>
            </div>
        </div>
    );
}