import styles from "./AboutUs.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function BentoGrid({ children }: Props) {
  return <div className={styles.bentoGrid}>{children}</div>;
}

interface GoalCardProps extends Props {
  span2?: boolean;
}

export function GoalCard({ children, span2 }: GoalCardProps) {
  const classes = [styles.goalCard, span2 ? styles.span2 : ""]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{children}</div>;
}

export function CardTitle({ children }: Props) {
  return <h3 className={styles.cardTitle}>{children}</h3>;
}

export function CardContent({ children }: Props) {
  return <p className={styles.cardContent}>{children}</p>;
}

export function CardFooter({ children }: Props) {
  return <div className={styles.cardFooter}>{children}</div>;
}
