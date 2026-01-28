'use client'

import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadCumps";
import { useUser } from "@clerk/nextjs";

export function HeaderSectionDashboard() {
    const { user, isLoaded } = useUser();

    const userName = isLoaded
        ? user?.fullName ||
        user?.firstName ||
        user?.username ||
        'there'
        : '';
    return (
        <>
            <DashboardBreadcrumbs />
            <div className="flex flex-col gap-2 items-start">
                <p className="text-lg font-bold text-(--color-foreground) lg:text-2xl">
                    {isLoaded ? `Welcome back, ${userName} 👋` : 'Welcome back 👋'}
                </p>
                <p className="text-sm text-(--color-surface-darker)">Here is an overview of your MAGI account and current status.</p>
            </div>
        </>
    )
}