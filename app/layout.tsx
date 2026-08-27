import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { PopupNewsletter } from "@/components/popup-newsletter";
import { CartProvider } from "@/components/cart-provider";

// Typo v2 (retour Tom, regle 75) : Cinzel en display, capitales romaines gravees qui font echo
// aux serifs du monogramme UP brode. Jost en corps, geometrique elegant. Identite forte.
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-faq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uncommon People Tribe · Marque de vêtements premium née en Martinique",
  description:
    "Polos et tee-shirts premium nés en Martinique. Broderie or, drapeau martiniquais cousu sur la manche, séries limitées. La Martinique ne se raconte pas, elle se porte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${jost.variable} ${cormorant.variable} antialiased`}>
        <CartProvider>
          <ScrollProgress />
          <PopupNewsletter />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
