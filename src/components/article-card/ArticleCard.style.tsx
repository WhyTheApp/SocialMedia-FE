import styles from "./ArticleCard.module.css";
import { ReactNode } from "react";
import FileIcon from "@/icons/article_file.svg";
import MoreIcon from "@/icons/more_vertical.svg";

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function ArticleCardContainer({ children }: Props) {
  return <div className={styles.articleCard}>{children}</div>;
}

export function ArticleCardContent({ children, onClick }: Props) {
  return (
    <div className={styles.articleCardContent} onClick={onClick}>
      {children}
    </div>
  );
}

export function ArticleCardDetails({ children }: Props) {
  return <div className={styles.articleCardDetails}>{children}</div>;
}

export function ArticleCardDetailsTextPart({ children }: Props) {
  return <div className={styles.articleCardDetailsTextPart}>{children}</div>;
}

export function ArticleCardDetailsNameSection({ children }: Props) {
  return (
    <div className={styles.articleCardDetailsNameSection}>
      <FileIcon className={styles.articleFile} />
      {children}
    </div>
  );
}

export function ArticleCardDetailsDateSection({ children }: Props) {
  return <div className={styles.articleCardDetailsDateSection}>{children}</div>;
}

export function ArticleCardTitle({ children }: Props) {
  return <p className={styles.articleCardTitle}>{children}</p>;
}

export function ArticleCardContentText({ children }: Props) {
  return <p className={styles.articleCardContentText}>{children}</p>;
}

export function MoreButton({ onClick }: Props) {
  return <MoreIcon className={styles.moreButton} onClick={onClick} />;
}

export function Popup({ children, onClick }: Props) {
  return (
    <p className={styles.popup} onClick={onClick}>
      {children}
    </p>
  );
}
