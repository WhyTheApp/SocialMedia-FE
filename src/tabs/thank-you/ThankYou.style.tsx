import { ReactNode } from "react";
import styles from "./ThankYou.module.css";

interface Props {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function ColoredLink({ children }: TextProps) {
  return <a className={styles.coloredLink}>{children}</a>;
}


export function NormalText({ children }: Props) {
  return <p className={styles.normalText}>{children}</p>;
}

export function InputContainer({ children }: Props) {
  return <div className={styles.inputContainer}>{children}</div>;
}
