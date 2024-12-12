'use client'
import { usePathname } from 'next/navigation'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log("ROUTER",pathname);
  //Eğer sayfa "login" ise navbar'ı gizle
  const hideNavbar = pathname === '/';
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!hideNavbar && <Navbar />} {/* Eğer login sayfası değilse, Navbar'ı göster */}
        {children}
      </body>
    </html>
  );
}
