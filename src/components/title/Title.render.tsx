import styles from "./Title.module.css";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function Title({ children }: TextProps) {
  return <p className={styles.title}>{children}</p>;
}
