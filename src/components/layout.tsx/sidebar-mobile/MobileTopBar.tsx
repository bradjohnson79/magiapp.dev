import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";

export function MobileTopBar({
    initial,
    onOpenNav,
    imageUrl,
    onOpenProfile,
}: {
    initial: string;
    imageUrl?: string | null,
    onOpenNav: () => void;
    onOpenProfile: () => void;
}) {
    return (
        <div className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between border-b border-(--color-surface-muted) bg-(--color-background) px-3 lg:hidden">
            <Button
                type="button"
                label=""
                onClick={onOpenNav}
                leftIcon={<Icon icon="ci:menu-alt-01" width={18} height={18} />}
                className="grid h-10 w-10 place-items-center rounded-lg border border-transparent bg-transparent transition-colors hover:bg-(--color-surface-soft) hover:border-(--color-surface-muted)"
                aria-label="Open menu"
            />

            <div className="flex items-center gap-2">
                <Image src="/images/magi-logo.png" alt="MAGI" width={40} height={20} priority className="h-5 w-10" />
            </div>

            <Button
                type="button"
                label=""
                onClick={onOpenProfile}
                className="grid h-10 w-10 place-items-center rounded-full border border-(--color-surface-muted) bg-(--color-background) transition-colors hover:bg-(--color-surface-soft)"
                aria-label="Open profile"
            >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-(--color-soft-blue) text-xs font-bold text-(--color-foreground)">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt=""
                            width={36}
                            height={36}
                            className="h-full w-full object-cover rounded-full"
                        />
                    ) : (
                        initial
                    )}
                </span>
            </Button>
        </div>
    );
}
