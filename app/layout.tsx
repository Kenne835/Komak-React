"use client"

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
