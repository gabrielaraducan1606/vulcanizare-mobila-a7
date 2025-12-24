import styles from "../components/Sections/Sections.module.css";
import { SITE } from "../lib/config.js";
import { defaultMetadata } from "../lib/seo.js";

import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";
import SectionHero from "../components/Sections/SectionHero/SectionHero.jsx";
import SectionServices from "../components/Sections/SectionServices/SectionServices.jsx";
import SectionCoverage from "../components/Sections/SectionCoverage.jsx";
import SectionFAQ from "../components/Sections/SectionFaq.jsx";
import SectionContact from "../components/Sections/SectionContact.jsx";

export const metadata = defaultMetadata({
  title: "Vulcanizare mobilă 24/7 – intervenție rapidă",
  description:
    "Ai făcut pană? Intervenim rapid cu vulcanizare mobilă. Sună sau trimite locația pe WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>●</div>
          <div>
            <div className={styles.brandName}>{SITE.brand}</div>
            <div className={styles.brandSub}>{SITE.serviceAreaLabel}</div>
          </div>
        </div>

        <BurgerMenu />
      </header>

      <main className={styles.main}>
        <section id="hero" className={styles.section}>
          <SectionHero />
        </section>

        <section id="services" className={styles.section}>
          <SectionServices />
        </section>

        <section id="coverage" className={styles.section}>
          <SectionCoverage />
        </section>

        <section id="faq" className={styles.section}>
          <SectionFAQ />
        </section>

        <section id="contact" className={styles.section}>
          <SectionContact />
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} {SITE.brand}. Toate drepturile rezervate.</div>
      </footer>
    </div>
  );
}
