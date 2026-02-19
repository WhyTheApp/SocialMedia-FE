import styles from "./Footer.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface TextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

export function FooterContainer({ children }: Props) {
  return <footer className={styles.footerContainer}>{children}</footer>;
}

export function ColumnsContainer({ children }: Props) {
  return <div className={styles.columnsContainer}>{children}</div>;
}

export function ItemContainer({ children }: Props) {
  return <div className={styles.itemContainer}>{children}</div>;
}

export function ItemTitle({ children }: TextProps) {
  return <p className={styles.itemTitle}>{children}</p>;
}

export function ItemText({ children, onClick }: TextProps) {
  return (
    <p className={styles.itemText} onClick={onClick}>
      {children}
    </p>
  );
}
