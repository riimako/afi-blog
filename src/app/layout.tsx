import Footer from "@/app/_components/footer";
import { AFI_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${AFI_NAME}`,
  description: `Blog del ${AFI_NAME}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca-ES">
      <head>
        <link
          rel="icon"
          type="image/jpeg"
          href="/assets/img/smallLogo.jpg"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={clsx(inter.className, '')}>
          {children}
        <Footer />
      </body>
    </html>
  );
}
