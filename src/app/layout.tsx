import StyledComponentsRegistry from "../lib/registry";

export const metadata = {
  title: "Why The App",
  description: "Register to why and tell us what do you want from Why The App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
          html, body {
            padding: 0;
            margin: 0;
            font-family: "Noto Sans", sans-serif;
            box-sizing: border-box;
            min-height: 100vh;
            background-color: #1e1e1e;

          }
          *, *::before, *::after {
            box-sizing: border-box;
          }
        `}</style>
        </head>
        <body style={{ padding: 0, margin: 0 }}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
