// table-doc.tsx
import { DataTable } from '@/components/layout.tsx/data-table';
import { Badge } from '@/components/ui/Badge';
import { DocMock } from '@/mock';

export function TableDoc({
    rows,
    onSelect,
}: {
    rows: DocMock[];
    onSelect: (id: string) => void;
}) {
    return (
        <DataTable<DocMock>
            gridClassName="grid-cols-[1.6fr_.9fr_.9fr_.7fr]"
            columns={[
                {
                    key: 'title',
                    header: 'Title',
                    cell: (r) => <p className="font-semibold text-(--color-foreground) truncate">{r.title}</p>,
                },
                {
                    key: 'status',
                    header: 'Status',
                    cell: (r) => (
                        <div className="flex items-center">
                            <Badge
                                label={r.status === 'published' ? 'Published' : 'Draft'}
                                variant={r.status === 'published' ? 'dark' : 'neutral'}
                            />
                        </div>
                    ),
                },
                {
                    key: 'generatedBy',
                    header: 'Source',
                    cell: (r) => (
                        <div className="flex items-center">
                            <Badge
                                label={r.generatedBy === 'perplexity' ? 'Perplexity' : r.generatedBy === 'ai' ? 'AI' : 'Human'}
                                variant={r.generatedBy === 'perplexity' ? 'violet' : r.generatedBy === 'ai' ? 'pink' : 'primary'}
                            />
                        </div>
                    ),
                },
                {
                    key: 'lastUpdated',
                    header: 'Date',
                    cell: (r) => (
                        <p className="text-xs font-medium text-(--color-surface-darker)">
                            {new Date(r.lastUpdated).toLocaleDateString()}
                        </p>
                    ),
                },
            ]}
            rows={rows}
            onRowClick={(row) => onSelect(row.id)}
            getRowKey={(row) => row.id}
        />
    );
}