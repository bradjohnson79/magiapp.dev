'use client'
import { Divider } from "@/components/ui/Divider";
import { HeaderSectionProfile } from "./header-section";
import { AvatarEdit } from "./avatar-edit";
import { EditInfo } from "./edit-info";
import { SubscriptionSection } from "./subscription";
import { UpgradeCard } from "@/components/ui/UpgradeCard";

export function ProfileContentPage() {
    return (
        <div className="flex flex-col gap-6">
            <HeaderSectionProfile />
            <Divider />
            <div className="grid grid-cols-1 gap-6 gap-y-12 lg:gap-y-0 lg:grid-cols-3">
                <div className="order-1 lg:order-2 lg:col-span-1">
                    <UpgradeCard
                        title="Unlock full MAGI features"
                        subtitle="Upgrade your plan and unlock the full power of MAGI for your projects."
                        buttonLabel="Upgrade Plan"
                        onUpgrade={() => {
                            console.log('Go to billing page');
                        }}
                    />
                </div>
                <div className="order-2 lg:order-1 lg:col-span-2">
                    <div className="flex flex-col gap-12">
                        <AvatarEdit />
                        <EditInfo />
                        <SubscriptionSection />
                    </div>
                </div>
            </div>
        </div>
    )
}