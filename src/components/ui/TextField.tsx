type TextFieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    error?: string;
    autoComplete?: string;
};

export function TextField({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    autoComplete,
}: TextFieldProps) {
    return (
        <label className="flex w-full flex-col gap-1 text-(--color-foreground)">
            <span className="text-sm font-medium">{label}</span>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                autoComplete={autoComplete}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                className={[
                    'h-10 w-full rounded-lg border bg-(--color-background) px-3 text-sm text-(--color-foreground) outline-none placeholder:text-surface-darker/70',
                    'transition-colors',
                    error ? 'border-red-500' : 'border-(--color-surface-muted)',
                    'hover:border-(--color-foreground) focus:border-(--color-foreground)',
                ].join(' ')}
            />

            <span className="min-h-[16px] text-xs text-red-500">{error ?? ''}</span>
        </label>
    );
}