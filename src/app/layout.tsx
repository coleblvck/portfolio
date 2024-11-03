import type { Metadata } from "next";
import "./globals.css";
import Head from "./head";
import Footer from "./footer/footer";

export const metadata: Metadata = {
  title: "Cole's Code Playground",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {Head()}
      <body>
        {children}
        { Footer() }
      </body>
    </html>
  );
}
