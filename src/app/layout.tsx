import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Distritherm Services",
  description: "Magasin de materiaux de construction",
  icons: {
    icon: [{ url: '/icone/favicon.ico', type: 'image/x-icon' }],
    shortcut: { url: '/icone/favicon.ico', type: 'image/x-icon' },
    apple: [{ url: '/icone/logofaviconds.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Les balises d'icône seront générées par Next.js à partir de l'objet metadata */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-[140px]">
          {children}
        </div>
        <ScrollToTopButton />
        <ToastContainer position="top-center" autoClose={5000} />
      </body>
    </html>
  );
}
