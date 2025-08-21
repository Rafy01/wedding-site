"use client";

import { useEffect, useState } from "react";
import styles from "./ComingSoonOverlay.module.css";

export default function ComingSoonOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Starter fade-in lidt efter at komponenten er mountet
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`${styles.overlay} ${show ? styles.show : ""}`}>
      <h1>Wedding date will be announced soon</h1>
      <p>Stay tuned – we can’t wait to celebrate with you 💍</p>
    </div>
  );
}
