import styles from "./SimpleButton.module.css";
import { ReactNode } from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export function StyledButton({ onClick, children }: Props) {
  return (
    <button className={styles.simpleButton} onClick={onClick}>
      {children}
    </button>
  );
}
