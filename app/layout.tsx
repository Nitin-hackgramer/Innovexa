import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/providers/theme-provider';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innovexa - Tech Community',
  description: 'A thriving community of tech professionals sharing opportunities and knowledge.',
  keywords: 'tech community, freelance, web development, app development, design, cybersecurity',
  authors: [{ name: 'Innovexa Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Innovexa.community',
    title: 'Innovexa - Tech Community',
    description: 'A thriving community of tech professionals sharing opportunities and knowledge.',
    siteName: 'Innovexa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovexa - Tech Community',
    description: 'A thriving community of tech professionals sharing opportunities and knowledge.',
  },
};

// Move the viewport configuration to a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}