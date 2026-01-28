import { DashboardOverviewCards } from "./dashboard-overview";
import { HeaderSectionDashboard } from "./header-section";
import { QuickActions } from "./quick-actions";
import { TrialPeriodCard } from "./trial-card";


export function DashboardMainContentPage() {
    return (
        <div className="flex flex-col gap-6">
            <HeaderSectionDashboard />
            <DashboardOverviewCards />
            <TrialPeriodCard />
            <QuickActions />
        </div>
    )
}