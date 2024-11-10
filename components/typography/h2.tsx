import { TypographyProps } from './types';

export function H2({ children, className }: TypographyProps) {
    return (
        <h2
            className={`scroll-m-20 font-extrabold tracking-tight ${
                className ? className : ''
            }`}>
            {children}
        </h2>
    );
}
