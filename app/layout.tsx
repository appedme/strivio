import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STRIVIO - Multiple SaaS products under one ecosystem",
  description: "STRIVIO - Multiple SaaS products under one ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
