import { Metadata } from "next";
import { Homepage } from "./components/pages/Homepage";
import { SEO_IMAGE } from "./constants";

const BASE_URL = process.env.BASE_URL || "https://securedo.sk";

export const metadata: Metadata = {
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

export default function Home() {
  return (
    <div>
      <main>
        <Homepage />
      </main>
    </div>
  );
}
