import type { UserResource } from '@clerk/types';
import { FieldErrors } from 'react-hook-form';

export function getUserName(user: UserResource) {
    return (
        user?.fullName ||
        user?.firstName ||
        user?.username ||
        user?.primaryEmailAddress?.emailAddress ||
        'User'
    );
}

export function splitName(fullName: string) {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return { firstName: parts[0], lastName: '' };
    return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

export function getErrorMessage(errors: FieldErrors, name: string): string | undefined {
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