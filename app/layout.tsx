import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'FRAMIO | Content Marketing Agency',
  description: 'Scale Your Content Without Burning Out',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#F8F8F8] text-zinc-900 selection:bg-zinc-900 selection:text-white flex min-h-screen flex-col overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
