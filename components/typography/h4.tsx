import { TypographyProps } from './types';

export function H4({ children, className }: TypographyProps) {
    return (
        <h4
            className={`scroll-m-20 font-semibold font-sans tracking-tight ${
                className ? className : ''
            }`}>
            {children}
        </h4>
    );
}
