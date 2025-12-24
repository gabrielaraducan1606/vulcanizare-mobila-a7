import styles from "./SectionBlock.module.css";
import CTAButtons from "../CTAButtons/CTAButtons";
import { SITE } from "../../lib/config.js";

export default function SectionContact() {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.h2}>Contact</h2>
        <p className={styles.p}>
          Pentru intervenție rapidă: sună sau trimite locația pe WhatsApp.
        </p>
      </div>

      <div className={styles.cardWide}>
        <div className={styles.row}>
          <div>
            <div className={styles.title}>Telefon</div>
            <div className={styles.desc}>{SITE.phone}</div>
          </div>
          <div>
            <div className={styles.title}>Program</div>
            <div className={styles.desc}>24/7 (în funcție de disponibilitate)</div>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <CTAButtons />
        </div>
      </div>
    </div>
  );
}
