import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ws-tmux-theming",
  description: "A Next.js application for tmux theming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
