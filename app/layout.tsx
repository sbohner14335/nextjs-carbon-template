import type { Metadata } from "next";
import "./globals.scss";
import { Content } from "@carbon/react";
import { Header } from "@/components/Header";
import { Providers } from "./providers";

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
        <Providers>
          <Header />
          <Content>{children}</Content>
        </Providers>
      </body>
    </html>
  );
}
