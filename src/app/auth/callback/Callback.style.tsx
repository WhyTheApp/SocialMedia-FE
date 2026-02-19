import styles from "./Callback.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function CenteredContainer({ children }: Props) {
  return <div className={styles.centeredContainer}>{children}</div>;
}

export function BasicText({ children }: Props) {
  return <p className={styles.basicText}>{children}</p>;
}