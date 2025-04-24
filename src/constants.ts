import AboutUs from "./pages/about-us/AboutUs.render";
import Privacy from "./app/privacy/page";
import ThankYou from "./app/thank-you/page";
import Details from "./pages/details/page";
import Waitlist from "./pages/waitlist/page";
import { Dispatch, SetStateAction } from "react";

export const JoinText = "Join us";
export const AppTitle = "why - the app";
export const ThankYouText =
  "We will keep you updated.\nThank you for your support";
export const EmailText = "Email";
export const FeedbackText = "Anything else you wish from the app";

export const ReadText = "Read more ";
export const AboutUsText = "about Why";
export const AboutUsTitle = "Our goal";

export const AgreeText =
  "I agree to the processing of my personal data in accordance with the ";
export const PrivacyPolicyText = "Privacy Policy";
export const PromiseText =
  "(We promise we're good, you can check the privacy policy)";

export const AboutUsCards = {
  card1: {
    title: "PRIVACY FIRST",
    content:
      "As a European app, we follow GDPR. Your data is safe - no TikTok-style risks.",
    footer: "Trust matters.",
  },
  card2: {
    title: "FREE SPEECH",
    content:
      "Speak freely. Left, right or center. No instagram bias, no X silencing.",
    footer: "Your voice counts.",
  },
  card3: {
    title: "USER OWNED",
    content:
      "Why’s not corporate. It’s YOURS. Built for users, not for profits. No Reddit-style sellouts here.",
    footer: "Shape your social media app.",
  },
  card4: {
    title: "JOIN US",
    content:
      "We need your help. We need YOU to shape your social media app. Leave us your feedback on the main page of whythe.app. It’s worth it, I promise.",
    footer: "",
  },
};

export const GDPRText = `Privacy Policy
Effective Date: 20 April 2025

Welcome to Why the app (also referred to as whythe.app, “we,” “us,” or “our”). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data—especially when you submit your email or feedback through our registers page or via social media.

1. What Information We Collect
When you interact with us, we may collect the following personal data:

Email Address – when submitted via our registers page or in direct communication.

Feedback or Messages – when you send us comments, opinions, or other input.

Social Media Handles (if applicable) – if you contact us through platforms like Instagram, Twitter, etc.

We do not collect sensitive personal data unless explicitly stated and required.

2. How We Use Your Information
We use the data you provide to:

Respond to your feedback or questions.

Improve our app and services.

Send follow-up communication, if you’ve given consent.

Monitor and improve communication channels.

We do not sell or share your personal data with third parties for marketing.

3. Legal Basis for Processing
We process your data based on the following lawful grounds under GDPR:

Consent – When you voluntarily provide your email or feedback.

Legitimate Interest – To improve our app and respond to inquiries.

You may withdraw your consent at any time by contacting us at letstalk@whythe.app.

4. Data Storage and Retention
Your data is stored securely and retained only as long as necessary for the purposes above or as required by law.

If you request deletion of your personal data, we will comply unless we are legally required to retain it.

5. Your Rights
Under GDPR, you have the right to:

Access the personal data we hold about you.

Request correction or deletion of your data.

Object to or restrict our processing.

Withdraw consent at any time.

Lodge a complaint with a supervisory authority.

To exercise these rights, contact us at: letstalk@whythe.app.

6. Third-Party Services
We may use third-party services (e.g., form processors, analytics tools, or social media platforms) that process data on our behalf. All third parties are GDPR-compliant or bound by similar data protection regulations.

7. Cookies and Tracking
We do not use cookies for the registers page. If this changes in the future, we’ll update this policy accordingly.

8. Updates to This Policy
We may update this policy to reflect changes in legal requirements or how we handle personal data. The latest version will always be available on our website.

9. Contact Us
If you have any questions about this Privacy Policy or your personal data, please contact:

Why the app
Email: letstalk@whythe.app
Website: https://whythe.app`;

export type TabKey =
  | "thank-you"
  | "privacy"
  | "details"
  | "waitlist"
  | "profile"
  | "friends"
  | "settings"
  | "news"
  | "roadmap"
  | "faq"
  | "tabs"
  | "about-us";

export type TabProps = {
  setTab?: Dispatch<SetStateAction<TabKey>>;
};

export type NavButtonProps = {
  Text: string;
  Path: TabKey;
  Active?: boolean;
  setTab?: Dispatch<SetStateAction<TabKey>>;
};

export const TabComponents: Record<TabKey, React.FC<TabProps>> = {
  "thank-you": ThankYou,
  privacy: Privacy,
  details: Details,
  waitlist: Waitlist,

  //placeholders
  profile: Waitlist,
  friends: Waitlist,
  tabs: Waitlist,
  settings: Waitlist,
  news: Waitlist,
  roadmap: Waitlist,
  faq: Waitlist,
  "about-us": AboutUs,
};

export const PLACEHOLDERS = {
  UserName: "Your future username",
  UserHandle: "@YourFutureHandle",
};

export const PathToIcon: Record<string, Record<string, string>> = {
  profile: { active: "profile.svg", inactive: "profile-inactive.svg" },
  friends: { active: "friends.svg", inactive: "friends-inactive.svg" },
  tabs: { active: "tabs.svg", inactive: "tabs-inactive.svg" },
  settings: { active: "settings.svg", inactive: "settings-inactive.svg" },
  news: { active: "news.svg", inactive: "news-inactive.svg" },
  roadmap: { active: "roadmap.svg", inactive: "roadmap-inactive.svg" },
  faq: { active: "faq.svg", inactive: "faq-inactive.svg" },
  "about-us": { active: "goals.svg", inactive: "goals-inactive.svg" },
  waitlist: { active: "waitlist.svg", inactive: "waitlist-inactive.svg" },
};

export const NavigationButtons: {
  Text: string;
  Path: TabKey;
  Active: boolean;
}[] = [
  { Text: "Profile", Path: "profile", Active: false },
  { Text: "Friends", Path: "friends", Active: false },
  { Text: "Tabs", Path: "tabs", Active: false },
  { Text: "Settings", Path: "settings", Active: false },
  { Text: "News", Path: "news", Active: false },
  { Text: "Roadmap", Path: "roadmap", Active: false },
  { Text: "FAQ", Path: "faq", Active: false },
  { Text: "Our goals", Path: "about-us", Active: true },
  { Text: "Waitlist", Path: "waitlist", Active: true },
];
