"use client";

import { useMemo, useState } from "react";
import styles from "./CoverageMap.module.css";
import { SITE } from "../../lib/config.js";
import { haversineKm, etaMinutes } from "../../lib/geo.js";

export default function CoverageMap() {
  const [client, setClient] = useState(null);
  const [err, setErr] = useState("");

  const data = useMemo(() => {
    if (!client) return null;
    const km = haversineKm(SITE.baseLocation, client);
    const eta = etaMinutes(km, SITE.avgSpeedKmh);
    return { km: Math.round(km * 10) / 10, eta };
  }, [client]);

  function getLocation() {
    setErr("");
    if (!navigator.geolocation) {
      setErr("Browser-ul nu suportă locația. Poți folosi WhatsApp fără GPS sau pune un pin (mai târziu).");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setClient({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => setErr("Nu am putut prelua locația. Activează GPS sau folosește WhatsApp fără GPS."),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.mapMock}>
        <div className={styles.mapTitle}>Hartă (demo)</div>
        <div className={styles.mapSub}>
          În pasul următor o facem reală cu Leaflet (pin + zone + traseu A7).
        </div>

        <div className={styles.coords}>
          <div className={styles.box}>
            <div className={styles.k}>Bază</div>
            <div className={styles.v}>
              {SITE.baseLocation.lat.toFixed(4)}, {SITE.baseLocation.lng.toFixed(4)}
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.k}>Tu</div>
            <div className={styles.v}>
              {client ? `${client.lat.toFixed(4)}, ${client.lng.toFixed(4)}` : "—"}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.btn} onClick={getLocation}>Preia locația mea</button>
        </div>

        {err && <div className={styles.err}>{err}</div>}

        {data && (
          <div className={styles.result}>
            Distanță estimată: <b>{data.km} km</b> · ETA orientativ: <b>{data.eta} min</b>
          </div>
        )}
      </div>
    </div>
  );
}
