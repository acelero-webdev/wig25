import { TypographyProps } from './types';

export function H3({ children, className }: TypographyProps) {
    return (
        <h3
            className={`scroll-m-20 font-semibold font-sans tracking-tight ${
                className ? className : ''
            }`}>
            {children}
        </h3>
    );
}
