import styles from "./SectionBlock.module.css";
import FAQ from "../FAQ/FAQ";

export default function SectionFAQ() {
  const items = [
    { q: "Lucrați pe Autostrada A7?", a: "Da, intervenim pe A7 și în zonele limitrofe. Trimite locația și confirmăm imediat." },
    { q: "Cât durează până ajungeți?", a: "Depinde de poziția echipei și trafic. Îți estimăm un ETA orientativ după locație." },
    { q: "Dacă nu am locația activată?", a: "Poți pune un pin pe hartă sau ne spui reperul/km și sensul de mers." },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.h2}>Întrebări frecvente</h2>
        <p className={styles.p}>Răspunsuri rapide, fără povești.</p>
      </div>
      <FAQ items={items} />
    </div>
  );
}
