import { ReactNode } from "react";
import styles from "./Waitlist.module.css";

interface TextProps {
  children: ReactNode;
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function ColoredLink({ children }: TextProps) {
  return <a className={styles.coloredLink}>{children}</a>;
}
