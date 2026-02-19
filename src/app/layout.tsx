import "./../CONSTANTS/styles.css";

export const metadata = {
  title: "WHY | Open Source, User-Owned Social Media Platform",
  description:
    "WHY is an open source social media app built for real people. User-owned, privacy-first, and fighting against AI-generated content. Join the waitlist and help shape a platform that puts genuine creators first.",
  keywords:
    "open source social media, user-owned social media, privacy-first social media platform, anti AI content, genuine creators, free speech social media, GDPR social media, alternative to twitter, alternative to facebook, why the app",
  openGraph: {
    title: "WHY | Open Source, User-Owned Social Media Platform",
    description:
      "A social media app built for real people. User-owned, privacy-first, and standing up for genuine creators against AI-generated noise.",
    type: "website",
    url: "https://whythe.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHY | Open Source, User-Owned Social Media Platform",
    description:
      "A social media app built for real people. User-owned, privacy-first, and standing up for genuine creators against AI-generated noise.",
  },
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                function setTheme() {
                  var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                }
                setTheme();
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);
              })();
            `,
            }}
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
          html, body {
            padding: 0;
            margin: 0;
            font-family: "Manrope", sans-serif;
            box-sizing: border-box;
            min-height: 100vh;
            background-color: var(--color-bg);

          }
          *, *::before, *::after {
            box-sizing: border-box;
          }
        `}</style>
        </head>
        <body style={{ padding: 0, margin: 0 }}>{children}</body>
      </html>
    </>
  );
}
