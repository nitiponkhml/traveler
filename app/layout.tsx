import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Discover Thailand - Your Ultimate Travel Guide",
  description: "Explore the magic of Thailand with our comprehensive travel guide. From pristine beaches to ancient temples, discover the Land of Smiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${bebasNeue.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
