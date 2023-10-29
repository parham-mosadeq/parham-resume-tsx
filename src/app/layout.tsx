import type { Metadata } from 'next';
import './globals.css';
import { ComponentsChildren } from '@/types/types';
import Layout from '@/components/Layout/Layout';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Parham',
  description: "Parham mosadeq's website,resume",
};

export default function RootLayout({ children }: ComponentsChildren) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
