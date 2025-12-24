import "./globals.css";
import { SITE } from "../lib/config.js";

export const metadata = {
  title: `${SITE.brand} – Vulcanizare mobilă`,
  description: "Vulcanizare mobilă 24/7 – intervenție rapidă. Sună sau trimite locația pe WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
