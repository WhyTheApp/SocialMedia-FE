export const RoadmapExtendedText = `This roadmap outlines how we plan to build WHY, our open source social media platform. We are a small team and we are being upfront about that. We do not have exact dates for everything because we would rather be honest than overpromise. Here is what we are working on and what comes next.

Planning and Foundation

We started by figuring out what WHY should actually be. We wrote down the core ideas, designed the informational pages (Our Goals, Waitlist, FAQ, Roadmap), and got the initial website live. The sidebar already shows what the final app navigation will look like. We also set up a dev blog (the Articles page) to share progress and technical decisions as we go.

This phase also included setting up the backend with C# .NET and PostgreSQL, getting CI/CD pipelines running through GitHub, and making sure the hosting infrastructure is solid.

User Accounts and Profiles

The next major step is building user authentication and the Profile page. Secure registration, login, password reset, email verification, all the basics done right. The Profile page will let users set up their identity with a username, bio, and profile picture.

We are keeping this simple on purpose. Get the core right first, then expand based on what users actually want.

Social Features

Once profiles are in place, we move on to the social layer. That means a Friends system where you can send requests, accept or decline them, and see your friends list. We are also building Tabs, which are community spaces organized around topics. Think of them as places to post, share, and discuss things you care about.

The sidebar navigation will become fully functional at this stage, connecting all the main sections of the app.

Feed Algorithm and Testing

This is a big one. We want to build a feed that is fair. No boosting influencers, no pay-to-play, no engagement bait pushed to the top. We are looking at combining chronological ordering with user preferences to surface content that actually matters to you.

Once the feed is working, we will run testing with a small group of early users from the waitlist. Their feedback will shape what we prioritize before opening up to more people.

AI Content Detection

We are building tools to identify and label AI-generated content. Social media is getting flooded with low effort AI posts and it is making it harder for genuine creators to be seen. Our goal is to give users confidence that what they see on WHY was made by a real person.

Content Moderation and Community Tools

We need moderation that is transparent and community-driven. That means clear guidelines, reporting tools, and appeal processes. We are not interested in silencing opinions. The line is illegal activity and genuine harm, nothing else.

Ongoing Improvements

We will keep iterating based on what users tell us. New features, bug fixes, performance improvements. This is not a set-it-and-forget-it platform. We are building WHY with the community, and that means it keeps evolving.
`;

export interface RoadmapMilestone {
  title: string;
  description: string;
  status: "done" | "in-progress" | "upcoming";
}

export const RoadmapEvents: RoadmapMilestone[] = [
  {
    title: "Planning and Foundation",
    description:
      "Define the vision, design informational pages, deploy the initial website with sidebar navigation, set up backend infrastructure, and launch the dev blog.",
    status: "done",
  },
  {
    title: "User Accounts and Profiles",
    description:
      "Build secure authentication (registration, login, email verification, password reset) and the Profile page with username, bio, and profile picture.",
    status: "in-progress",
  },
  {
    title: "Social Features",
    description:
      "Implement the Friends system (requests, friends list) and Tabs for topic-based communities. Make all sidebar navigation sections functional.",
    status: "upcoming",
  },
  {
    title: "Feed Algorithm",
    description:
      "Build a fair, open source feed algorithm that combines chronological ordering with user preferences. No influencer boosting, no pay-to-play.",
    status: "upcoming",
  },
  {
    title: "Early User Testing",
    description:
      "Invite waitlist users to test the platform and gather real feedback on core features, usability, and the feed algorithm.",
    status: "upcoming",
  },
  {
    title: "AI Content Detection",
    description:
      "Develop tools to identify and label AI-generated content, protecting genuine creators and keeping the platform authentic.",
    status: "upcoming",
  },
  {
    title: "Community Moderation Tools",
    description:
      "Build transparent, community-driven moderation with clear guidelines, reporting tools, and appeal processes.",
    status: "upcoming",
  },
  {
    title: "Ongoing Improvements",
    description:
      "Iterate based on user feedback. New features, bug fixes, and performance improvements. WHY keeps evolving with its community.",
    status: "upcoming",
  },
];

export const RoadmapExtendedViewTextStart = "See the ";
export const RoadmapDetailedViewInsertText = "full roadmap ";
export const RoadmapExtendedViewTextEnd = "for more details";
