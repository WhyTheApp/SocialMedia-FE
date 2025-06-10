import styles from "./Login.module.css";
import { ReactNode } from "react";
import LogoSVG from "../../../public/whylogo.svg";

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function LoginContainer({ children }: Props) {
  return <div className={styles.loginContainer}>{children}</div>;
}

export function LoginTitle({ children }: Props) {
  return <p className={styles.loginTitle}>{children}</p>;
}

export function StyledLogo() {
  return <LogoSVG className={styles.styledLogo} />;
}
