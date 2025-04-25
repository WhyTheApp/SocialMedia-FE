import Privacy from "@/app/privacy/page";
import ThankYou from "@/pages/thank-you/page";
import AboutUs from "@/pages/about-us/page";
import Details from "@/pages/details/page";
import Waitlist from "@/pages/waitlist/page";
import { Dispatch, SetStateAction } from "react";

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
