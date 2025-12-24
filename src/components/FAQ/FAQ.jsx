"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ({ items }) {
  return (
    <div className={styles.wrap}>
      {items.map((it, idx) => (
        <FAQItem key={idx} q={it.q} a={it.a} />
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.q} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.icon}>{open ? "–" : "+"}</span>
      </button>
      {open && <div className={styles.a}>{a}</div>}
    </div>
  );
}
