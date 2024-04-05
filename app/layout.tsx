import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/main/navbar";
import Header from "@/components/main/header";
import { socialNetworks } from "@/data";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKRTEEEEEEDev Landing Page",
  description: "Landing page made by SKRTEEEEEEDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header data={socialNetworks}/>
        {children}
      </body>
    </html>
  );
}
