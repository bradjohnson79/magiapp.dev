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
    disabled: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
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
    disabled = false,
    leftIcon,
    rightIcon,
}: TextFieldProps) {
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);

    const hasLeft = !!leftIcon;
    const hasRight = !!rightIcon || isPassword; // password eye counts as right icon too

    const inputPadding = [
        hasLeft ? 'pl-10' : 'px-3',
        hasRight ? 'pr-10' : 'pr-3',
    ].join(' ');

    return (
        <label className="flex w-full flex-col gap-1 text-(--color-foreground)">
            <span className="text-sm font-medium">{label}</span>

            <div className="relative">
                <input
                    name={name}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    className={[
                        `h-10 w-full rounded-lg border bg-(--color-background) ${inputPadding} text-sm text-(--color-foreground) outline-none`,
                        'placeholder:text-surface-darker/70 transition-colors',
                        error ? 'border-red-500' : 'border-(--color-surface-muted)',
                        disabled
                            ? 'bg-(--color-surface-soft) text-(--color-surface-darker) border-(--color-surface-muted) cursor-not-allowed opacity-70 placeholder:text-surface-darker/50'
                            : 'hover:border-(--color-foreground) focus:border-(--color-foreground)',
                    ].join(' ')}
                />


                {leftIcon ? (
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--color-surface-darker)">
                        {leftIcon}
                    </span>
                ) : null}

                {isPassword ? (
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-(--color-surface-darker) hover:text-(--color-foreground)"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        <Icon icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} width={18} />
                    </button>
                ) : rightIcon ? (
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--color-surface-darker)">
                        {rightIcon}
                    </span>
                ) : null}
            </div>

            <span className="min-h-4 text-xs text-red-500">
                {error ?? ''}
            </span>
        </label>
    );
}