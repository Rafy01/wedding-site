"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./countdown.module.css";

function getParts(diffMs: number) {
  const clamp = Math.max(0, diffMs);
  const s = Math.floor(clamp / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = target - now;
  const { days, hours, minutes, seconds } = getParts(diff);
  const isPassed = diff <= 0;

  return (
    <div aria-live="polite" aria-atomic>
      {!isPassed ? (
        <div className={styles.countdown}>
          <div className={styles.count} aria-label={`${days} days`}>
            <strong>{days}</strong>
            <span>days</span>
          </div>
          <div className={styles.count} aria-label={`${hours} hours`}>
            <strong>{hours}</strong>
            <span>hours</span>
          </div>
          <div className={styles.count} aria-label={`${minutes} minutes`}>
            <strong>{minutes}</strong>
            <span>min</span>
          </div>
          <div className={styles.count} aria-label={`${seconds} seconds`}>
            <strong>{seconds}</strong>
            <span>sec</span>
          </div>
        </div>
      ) : (
        <p>It’s today! 🎉</p>
      )}
    </div>
  );
}
