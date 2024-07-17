import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Bruno Grecco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background text-gray-200 ${montserrat.className}`}>
        <Header />
        <main
          className={`max-w-screen-xl min-h-screen pt-52 mx-auto items-center justify-center text-center ${roboto.className}`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
