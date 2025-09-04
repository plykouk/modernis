import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Using Inter as fallback until TASA Orbiter fonts are available
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-bricolage"
});

export const metadata: Metadata = {
  title: "Modernis - Precision-Crafted German Kitchens",
  description: "Premium German-style kitchens for modern living. Expert design, precision craftsmanship, and exceptional quality.",
  keywords: "German kitchens, modern kitchen design, luxury kitchen remodel, precision craftsmanship",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bricolageGrotesque.variable}`}>{children}</body>
    </html>
  );
}