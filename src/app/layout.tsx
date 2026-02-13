import Footer from "@/app/_components/footer";
import { AFI_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import clsx from "clsx";
import Container from "./_components/container";
import HeaderNav from "./_components/navbar";

const text = Raleway({ subsets: ["latin"] });

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/jpeg" href="/assets/img/logo-transparent.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
 
       
      </head>

      <body className={clsx(text.className, "")}>
        <main className="flex">
          <Container>
            <HeaderNav />
            {children}
          </Container>
        </main>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
      </body>
    </html>
  );
}
