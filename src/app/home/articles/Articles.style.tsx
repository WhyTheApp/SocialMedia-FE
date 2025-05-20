import styles from "./Articles.module.css";
import { ReactNode, Ref, UIEventHandler } from "react";

interface ScrollProps {
  children: ReactNode;
  ref: Ref<HTMLDivElement>;
  onScroll: UIEventHandler<HTMLDivElement> | undefined;
}

interface TextProps {
  children: ReactNode;
}

export function SoftTitle({ children }: TextProps) {
  return <p className={styles.softTitle}>{children}</p>;
}

export function HardTitle({ children }: TextProps) {
  return <p className={styles.hardTitle}>{children}</p>;
}

export function NormalText({ children }: TextProps) {
  return <p className={styles.normalText}>{children}</p>;
}

export function Container({ children }: TextProps) {
  return <div className={styles.container}>{children}</div>;
}

export function ArticlesScrollContainer({
  ref,
  onScroll,
  children,
}: ScrollProps) {
  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={styles.articlesScrollContainer}
    >
      {children}
    </div>
  );
}

export function MainArticleContainer({ children }: TextProps) {
  return <div className={styles.mainArticleContainer}>{children}</div>;
}

export function MainArticleContentContainer({ children }: TextProps) {
  return <div className={styles.mainArticleContentContainer}>{children}</div>;
}

export function ArticleTitle({ children }: TextProps) {
  return <p className={styles.articleTitle}>{children}</p>;
}

export function ArticleContent({ children }: TextProps) {
  return <p className={styles.articleContent}>{children}</p>;
}
