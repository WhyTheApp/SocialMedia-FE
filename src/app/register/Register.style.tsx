import styles from "./Register.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function LoginPageContainer({ children }: Props) {
  return <div className={styles.loginPageContainer}>{children}</div>;
}
