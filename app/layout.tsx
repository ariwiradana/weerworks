import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weerworks | Music, Design & Web Solutions",
  description:
    "Weerworks is a creative studio offering Music Production, Branding & Creative Design, Website Development, and Event & Media Services including Digital Invitations, Audiobooks, Wedding Photography, and Photobooth.",
  keywords: [
    "Weerworks",
    "Music Production",
    "Creative Design",
    "Website Development",
    "Digital Invitation",
    "Audiobook",
    "Wedding Photography",
    "Photobooth",
    "Branding",
    "Mixing Mastering",
    "Bali Creative Studio",
  ],
  authors: [{ name: "Weerworks" }],
  creator: "Weerworks",
  openGraph: {
    title: "Weerworks – Music, Design & Web Solutions",
    description:
      "Music • Design • Web • Event & Media Services. Your one-stop creative hub in Bali.",
    url: "https://weerworks.live",
    siteName: "Weerworks",
    images: [
      {
        url: "https://weerworks.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weerworks Creative Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weerworks – Music, Design & Web Solutions",
    description:
      "Creative studio in Bali: Music Production, Creative Design, Website Development, and Event & Media Services.",
    images: ["https://weerworks.live/og-image.jpg"],
  },
  alternates: {
    canonical: "https://weerworks.live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
