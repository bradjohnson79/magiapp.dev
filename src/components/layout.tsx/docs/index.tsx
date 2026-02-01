'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

function TokenBlock({ value }: { value: string }) {
    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success('Token copied');
        } catch {
            toast.error('Copy failed');
        }
    };

    return (
        <div className="my-4 rounded-lg border border-(--color-soft-violet) bg-(--color-soft-violet) p-4">
            <p className="text-sm font-semibold text-(--color-foreground)">Token</p>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-(--color-surface-muted) bg-(--color-background) px-4 py-3">
                <p className="min-w-0 truncate text-sm font-medium text-(--color-foreground)">{value}</p>

                <button
                    type="button"
                    onClick={onCopy}
                    className="grid h-9 w-9 place-items-center rounded-md border border-(--color-surface-muted) bg-(--color-surface-soft) text-(--color-foreground) transition-colors hover:bg-(--color-background)"
                    aria-label="Copy token"
                >
                    <Icon icon="lucide:copy" width={16} height={16} />
                </button>
            </div>
        </div>
    );
}

export function DocMarkdownPreview({ content }: { content: string }) {
    return (
        <div className="prose prose-sm max-w-none text-(--color-foreground)">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: (props) => <h1 className="mb-3 text-xl font-bold text-(--color-foreground)" {...props} />,
                    h2: (props) => <h2 className="mb-2 mt-6 text-lg font-bold text-(--color-foreground)" {...props} />,
                    p: (props) => <p className="text-sm text-(--color-surface-darker)" {...props} />,
                    hr: () => <div className="my-4 h-px w-full bg-(--color-surface-muted)" />,
                    ol: (props) => <ol className="ml-5 list-decimal text-sm text-(--color-foreground)" {...props} />,
                    ul: (props) => <ul className="ml-5 list-disc text-sm text-(--color-foreground)" {...props} />,
                    li: (props) => <li className="my-1" {...props} />,
                    a: (props) => (
                        <a className="font-semibold text-(--color-foreground) underline underline-offset-4" {...props} />
                    ),
                    code: ({ className, children, ...props }) => {
                        const raw = String(children ?? '').trim();
                        const lang = className?.replace('language-', '') ?? '';

                        // Special: ```token
                        if (lang === 'token') return <TokenBlock value={raw} />;

                        // Inline code (single backticks)
                        const isInline = !className;
                        if (isInline) {
                            return (
                                <code
                                    className="rounded bg-(--color-surface-soft) mb-2 px-1 py-0.5 text-[12px] font-semibold text-(--color-foreground)"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        }

                        // Normal fenced code
                        return (
                            <code
                                className="block whitespace-pre-wrap rounded-lg border border-(--color-surface-muted) bg-(--color-surface-soft) p-3 text-[12px] text-(--color-foreground)"
                                {...props}
                            >
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}