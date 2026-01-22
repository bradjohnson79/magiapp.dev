'use client';

import React, { useMemo, useRef } from 'react';
import { Controller, type FieldErrors, useFormContext } from 'react-hook-form';

type OtpFieldProps = {
    name?: string; // default: "code"
    length?: number; // default: 6
};

function getErrorMessage(errors: FieldErrors, name: string): string | undefined {
    const path = name.split('.');
    let cur: unknown = errors;

    for (const key of path) {
        if (!cur || typeof cur !== 'object') return undefined;
        cur = (cur as Record<string, unknown>)[key];
    }

    if (!cur || typeof cur !== 'object') return undefined;
    const obj = cur as Record<string, unknown>;

    // ✅ array-level errors usually land here
    const root = obj.root;
    if (root && typeof root === 'object') {
        const rootMsg = (root as Record<string, unknown>).message;
        if (typeof rootMsg === 'string') return rootMsg;
    }

    // fallback
    const msg = obj.message;
    if (typeof msg === 'string') return msg;

    return undefined;
}

export function OtpCodeField({ name = 'code', length = 6 }: OtpFieldProps) {
    const { control, setValue, getValues, trigger, formState } = useFormContext();

    const refs = useRef<Array<HTMLInputElement | null>>([]);
    const indexes = useMemo(() => Array.from({ length }, (_, i) => i), [length]);

    const focusAt = (i: number) => refs.current[i]?.focus();

    const setDigit = (i: number, v: string) => {
        setValue(`${name}.${i}`, v, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    };

    const onKeyDownAt = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Backspace') return;

        const current = String(getValues(`${name}.${i}`) ?? '');
        if (current) return;

        if (i > 0) {
            e.preventDefault();
            setDigit(i - 1, '');
            focusAt(i - 1);
        }
    };

    const codeError = getErrorMessage(formState.errors, name);
    const showError = (formState.submitCount > 0 || formState.isSubmitted) && !!codeError;

    return (
        <div className="w-full">
            <div className="grid w-full grid-cols-6 gap-2">
                {indexes.map((i) => (
                    <Controller
                        key={i}
                        name={`${name}.${i}`}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                ref={(el) => {
                                    refs.current[i] = el;
                                }}
                                value={(field.value ?? '') as string}
                                onChange={(e) => {
                                    const next = e.target.value.replace(/\D/g, '').slice(0, 1);

                                    field.onChange(next);
                                    if (next && i < length - 1) focusAt(i + 1);

                                    void trigger(name);
                                }}
                                onBlur={field.onBlur}
                                onKeyDown={(e) => onKeyDownAt(i, e)}
                                inputMode="numeric"
                                autoComplete={i === 0 ? 'one-time-code' : 'off'}
                                maxLength={1}
                                aria-label={`Code digit ${i + 1}`}
                                placeholder="•"
                                className={`h-14 w-full rounded-lg border bg-(--color-background) text-center text-sm font-semibold text-(--color-foreground) outline-none placeholder:text-(--color-surface-darker) hover:border-(--color-foreground) focus:border-(--color-foreground) ${showError ? 'border-red-500' : 'border-(--color-surface-muted)'}`}
                            />
                        )}
                    />
                ))}
            </div>

            <p className={`mt-2 min-h-5 text-xs ${showError ? 'text-red-500' : 'text-transparent'}`}>
                {showError ? codeError : 'placeholder'}
            </p>
        </div>
    );
}