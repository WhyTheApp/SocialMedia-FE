import styles from "./Roadmap.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function RoadContainer({ children }: Props) {
  return <div className={styles.roadContainer}>{children}</div>;
}

export function ColoredLink({ children, onClick }: Props) {
  return (
    <a className={styles.coloredLink} onClick={onClick}>
      {children}
    </a>
  );
}

export function BottomText({ children }: Props) {
  return <p className={styles.bottomText}>{children}</p>;
}
