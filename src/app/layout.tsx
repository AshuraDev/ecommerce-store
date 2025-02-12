import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/provider/modal-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My store",
  description: "E Commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${urbanist.className}`}>
        <ModalProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
