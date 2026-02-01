import { DashboardBreadcrumbs } from "@/components/dashboard/DashboardBreadCumps";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";


export function HeaderSectionDocs() {
    return (
        <>
            <DashboardBreadcrumbs />
            <div className="flex flex-col gap-2 items-start">
                <p className="lg:text-2xl text-lg font-bold text-(--color-foreground)">Docs Editor</p>
                <p className="text-sm text-(--color-surface-darker)">Manage MAGI documentation. Publish changes when ready.</p>
            </div>
            <div className="flex gap-8 items-center">
                <Button
                    label="New Doc"
                    href="#"
                    rightIcon={<Icon icon="ic:round-plus" width="18" height="18" />}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-foreground) bg-(--color-foreground) px-6 text-sm font-semibold text-(--color-background) transition-all duration-300 hover:text-(--color-foreground) hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                />
                <Button
                    label="View Published"
                    href="#"
                    rightIcon={<Icon icon="quill:link-out" width="18" height="18" />}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                />
            </div>
        </>
    )
}