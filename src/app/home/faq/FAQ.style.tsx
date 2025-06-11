import styles from "./FAQ.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
}

export function NormalText({ children }: TextProps) {
  return <p className={styles.normalText}>{children}</p>;
}

export function QuestionContainer({ children }: Props) {
  return <div className={styles.questionContainer}>{children}</div>;
}

export function QuestionTitleContainer({ children }: Props) {
  return <div className={styles.questionTitleContainer}>{children}</div>;
}


export function QuestionContentContainer({ children }: Props) {
  return <div className={styles.questionContentContainer}>{children}</div>;
}
