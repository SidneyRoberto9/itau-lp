import '../styles/globals.css';

import { ReactNode } from 'react';
import { Lato } from 'next/font/google';

import { Header } from '@/components/Header';

import type { Metadata } from 'next';
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Itau - Home',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      </head>
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

