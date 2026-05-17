import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hrax — Ship beautiful interfaces, faster.",
  description:
    "Hrax is the design and development toolkit for teams who care about craft. Bento components, accessible primitives, and a CLI that gets out of your way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
