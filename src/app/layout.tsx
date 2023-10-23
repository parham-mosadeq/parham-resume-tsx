import type { Metadata } from 'next';
import './globals.css';
import { ComponentsChildren } from '@/types/types';
export const metadata: Metadata = {
  title: 'Parham',
  description: "Parham mosadeq's website,resume",
};

export default function RootLayout({ children }: ComponentsChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
