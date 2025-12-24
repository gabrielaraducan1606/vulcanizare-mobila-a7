"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BurgerMenu.module.css";
import { SITE } from "../../lib/config.js";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function jump(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <div className={styles.wrap} ref={panelRef}>
      <button className={styles.burger} onClick={() => setOpen((v) => !v)} aria-label="Meniu">
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className={styles.panel}>
          {SITE.sections.map((s) => (
            <button key={s.id} className={styles.item} onClick={() => jump(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
