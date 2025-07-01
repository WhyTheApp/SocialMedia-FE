import { FC, SVGProps } from "react";

import ProfileIcon from "@/icons/profile.svg";
import FriendsIcon from "@/icons/friends.svg";
import TabsIcon from "@/icons/tabs.svg";
import SettingsIcon from "@/icons/settings.svg";
import NewsIcon from "@/icons/news.svg";
import RoadmapIcon from "@/icons/roadmap.svg";
import FaqIcon from "@/icons/faq.svg";
import AboutUsIcon from "@/icons/goals.svg";
import WaitlistIcon from "@/icons/waitlist.svg";

export type TabKey =
  | "thank-you"
  | "privacy"
  | "details"
  | "waitlist"
  | "profile"
  | "friends"
  | "settings"
  | "articles"
  | "roadmap"
  | "faq"
  | "tabs"
  | "about-us";

export type NavButtonProps = {
  Key: string;
  Text: string;
  Path: TabKey;
  Active?: boolean;
  Clicked?: boolean;
  setClickedButton: React.Dispatch<React.SetStateAction<string | null>>;
};

export const PathToIcon: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  profile: ProfileIcon,
  friends: FriendsIcon,
  tabs: TabsIcon,
  settings: SettingsIcon,
  articles: NewsIcon,
  roadmap: RoadmapIcon,
  faq: FaqIcon,
  "about-us": AboutUsIcon,
  waitlist: WaitlistIcon,
};

export const NavigationButtons: {
  Text: string;
  Path: TabKey;
  Active: boolean;
}[] = [
  { Text: "Roadmap", Path: "roadmap", Active: true },
  { Text: "Blueprint", Path: "articles", Active: true },
  { Text: "FAQ", Path: "faq", Active: true },
  { Text: "Our goals", Path: "about-us", Active: true },
  { Text: "Waitlist", Path: "waitlist", Active: true },
  { Text: "Profile", Path: "profile", Active: false },
  { Text: "Friends", Path: "friends", Active: false },
  { Text: "Tabs", Path: "tabs", Active: false },
  { Text: "Settings", Path: "settings", Active: false },
];
