import { ReactNode } from "react";
import styles from "./ThankYou.module.css";

interface Props {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
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

export function NormalText({ children }: Props) {
  return <p className={styles.normalText}>{children}</p>;
}

export function InputContainer({ children }: Props) {
  return <div className={styles.inputContainer}>{children}</div>;
}

export function CenteredContainer({ children }: TextProps) {
  return <div className={styles.centeredContainer}>{children}</div>;
}
