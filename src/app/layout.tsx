import StyledComponentsRegistry from "../lib/registry";
import "./../CONSTANTS/styles.css";

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
          {/* Base Twitter Pixel script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','pkkew'); // Replace 'pkkew' with your Twitter Pixel ID
            `,
            }}
          />
          {/* Event tracking script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              twq('event', 'tw-pkkew-pkkew', {}); // Trigger the event when needed
            `,
            }}
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
          html, body {
            padding: 0;
            margin: 0;
            font-family: "Outfit", sans-serif;
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
