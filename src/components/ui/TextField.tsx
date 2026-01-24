'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

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
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);

    return (
        <label className="flex w-full flex-col gap-1 text-(--color-foreground)">
            <span className="text-sm font-medium">{label}</span>

            <div className="relative">
                <input
                    name={name}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    value={value}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    className={[
                        'h-10 w-full rounded-lg border bg-(--color-background) px-3 pr-10 text-sm text-(--color-foreground) outline-none',
                        'placeholder:text-surface-darker/70 transition-colors',
                        error ? 'border-red-500' : 'border-(--color-surface-muted)',
                        'hover:border-(--color-foreground) focus:border-(--color-foreground)',
                    ].join(' ')}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-(--color-surface-darker) hover:text-(--color-foreground)"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        <Icon
                            icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                            width={18}
                        />
                    </button>
                )}
            </div>

            <span className="min-h-4 text-xs text-red-500">
                {error ?? ''}
            </span>
        </label>
    );
}