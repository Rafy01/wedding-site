import { PropsWithChildren } from "react";
import styles from "./cards.module.css";

type Props = PropsWithChildren<{ className?: string; ariaLabelledby?: string }>;

export default function Card({ children, className, ariaLabelledby }: Props) {
  return (
    <section
      className={[styles.card, className].filter(Boolean).join(" ")}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
