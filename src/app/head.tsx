// app/head.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why", // Global Title
  description: "Why the app description",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Head() {
  return (
    <>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="theme-color" content="#000000" />

      {/* Charset & Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
}
