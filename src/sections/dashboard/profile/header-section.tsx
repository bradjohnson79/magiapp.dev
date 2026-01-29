'use client'

import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadCumps";

export function HeaderSectionProfile() {
    return (
        <>
            <DashboardBreadcrumbs />
            <div className="flex flex-col gap-2 items-start">
                <p className="lg:text-2xl text-lg font-bold text-(--color-foreground)">Profile</p>
                <p className="text-sm text-(--color-surface-darker)">This information is used to manage your MAGI access and subscriptions.</p>
            </div>
        </>
    )
}