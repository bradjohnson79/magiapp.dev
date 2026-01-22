'use client';

import { FormProvider as RHFProvider, type FieldValues, type UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
    methods: UseFormReturn<T>;
    onSubmit: () => void;
    children: React.ReactNode;
    className?: string;
};

export function FormProvider<T extends FieldValues>({
    methods,
    onSubmit,
    children,
    className,
}: Props<T>) {
    return (
        <RHFProvider {...methods}>
            <form onSubmit={onSubmit} className={className}>
                {children}
            </form>
        </RHFProvider>
    );
}