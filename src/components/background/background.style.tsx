import styles from "./background.module.css";
import { ReactNode } from "react";

interface CenteredContainerProps {
  children: ReactNode;
}

export function Background({ children }: CenteredContainerProps) {
  return (
    <div className={styles.background}>
      <div className={styles.blurredCircle1}></div>
      <div className={styles.blurredCircle2}></div>
      {children}
    </div>
  );
}
