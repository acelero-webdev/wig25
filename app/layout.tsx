import type { Metadata } from 'next';
import { Anybody, Inter } from 'next/font/google';
import './globals.css';
import Nav from './Nav';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const anybody = Anybody({
    subsets: ['latin'],
    variable: '--font-anybody',
    display: 'swap',
});

export const metadata: Metadata = {
    title: '2025 IT WIG',
    description:
        'A powerful website to display and easily share our IT policy infrastructure.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${anybody.variable} ${inter.variable} antialiased bg-background`}>
                <div className='max-w-[1200px] mx-auto h-screen'>
                    <Nav />
                    {children}
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
