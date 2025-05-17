import styles from "./Roadmap.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function RoadmapWrapper({ children }: Props) {
  return <div className={styles.roadmapWrapper}>{children}</div>;
}

export function RoadmapItem({ children }: Props) {
  return <div className={styles.roadmapItem}>{children}</div>;
}

export function Label({ children }: Props) {
  return <span className={styles.label}>{children}</span>;
}

export function CurrentBadge({ children }: Props) {
  return <span className={styles.currentBadge}>{children}</span>;
}

export function ColoredLink({ children, onClick }: TextProps) {
  return (
    <a className={styles.coloredLink} onClick={onClick}>
      {children}
    </a>
  );
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}
