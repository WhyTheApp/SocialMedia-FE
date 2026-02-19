import styles from "./FAQ.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children }: Props) {
  return <div className={styles.bentoGrid}>{children}</div>;
}

interface CategoryCardProps extends Props {
  span2?: boolean;
  span2row?: boolean;
}

export function CategoryCard({
  children,
  span2,
  span2row,
}: CategoryCardProps) {
  const classes = [
    styles.categoryCard,
    span2 ? styles.span2 : "",
    span2row ? styles.span2row : "",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{children}</div>;
}

export function CategoryTitle({ children }: Props) {
  return <h3 className={styles.categoryTitle}>{children}</h3>;
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className={styles.faqItem} onClick={onClick}>
      <div className={styles.faqQuestion}>
        {question}
        <span
          className={`${styles.faqChevron} ${isOpen ? styles.open : ""}`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
}
