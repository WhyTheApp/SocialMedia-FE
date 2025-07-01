import styles from "./Triangle.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type?: string;
}

export function TriangleGroup({ type }: Props) {
  return (
    <div className={styles.grid}>
      <Triangle type={type} />
      <Triangle type={type} />
      <Triangle type={type} />
      <Triangle type={type} />
    </div>
  );
}

export function Container({ children }: Props) {
  return <div className={styles.fullContainer}>{children}</div>;
}

export function Triangle({ children, type }: Props) {
  return (
    <div className={styles.triangle} data-type={type}>
      {children}
    </div>
  );
}
