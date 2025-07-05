import styles from "./Sidebar.module.css";
import { ReactNode } from "react";
import LogoSVG from "../../../public/whylogo.svg";
import UserImageSVG from "../../../public/user-placeholder.svg";

interface Props {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface TextProps {
  children: ReactNode;
}

export function SidebarContainer({ children }: Props) {
  return <div className={styles.sidebarContainer}>{children}</div>;
}

export function StyledLogo({ onClick }: Props) {
  return <LogoSVG className={styles.styledLogo} onClick={onClick} />;
}

export function StyledUserImage() {
  return <UserImageSVG className={styles.styledUserImage} />;
}

export function UserArea({ children }: Props) {
  return <div className={styles.userArea}>{children}</div>;
}

export function UserDetails({ children, onClick }: Props) {
  return (
    <div className={styles.userDetails} onClick={onClick}>
      {children}
    </div>
  );
}

export function UsernameText({ children }: TextProps) {
  return <p className={styles.usernameText}>{children}</p>;
}

export function UsernameHandle({ children }: TextProps) {
  return <p className={styles.usernameHandle}>{children}</p>;
}

export function NavigationContainer({ children }: Props) {
  return <div className={styles.navigationContainer}>{children}</div>;
}

export function SocialMediaContainer({ children }: Props) {
  return <div className={styles.socialMediaContainer}>{children}</div>;
}
