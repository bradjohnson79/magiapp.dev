'use client'

import { Badge } from "@/components/ui/Badge";
import { useBoolean } from "@/hooks/use-boolean";
import { getUserName } from "@/lib/utils/help";
import { useUser } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

type Role = 'Admin' | 'Member';

export function AvatarEdit() {
    const { user, isLoaded } = useUser();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const uploading = useBoolean(false);

    if (!isLoaded) return null;

    const userName = getUserName(user!);
    const email = user?.primaryEmailAddress?.emailAddress || '';
    const role: Role = (user?.publicMetadata?.role as string) === 'admin' ? 'Admin' : 'Member';

    const hasRealImage = !!user?.hasImage;
    const imageUrl = hasRealImage ? user?.imageUrl : null;

    const initial = (userName?.trim()?.[0] || 'U').toUpperCase();

    const openPicker = () => {
        if (uploading.value) return;
        inputRef.current?.click();
    };

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file) return;

        try {
            uploading.onTrue()

            // Clerk client-side API (supported)
            await user?.setProfileImage?.({ file });

            toast.success('Avatar updated');
        } catch (err) {
            console.error(err);
            toast.error('Failed to update avatar', { description: 'Please try again.' });
        } finally {
            uploading.onFalse()
        }
    };
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="self-center sm:self-auto">
                <button type="button" onClick={openPicker} disabled={uploading.value} aria-label="Update avatar" className="group relative grid h-42 w-42 place-items-center rounded-full border border-(--color-surface-muted) bg-(--color-surface-soft) transition-opacity disabled:opacity-60">
                    {imageUrl ? (
                        <Image src={imageUrl} alt="" width={1200} height={1200} className="h-full w-full rounded-full object-cover" />
                    ) : (
                        <span className="grid h-full w-full place-items-center rounded-full text-4xl font-bold text-(--color-foreground)">
                            {initial ? initial : <Icon icon="solar:user-linear" width={22} height={22} />}
                        </span>
                    )}

                    {/* Hover edit overlay (works for both states) */}
                    <span className="pointer-events-none absolute inset-0 grid place-items-center rounded-full bg-black/35 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-md bg-(--color-background) px-2 py-1 text-[11px] font-semibold text-(--color-foreground) shadow-sm">
                            <Icon icon="solar:pen-2-linear" width={14} height={14} />
                            Edit
                        </span>
                    </span>
                </button>

                <input ref={inputRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />
            </div>

            <div className="flex w-full flex-col items-start justify-between h-full">
                <div className="flex-col flex gap-2">
                    <p className="text-md lg:text-lg font-semibold text-(--color-foreground)">
                        {userName}
                    </p>
                    <span className="inline-flex max-w-full items-center rounded-md border border-(--color-surface-muted) bg-(--color-surface-soft) px-2.5 py-1 text-xs font-medium text-(--color-surface-darker)">
                        {email}
                    </span>
                </div>
                <div className="lg:mt-8 mt-2">
                    <Badge
                        label={role}
                        variant={role === 'Admin' ? 'primary' : 'neutral'}
                    />
                </div>
            </div>
        </div>
    )
}