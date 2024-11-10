import { TypographyProps } from './types';

export function P({ children, className }: TypographyProps) {
    return (
        <p className={`leading-7 font-sans ${className ? className : ''}`}>
            {children}
        </p>
    );
}
