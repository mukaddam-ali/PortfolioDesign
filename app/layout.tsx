import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description: "A modern, minimalist portfolio showcasing my work as a frontend developer.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-text-primary antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
