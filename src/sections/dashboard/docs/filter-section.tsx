import { FilterMenu } from "@/components/ui/FilterMenu";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Icon } from "@iconify/react";
import { useCallback, useMemo, useState } from "react";



type SourceFilter = 'all' | 'human' | 'ai' | 'perplexity';
type StatusFilter = 'all' | 'draft' | 'published';
type SortFilter = 'newest' | 'oldest' | 'title_asc' | 'title_desc';

const SOURCE_OPTIONS: { label: string; value: SourceFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Human', value: 'human' },
    { label: 'AI', value: 'ai' },
    { label: 'Perplexity', value: 'perplexity' },
];

const STATUS_OPTIONS: { label: string; value: StatusFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Draft', value: 'draft' },
    { label: 'Published', value: 'published' },
];

const SORT_OPTIONS: { label: string; value: SortFilter }[] = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Title A–Z', value: 'title_asc' },
    { label: 'Title Z–A', value: 'title_desc' },
];

export function FilterSection() {
    const [search, setSearch] = useState('');
    const [source, setSource] = useState<SourceFilter>('all');
    const [status, setStatus] = useState<StatusFilter>('all');
    const [sort, setSort] = useState<SortFilter>('newest');

    const [openMenu, setOpenMenu] = useState<null | 'source' | 'status' | 'sort'>(null);
    const closeMenu = useCallback(() => setOpenMenu(null), []);

    const sourceLabel = useMemo(() => SOURCE_OPTIONS.find((o) => o.value === source)?.label ?? 'Source', [source]);
    const statusLabel = useMemo(() => STATUS_OPTIONS.find((o) => o.value === status)?.label ?? 'Status', [status]);
    const sortLabel = useMemo(() => SORT_OPTIONS.find((o) => o.value === sort)?.label ?? 'Sort', [sort]);
    return (
        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full max-w-md">
                <TextField
                    label=""
                    name="searchDocs"
                    placeholder="Search docs ..."
                    value={search}
                    onChange={setSearch}
                    disabled={false}
                    rightIcon={<Icon icon="lucide:search" width={18} height={18} />}
                />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
                {/* Source */}
                <div className="relative">
                    <Button
                        type="button"
                        onClick={() => setOpenMenu((v) => (v === 'source' ? null : 'source'))}
                        label={sourceLabel}
                        rightIcon={<Icon icon="lucide:chevron-down" width={18} height={18} />}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                    />
                    <FilterMenu
                        open={openMenu === 'source'}
                        options={SOURCE_OPTIONS}
                        value={source}
                        onChange={setSource}
                        onClose={closeMenu}
                    />
                </div>

                {/* Status */}
                <div className="relative">
                    <Button
                        type="button"
                        onClick={() => setOpenMenu((v) => (v === 'status' ? null : 'status'))}
                        label={statusLabel}
                        rightIcon={<Icon icon="lucide:chevron-down" width={18} height={18} />}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                    />
                    <FilterMenu
                        open={openMenu === 'status'}
                        options={STATUS_OPTIONS}
                        value={status}
                        onChange={setStatus}
                        onClose={closeMenu}
                    />
                </div>

                {/* Sort */}
                <div className="relative">
                    <Button
                        type="button"
                        onClick={() => setOpenMenu((v) => (v === 'sort' ? null : 'sort'))}
                        label={sortLabel}
                        rightIcon={<Icon icon="lucide:chevron-down" width={18} height={18} />}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) px-6 text-sm font-semibold text-(--color-foreground) transition-all duration-300 hover:bg-(--color-background) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15"
                    />
                    <FilterMenu
                        open={openMenu === 'sort'}
                        options={SORT_OPTIONS}
                        value={sort}
                        onChange={setSort}
                        onClose={closeMenu}
                    />
                </div>
            </div>
        </div>
    )
}