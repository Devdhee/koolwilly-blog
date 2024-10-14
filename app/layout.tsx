import "./globals.css";
import { Poppins } from "next/font/google";

import { Metadata } from "next";
import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Koolwilly.",
  description: "Koolwilly ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
