import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John & Alelie's Wedding | 08.22.2026",
  description: "Be part of our special day",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "var(--cream)", fontFamily: "'Cormorant Garamond', serif" }}>
        {children}
      </body>
    </html>
  );
}
