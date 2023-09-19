import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Webino Blogs',
};

const NoSSRNavbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-[#191a1c]">
        <NoSSRNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
