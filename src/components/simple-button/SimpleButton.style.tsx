import styles from "./SimpleButton.module.css";
import { ReactNode } from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
}

export function StyledButton({ onClick, children, disabled }: Props) {
  return (
    <button
      className={styles.simpleButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
