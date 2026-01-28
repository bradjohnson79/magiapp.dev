'use client'
import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadCumps";

export function ProfileContentPage() {
    return (
        <div className="flex flex-col gap-6">
            <DashboardBreadcrumbs />
            <div className="flex flex-col gap-2 items-start">
                <p className="lg:text-2xl text-lg font-bold text-(--color-foreground)">Profile</p>
            </div>
        </div>
    )
}