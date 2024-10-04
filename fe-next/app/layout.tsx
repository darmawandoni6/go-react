import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          href="/Frame-427319855.webp"
          type="image/webp"
          as="image"
        />
      </head>
      <body className={font.className}>
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
