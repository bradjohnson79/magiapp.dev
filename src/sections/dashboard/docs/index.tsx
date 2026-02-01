'use client'


import { Divider } from "@/components/ui/Divider";
import { HeaderSectionDocs } from "./header-section";
import { FilterSection } from "./filter-section";
import { TableDoc } from "./table-doc";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { DocMarkdownPreview } from "@/components/layout.tsx/docs";
import { useMemo, useState } from "react";
import { DOCS } from "@/mock";



export function DocsContentPage() {
    const [selectedDocId, setSelectedDocId] = useState(DOCS[0]?.id ?? '');

    const selectedDoc = useMemo(
        () => DOCS.find((d) => d.id === selectedDocId) ?? DOCS[0],
        [selectedDocId]
    );
    return (
        <div className="flex flex-col gap-6">
            <HeaderSectionDocs />
            <Divider />
            <FilterSection />
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-[1fr_1.5fr]">
                <div className="w-full">
                    <TableDoc
                        rows={DOCS}
                        onSelect={(id) => setSelectedDocId(id)}
                    />
                </div>
                <div className="hidden w-full lg:block">
                    <p className="text-lg lg:text-xl font-medium text-(--color-foreground)">Preview</p>
                    <div className="mt-3 relative w-full h-full min-h-[520px] overflow-hidden rounded-lg border border-(--color-surface-muted) bg-(--color-background)">
                        <div className="absolute right-4 top-4 z-10">
                            <Button
                                type="button"
                                label=""
                                rightIcon={<Icon icon="cuida:edit-outline" width={18} height={18} />}
                                className="inline-flex h-10 w-10 items-center pr-2 justify-center rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) text-(--color-foreground) transition-all duration-300 hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <DocMarkdownPreview content={selectedDoc?.content ?? ''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}