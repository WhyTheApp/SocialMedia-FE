import styles from "./NavigationButton.module.css";
import { FC, ReactNode, SVGProps } from "react";

interface ContainerProps {
  children: ReactNode;
  onClick?: () => void;
  clicked?: boolean;
}

interface NavTextProps {
  children: ReactNode;
  active?: boolean;
  clicked?: boolean;
}

interface NavIconProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  alt: string;
  active?: boolean;
  clicked?: boolean;
}

export function NavButtonContainer({
  children,
  onClick,
  clicked,
}: ContainerProps) {
  return (
    <div
      className={`${styles.navButtonContainer} ${
        clicked ? styles.clicked : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function NavText({ children, active, clicked }: NavTextProps) {
  return (
    <span
      className={`${styles.navText} ${active ? styles.active : ""} ${
        clicked ? styles.clicked : ""
      }`}
    >
      {children}
    </span>
  );
}

export function NavIcon({ icon, alt, active, clicked }: NavIconProps) {
  const IconComponent = icon;

  return (
    <div
      className={`${styles.iconWrapper} ${active ? styles.active : ""} ${
        clicked ? styles.clicked : ""
      }`}
    >
      <IconComponent
        className={styles.navIcon}
        role="img"
        aria-label={alt}
        width={36}
        height={36}
      />
    </div>
  );
}
