import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Khiste | Senior Software Engineer",
  description:
    "Portfolio of Akash Khiste, Senior Software Engineer specializing in frontend systems, architecture, data visualization, and high-performance applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}