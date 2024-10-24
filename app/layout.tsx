import "./globals.css";

import { Metadata } from "next";
import MainMenu from "@/components/MainMenu";
import Footer from "@/components/Footer";
import { poppins } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
