'use client';

import { getErrorMessage } from '@/lib/utils/help';
import React, { useMemo, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type OtpFieldProps = {
    name?: string; // default: "code"
    length?: number; // default: 6
};


export function OtpCodeField({ name = 'code', length = 6 }: OtpFieldProps) {
    const { control, setValue, getValues, trigger, formState } = useFormContext();

    const refs = useRef<Array<HTMLInputElement | null>>([]);
    const indexes = useMemo(() => Array.from({ length }, (_, i) => i), [length]);

    const focusAt = (i: number) => refs.current[i]?.focus();

    const setDigit = (i: number, v: string) => {
        setValue(`${name}.${i}`, v, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    };

    const fillFrom = (startIndex: number, raw: string) => {
        const digits = raw.replace(/\D/g, '');
        if (!digits) return;

        const room = length - startIndex;
        const sliced = digits.slice(0, room);

        for (let k = 0; k < sliced.length; k++) {
            setDigit(startIndex + k, sliced[k] ?? '');
        }

        // focus next empty or last filled
        const nextFocus = Math.min(startIndex + sliced.length, length - 1);
        focusAt(nextFocus);

        void trigger(name);
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
                                    const raw = e.target.value;

                                    // if user pastes/inputs multiple digits (mobile keyboards sometimes do this)
                                    if (raw.length > 1) {
                                        fillFrom(i, raw);
                                        return;
                                    }

                                    const next = raw.replace(/\D/g, '').slice(0, 1);
                                    field.onChange(next);

                                    if (next && i < length - 1) focusAt(i + 1);
                                    void trigger(name);
                                }}
                                onBlur={field.onBlur}
                                onKeyDown={(e) => onKeyDownAt(i, e)}
                                onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                                    e.preventDefault();
                                    const text = e.clipboardData.getData('text');
                                    fillFrom(i, text);
                                }}
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