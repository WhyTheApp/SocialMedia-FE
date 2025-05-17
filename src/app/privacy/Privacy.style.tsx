import styles from "./Privacy.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CenteredContainer({ children }: Props) {
  return <div className={styles.centeredContainer}>{children}</div>;
}

export function SoftTitle({ children }: Props) {
  return <p className={styles.softTitle}>{children}</p>;
}

export function NormalText({ children }: Props) {
  return <p className={styles.normalText}>{children}</p>;
}

export function BlockOfTextContainer({ children }: Props) {
  return <div className={styles.blockOfTextContainer}>{children}</div>;
}
