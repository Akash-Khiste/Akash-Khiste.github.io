import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://akash-khiste.github.io"),
  title: "Akash Khiste | Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience building enterprise-scale web applications, internal platforms, and full stack systems.",
  authors: [{ name: "Akash Khiste" }],
  keywords: [
    "Akash Khiste",
    "Senior Software Engineer",
    "Frontend Architecture",
    "Graph Visualization",
    "Enterprise Web Applications",
    "Internal Platforms",
    "React",
    "TypeScript",
    "Next.js",
    "KeyLines",
    "Cytoscape.js",
    "Backend for Frontend",
  ],
  openGraph: {
    title: "Akash Khiste | Senior Software Engineer",
    description:
      "Enterprise-scale web applications, internal platforms, full stack systems, frontend architecture, and technical delivery leadership.",
    url: "https://akash-khiste.github.io",
    siteName: "Akash Khiste Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Akash Khiste | Senior Software Engineer",
    description:
      "Enterprise web applications, internal platforms, full stack systems, and frontend architecture.",
  },
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
