import { ReactNode } from "react";
import styles from "./SocialMediaGroup.module.css";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function SocialMediaContainer({ children }: Props) {
  return <div className={styles.socialMediaContainer}>{children}</div>;
}
