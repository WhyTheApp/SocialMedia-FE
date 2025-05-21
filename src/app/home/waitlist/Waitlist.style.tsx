import { ReactNode } from "react";
import styles from "./Waitlist.module.css";

interface TextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function CenteredContainer({ children }: TextProps) {
  return <div className={styles.centeredContainer}>{children}</div>;
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function ColoredLink({ children, onClick }: TextProps) {
  return (
    <a className={styles.coloredLink} onClick={onClick}>
      {children}
    </a>
  );
}
