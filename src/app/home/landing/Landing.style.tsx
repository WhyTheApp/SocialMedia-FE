import { ReactNode } from "react";
import styles from "./Landing.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  reverse?: boolean;
}
interface ImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export function MainContainer({ children }: Props) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export function CenteredContainer({ children }: Props) {
  return <div className={styles.centeredContainer}>{children}</div>;
}

export function Banner({ children }: Props) {
  return <div className={styles.banner}>{children}</div>;
}

export function MediaActionRow({ children, reverse = false }: Props) {
  const classNames = `${styles.mediaActionRow} ${
    reverse ? styles.reverse : ""
  }`;

  return <div className={classNames}>{children}</div>;
}

export function ActionContainer({ children }: Props) {
  return <div className={styles.actionContainer}>{children}</div>;
}

export function BottomText({ children }: Props) {
  return <p className={styles.bottomText}>{children}</p>;
}

export function BannerLabel({ children }: Props) {
  return <p className={styles.bannerLabel}>{children}</p>;
}

export function BannerText({ children }: Props) {
  return <p className={styles.bannerText}>{children}</p>;
}

export function BannerSubtext({ children }: Props) {
  return <p className={styles.bannerSubtext}>{children}</p>;
}

export function ImageComponent({ src, alt, width, height }: ImageProps) {
  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 300}
    />
  );
}
