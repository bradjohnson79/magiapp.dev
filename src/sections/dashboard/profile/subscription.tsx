import { Button } from "@/components/ui/Button";

export function SubscriptionSection() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-(--color-foreground)">Subscription</p>
            <p>
                <span className="font-normal">Subscription:</span> <span className="font-semibold">Trial Plan</span>
            </p>
            <p>
                <span className="font-normal">Billing status:</span> <span className="font-semibold">Not required yet</span>
            </p>
            <Button
                type="button"
                label="Upgrade Plan"
                className="inline-flex cursor-pointer h-11 max-w-xs items-center justify-center rounded-md border border-(--color-foreground) bg-(--color-foreground) px-5 text-sm font-semibold text-(--color-background) shadow-sm transition-all hover:bg-[color-mix(in_oklab,var(--color-foreground)_85%,white)]"
            />
        </div>
    )
}