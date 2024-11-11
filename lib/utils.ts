import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function properCase(value: string) {
    let proper: string;
    proper = value.toLowerCase();

    // STRIP UNDERSCORES
    if (proper.includes('_com')) {
        proper = proper.replaceAll('_', '.');
    } else {
        proper = proper.replaceAll('_', ' ');
    }

    const properWords = proper.split(' ');

    // RETURN URLs
    if (properWords.length <= 1 && proper.includes('_com')) {
        return proper;
    }

    // RETURN ALL OTHERS
    proper = '';
    const finalWords = properWords.map((word) => upperFirstChar(word));

    finalWords.forEach((word, index) =>
        index + 1 !== finalWords.length
            ? (proper += word + ' ')
            : (proper += word)
    );

    return proper;
}

export function upperFirstChar(value: string) {
    const firstChar = value.slice(0, 1);
    const rest = value.slice(1);

    return `${firstChar.toUpperCase()}${rest.toLowerCase()}`;
}
