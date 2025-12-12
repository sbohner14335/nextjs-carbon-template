import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Content, Theme } from "@carbon/react";
import { Header } from "@/components/Header";
import "@carbon/styles/css/styles.css";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Next.js Starter",
  description: "A starter template for building Next.js apps with the Carbon Design System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme theme="g10">
          <Header />
          <Content>{children}</Content>
        </Theme>
      </body>
    </html>
  );
}
