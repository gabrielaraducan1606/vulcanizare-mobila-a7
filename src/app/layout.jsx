import "./globals.css";
import { SITE } from "../lib/config.js";
import HeaderClient from "../components/Header/Header.jsx";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: `${SITE.brand} – Vulcanizare mobilă`,
  description:
    "Vulcanizare mobilă 24/7 – intervenție rapidă. Sună sau trimite locația pe WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body>
        <HeaderClient />
        {children}
      </body>
    </html>
  );
}
