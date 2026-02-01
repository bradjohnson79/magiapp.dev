'use client'

import { getRoleFromUser } from "@/lib/utils/help";
import { useUser } from "@clerk/nextjs";

export function UpgradeBanner({ trialExpired = true }: { trialExpired?: boolean }) {
    const { user, isLoaded } = useUser();
    if (!isLoaded) return null;

    const role = getRoleFromUser(user);

    if (role !== "member" || !trialExpired) return null;

    return (
        <div className="w-full border-b border-(--color-surface-muted) bg-black text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs lg:text-sm">
                <p className="truncate">Your free trial has expired. Please upgrade to continue using MAGI.</p>

                <button
                    type="button"
                    className="rounded bg-white px-3 py-1 text-xs font-semibold text-black transition hover:bg-gray-200"
                >
                    Upgrade Now
                </button>
            </div>
        </div>
    );
}