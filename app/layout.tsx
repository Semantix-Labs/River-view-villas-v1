import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "River View Villas — Ayurvedic Wellness Retreat · Bentota, Sri Lanka",
  description: "A luxury Ayurvedic wellness retreat on the banks of the Bentota River. Doctor-guided healing packages, 30+ treatments, 5 private villas. Est. 2005.",
  keywords: "Ayurvedic retreat Sri Lanka, Panchakarma Bentota, Ayurveda healing, wellness retreat Sri Lanka, Bentota accommodation",
  openGraph: {
    title: "River View Villas — Where Ancient Healing Meets Sacred Stillness",
    description: "Luxury Ayurvedic wellness retreat on the Bentota River, Sri Lanka. Doctor-guided packages from 3 to 21 nights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
