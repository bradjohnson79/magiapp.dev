import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Magi',
  description: 'Magi is a platform for creating and sharing magic spells',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.variable} antialiased`}>
          {children}
          <Toaster
            position="bottom-right"
            richColors={false}
            closeButton
            duration={4000}
            toastOptions={{
              classNames: {
                toast:
                  "group bg-(--color-background) border border-(--color-surface-muted) text-(--color-foreground)",
                closeButton:
                  "opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto",
                success: "[&_[data-icon]]:text-(--color-accent-green)",
                error: "[&_[data-icon]]:text-red-600",
                warning: "[&_[data-icon]]:text-(--color-accent-orange)",
                info: "[&_[data-icon]]:text-(--color-magic-blue)",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
