import styles from "./Details.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface TextProps {
  children: ReactNode;
}

export function BottomText({ children }: TextProps) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function ColoredLink({ children }: TextProps) {
  return <a className={styles.coloredLink}>{children}</a>;
}


export function StyledLabel({ children }: Props) {
  return <label className={styles.styledLabel}>{children}</label>;
}

export function InputInner({ children }: Props) {
  return <div className={styles.inputInner}>{children}</div>;
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
export function StyledCheckbox(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input className={styles.styledCheckbox} type="checkbox" {...props} />;
}
