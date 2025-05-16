import styles from "./AboutUs.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
}

export function CenteredContainer({ children }: Props) {
  return <div className={styles.centeredContainer}>{children}</div>;
}

export function SoftTitle({ children }: TextProps) {
  return <p className={styles.softTitle}>{children}</p>;
}

export function HardTitle({ children }: TextProps) {
  return <p className={styles.hardTitle}>{children}</p>;
}

export function NormalText({ children }: TextProps) {
  return <p className={styles.normalText}>{children}</p>;
}

export function CardsContainer({ children }: Props) {
  return <div className={styles.cardsContainer}>{children}</div>;
}

export function CardGrid1({ children }: Props) {
  return <div className={styles.cardGrid1}>{children}</div>;
}

export function CardGrid2({ children }: Props) {
  return <div className={styles.cardGrid2}>{children}</div>;
}

export function InputContainer({ children }: Props) {
  return <div className={styles.inputContainer}>{children}</div>;
}

export function InputInner({ children }: Props) {
  return <div className={styles.inputInner}>{children}</div>;
}

export function CardTitle({ children }: TextProps) {
  return <p className={styles.cardTitle}>{children}</p>;
}

export function CardFooter({ children }: TextProps) {
  return <p className={styles.cardFooter}>{children}</p>;
}
