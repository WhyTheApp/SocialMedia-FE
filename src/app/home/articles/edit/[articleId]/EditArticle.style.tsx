import { ReactNode } from "react";
import styles from "./EditArticle.module.css";
import ImageUpload from "@/icons/article-content-icons/image.svg";
import Hyperlink from "@/icons/article-content-icons/hyperlink.svg";
import Uppercase from "@/icons/article-content-icons/uppercase.svg";
import Close from "@/icons/close.svg";

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function HorizontalContainer({ children }: Props) {
  return <div className={styles.horizontalContainer}>{children}</div>;
}

export function SmallHorizontalContainer({ children }: Props) {
  return <div className={styles.smallHorizontalContainer}>{children}</div>;
}

export function MainContainer({ children }: Props) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export function PreviewContainer({ children }: Props) {
  return <div className={styles.previewContainer}>{children}</div>;
}

export function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input className={styles.customInput1} {...props} />;
}

export function CustomLargeInput(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return <textarea className={styles.customInput2} {...props} />;
}

export function CloseIcon({ onClick }: Props) {
  return <Close className={styles.icon} onClick={onClick} />;
}

export function StyledImageUpload({ onClick }: Props) {
  return <ImageUpload className={styles.icon} onClick={onClick} />;
}

export function StyledHyperlink({ onClick }: Props) {
  return <Hyperlink className={styles.icon} onClick={onClick} />;
}

export function StyledUppercase({ onClick }: Props) {
  return <Uppercase className={styles.icon} onClick={onClick} />;
}

export function HelpersContainer({ children }: Props) {
  return <div className={styles.helpersContainer}>{children}</div>;
}

export function ModalContainer({ children }: Props) {
  return <div className={styles.modalContainer}>{children}</div>;
}
