// components/sections/SectionHero/SectionHero.jsx
import styles from "./SectionHero.module.css";
import { SITE } from "../../../lib/config.js";
import CTAButtons from "../../CTAButtons/CTAButtons.jsx";

export default function SectionHero() {
  const badge =
    SITE.availability === "available"
      ? { cls: styles.green, text: "Disponibil acum" }
      : SITE.availability === "busy"
      ? { cls: styles.red, text: "Ocupat – preluăm în scurt timp" }
      : { cls: styles.gray, text: "Status indisponibil" };

  return (
    <section id="acasa" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={`${styles.badge} ${badge.cls}`}>● {badge.text}</span>
            <span className={styles.pill}>24/7</span>
            <span className={styles.pill}>Cash/Card</span>
            <span className={styles.pill}>Factură</span>
          </div>

          <div className={styles.eyebrow}>
            Vulcanizare mobilă <span className={styles.dot}>•</span> {SITE.serviceAreaLabel}
          </div>

          <h1 className={styles.h1}>
            Intervenim <span className={styles.accent}>rapid</span> pe{" "}
            <span className={styles.accent2}>A7</span> & în județ
          </h1>

          <p className={styles.p}>
            Pană roată, anvelopă tăiată, jantă îndoită? Venim la tine cu echipă mobilă.
            Cel mai simplu: apasă WhatsApp și trimite locația sau sună direct.
          </p>

          <CTAButtons />

          <div className={styles.miniGrid}>
            <div className={styles.miniCard}>
              <div className={styles.miniTitle}>Urgențe</div>
              <div className={styles.small}>Pană roată • Anvelopă explodată • Schimb roată</div>
            </div>

            <div className={styles.miniCard}>
              <div className={styles.miniTitle}>Acoperire</div>
              <div className={styles.small}>{SITE.serviceAreaLabel}</div>
            </div>

            <div className={styles.miniCard}>
              <div className={styles.miniTitle}>Contact rapid</div>
              <div className={styles.small}>Telefon + WhatsApp cu mesaj precompletat</div>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.mapShape} />
            <div className={styles.route} />
            <div className={styles.glowOrb} />
          </div>
        </div>
      </div>
    </section>
  );
}
