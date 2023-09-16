import './globals.css';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Webino Blogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-[#191a1c]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
