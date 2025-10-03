import type { Metadata, Viewport } from "next";
import { Inter, Cinzel, Press_Start_2P } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jade Compass - Retro Adventure Franchise",
  description: "Embark on epic pixelated adventures in the Jade Compass universe. Explore mystical realms, uncover ancient relics, and forge your legend.",
  keywords: ["jade compass", "pixel art", "adventure game", "retro gaming", "indie game", "RPG"],
  authors: [{ name: "Jade Compass Studios" }],
  openGraph: {
    title: "Jade Compass - Retro Adventure Franchise",
    description: "Embark on epic pixelated adventures in the Jade Compass universe.",
    type: "website",
    locale: "en_US",
    siteName: "Jade Compass",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jade Compass - Retro Adventure Franchise",
    description: "Embark on epic pixelated adventures in the Jade Compass universe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#052e16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cinzel.variable} ${pressStart.variable} font-sans antialiased min-h-screen`}
        style={{
          fontFamily: inter.style.fontFamily,
          backgroundColor: 'rgb(2 6 23)',
          color: 'rgb(248 250 252)'
        }}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
