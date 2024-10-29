import Footer from "@/app/_components/footer";
import { AFI_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import clsx from "clsx";
import Container from "./_components/container";
import HeaderNav from "./_components/navbar";
import { useState, useEffect } from "react";

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
        (
        <script
          dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3802489,"cookiePolicyId":73787200,"storage":{"useSiteId":true}};
_iub.csLangConfiguration = {"es":{"cookiePolicyId":73787200},"ca":{"cookiePolicyId":36803924}};`,
          }}
        />
        )
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3802489.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        ></script>
        <link rel="icon" type="image/jpeg" href="/assets/img/smallLogo.jpg" />
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
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-37BXH0LR1K"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-37BXH0LR1K', {
                  page_path: window.location.pathname
                });
              `,
          }}
        />
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
      </body>
    </html>
  );
}
