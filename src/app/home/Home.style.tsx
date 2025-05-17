import styles from "./Home.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}

export function CenterContainer({ children }: Props) {
  return <div className={styles.centerContainer}>{children}</div>;
}

export function SidebarContainer({ children }: Props) {
  return <div className={styles.sidebarContainer}>{children}</div>;
}

export function MainContainer({ children }: Props) {
  return <div className={styles.mainContainer}>{children}</div>;
}
