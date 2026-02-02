import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Footer, Navigation } from "./components/shared";
import { SEO_IMAGE } from "./constants";
import Script from "next/script";

const justSans = localFont({
  src: [
    {
      path: "./fonts/Just-Sans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Just-Sans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Just-Sans-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Just-Sans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-just-sans",
  display: "swap",
});

const BASE_URL = process.env.BASE_URL || "https://securedo.sk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Domov | Securedo",
  description: "Postaráme sa, aby dáta vašej firmy boli v bezpečí.",
  openGraph: {
    title: "Domov | Securedo",
    description: "Postaráme sa, aby dáta vašej firmy boli v bezpečí.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: SEO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Securedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domov | Securedo",
    description: "Postaráme sa, aby dáta vašej firmy boli v bezpečí.",
    images: [SEO_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7G94E0HV5H"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7G94E0HV5H', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${justSans.variable}`}>
        <Navigation />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
