// components/sections/SectionServices/ServiceCardClient.jsx
"use client";

import styles from "./SectionServices.module.css";
import { SITE } from "../../../lib/config.js";

function buildWhatsAppText({ serviceTitle, lat, lng } = {}) {
  const parts = [
    "Bună! Am nevoie de vulcanizare mobilă.",
    serviceTitle ? `Serviciu: ${serviceTitle}` : "Serviciu: (nespecificat)",
    "Problemă: (scriu aici detalii)",
  ];

  if (lat && lng) {
    parts.push(`Locație: https://maps.google.com/?q=${lat},${lng}`);
  } else {
    parts.push("Locație: (nu am GPS activ) – reper/km și sensul de mers.");
  }

  return parts.join("\n");
}

function openWhatsApp({ serviceTitle, lat, lng } = {}) {
  const text = buildWhatsAppText({ serviceTitle, lat, lng });
  const url = `https://wa.me/${SITE.whatsappPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function ServiceCardClient({ item }) {
  const onWhatsAppWithLocation = () => {
    if (!navigator.geolocation) {
      openWhatsApp({ serviceTitle: item.title });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        openWhatsApp({ serviceTitle: item.title, lat: latitude, lng: longitude });
      },
      () => openWhatsApp({ serviceTitle: item.title }),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{item.title}</h3>
          <span className={styles.kicker}>24/7</span>
        </div>

        <p className={styles.desc}>{item.desc}</p>

        <div className={styles.chips}>
          {item.chips.map((c) => (
            <span key={c} className={styles.chip}>{c}</span>
          ))}
        </div>
      </div>

      <div className={styles.infoBox}>
        <span className={styles.infoIcon}>i</span>
        <span className={styles.infoText}>{item.info}</span>
      </div>

      {/* ACTIONS ROW */}
      <div className={styles.actionsRow}>
        <a className={styles.call} href={`tel:${SITE.phone}`}>
          📞 Sună
        </a>

        <button
          type="button"
          className={styles.wa}
          onClick={onWhatsAppWithLocation}
        >
          💬 GPS
        </button>

        <button
          type="button"
          className={styles.waGhost}
          onClick={() => openWhatsApp({ serviceTitle: item.title })}
        >
          Fără GPS
        </button>
      </div>
    </article>
  );
}
