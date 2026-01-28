'use client'

import { DashboardQuickLinks } from "@/components/dashboard/DashboardQuickLinks"
import { QUICK_LINKS } from "@/constant/ui-data"


export function QuickActions() {
    return (
        <div className="flex flex-col gap-4">
            <p className="lg:text-2xl text-lg font-bold text-(--color-foreground)">Quick Actions</p>
            <DashboardQuickLinks items={QUICK_LINKS} />
        </div>
    )
}