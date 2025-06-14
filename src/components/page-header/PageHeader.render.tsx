import styles from "./PageHeader.module.css";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function PageHeader({ children }: TextProps) {
  return <p className={styles.title}>{children}</p>;
}
