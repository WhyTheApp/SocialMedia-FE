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

type ArticleContentProps = {
  html?: string | Promise<string>;
  children?: React.ReactNode;
};

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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

export function MediumText({ children }: TextProps) {
  return <p className={styles.mediumText}>{children}</p>;
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

export function ArticlesVerticalScrollContainer({ children }: Props) {
  return (
    <div className={styles.articlesVerticalScrollContainer}>{children}</div>
  );
}

export function MainArticleContainer({ children, onClick }: Props) {
  return (
    <div className={styles.mainArticleContainer} onClick={onClick}>
      {children}
    </div>
  );
}

export function ArticlesContainer({ ref, onScroll, children }: ScrollProps) {
  return (
    <div className={styles.articlesContainer} ref={ref} onScroll={onScroll}>
      {children}
    </div>
  );
}

export function MainArticleContentContainer({ children }: TextProps) {
  return <div className={styles.mainArticleContentContainer}>{children}</div>;
}

export function ArticleTitle({ children }: TextProps) {
  return <p className={styles.articleTitle}>{children}</p>;
}

export function ArticleContent({ html, children }: ArticleContentProps) {
  return (
    <p
      className={styles.articleContent}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : { children })}
    />
  );
}

export function CenteredContainer({ children }: TextProps) {
  return <div className={styles.centeredContainer}>{children}</div>;
}
