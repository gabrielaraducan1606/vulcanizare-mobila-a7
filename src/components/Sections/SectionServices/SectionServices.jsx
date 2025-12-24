// components/sections/SectionServices/SectionServices.jsx
import styles from "./SectionServices.module.css";
import ServiceCardClient from "./ServiceCardClient.jsx";

const items = [
  {
    key: "pana",
    title: "Pană roată",
    desc: "Reparație rapidă, inclusiv urgențe. Spune reper/km și sensul dacă nu ai GPS.",
    chips: ["Pe loc", "Urgență", "ETA 25–45m"],
    info: "Dacă ai roată de rezervă, o putem monta imediat.",
    highlight: "popular",
  },
  {
    key: "schimb",
    title: "Schimb roată",
    desc: "Montaj roată de rezervă sau înlocuire anvelopă. Verificăm presiune & strângere.",
    chips: ["Set complet", "Siguranță", "Pe loc"],
    info: "Recomandat: triunghi + avarii pornite înainte să cobori.",
    highlight: "safe",
  },
  {
    key: "janta",
    title: "Jantă îndoită",
    desc: "Evaluare și soluție pe loc când se poate. Reducem vibrațiile & pierderea de aer.",
    chips: ["Diagnostic", "Zero vibrații", "Pe loc*"],
    info: "*În funcție de gradul deformării.",
    highlight: "pro",
  },
  {
    key: "pierdere",
    title: "Supapă / pierdere aer",
    desc: "Identificăm scurgeri (supapă, valvă, cui, fisură) și remediem rapid.",
    chips: ["Etanșare", "Verificare", "Rapid"],
    info: "Dacă pierzi aer constant, evită viteza mare până ajungem.",
    highlight: "fast",
  },
];

export default function SectionServices() {
  return (
    <section id="servicii" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.head}>
          <h2 className={styles.h2}>Servicii</h2>
          <p className={styles.p}>
            Alege problema și contactează-ne instant. Trimite locația (GPS) sau spune reper/km.
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((item) => (
            <ServiceCardClient key={item.key} item={item} />
          ))}
        </div>

        <div className={styles.footerNote}>
          <span className={styles.noteDot} />
          <span>ETA este orientativ. Confirmăm telefonic înainte de plecare.</span>
        </div>
      </div>
    </section>
  );
}
