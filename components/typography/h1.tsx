import { TypographyProps } from './types';

export function H1({ children, className }: TypographyProps) {
    return (
        <h1
            className={`scroll-m-20 font-extrabold tracking-tight ${
                className ? className : ''
            }`}>
            {children}
        </h1>
    );
}
