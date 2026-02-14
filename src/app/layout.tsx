import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bomboni — Premium Bomboloni | Lumer di Mulut, Nyaman di Kantong",
  description:
    "Bomboloni premium handcrafted dengan filling berlimpah. Nutella Blast, Pistachio Glaze, Red Velvet Cream, dan varian lainnya. Fresh daily, order via WhatsApp!",
  keywords: [
    "bomboloni",
    "bomboni",
    "donut",
    "premium",
    "jakarta",
    "delivery",
    "nutella",
    "pistachio",
  ],
  openGraph: {
    title: "Bomboni — Premium Bomboloni",
    description: "Lumer di Mulut, Nyaman di Kantong. Order sekarang via WhatsApp!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
