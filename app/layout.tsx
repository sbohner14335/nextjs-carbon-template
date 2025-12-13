import type { Metadata } from "next";
import "./globals.scss";
import { Content, Theme } from "@carbon/react";
import { Header } from "@/components/Header";

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
      <body>
        <Theme theme="g10">
          <Header />
          <Content>{children}</Content>
        </Theme>
      </body>
    </html>
  );
}
