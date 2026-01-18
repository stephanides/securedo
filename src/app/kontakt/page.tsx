import { Metadata } from "next";
import { Contact } from "../components/pages/Contact";
import { SEO_IMAGE } from "../constants";

const BASE_URL = process.env.BASE_URL || "https://securedo.sk";

export const metadata: Metadata = {
  title: "Kontakt | Securedo",
  description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
  openGraph: {
    title: "Kontakt | Securedo",
    description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
    url: `${BASE_URL}/kontakt`,
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
    title: "Kontakt | Securedo",
    description: "Ozvite sa nám, aby dáta vašej firmy boli v bezpečí.",
    images: [SEO_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
