'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@/components/ui/TextField';

type Props = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
};

export function RHFTextField({ name, label, type = 'text', placeholder, autoComplete }: Props) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <TextField
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    value={field.value ?? ''}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={fieldState.error?.message}
                />
            )}
        />
    );
}