export const RoadmapExtendedText = `This roadmap outlines the development of WHY, a web-based social media platform designed to prioritize free speech and equitable content visibility. Spanning from Q2 2025 to Q3 2026, the plan is tailored for a team of two developers, aiming for a beta launch in Q2 2026 and a full launch in Q3 2026. Each phase includes specific deliverables, expected outcomes, and practical considerations to ensure feasibility and appeal to users and investors. The roadmap leverages modern development tools to streamline tasks and incorporates iterative testing to align with user needs.

--------------------

Q2 2025: Planning & Initial Pages
Description: Finalize app planning and design informational pages including Our Goals, Waitlist, FAQ, and Roadmap. Deploy the initial website featuring a sidebar that previews the navigation structure of the upcoming WHY app, with placeholders for Profile, Friends, Tabs, Settings, News, Roadmap, FAQ, Our Goals, and Waitlist. Launch the News page as a dev blog to share technical insights and app progress updates.

Detailed Tasks:

App Planning: Define the app’s vision, target audience, and core features (e.g., profiles, friend connections, Tabs for post organization). Create user stories and wireframes to guide development.
UI Design: Create UI mockups for using tools like Figma.
Informational Pages: Design static pages for Our Goals (mission statement), Waitlist (sign-up form), FAQ (common questions), and Roadmap (high-level plan). Create CI/CD leveraging the Github repositories and hosting server.
Website Deployment: Launch a website with a sidebar showcasing navigation placeholders for all planned sections. Ensure the design aligns with the app’s intended UI/UX.
News Page (Dev Blog): Set up a blog to share technical insights (e.g., tech stack choices) and progress updates, using a custom solution.

Expected Outcomes:

A clear development plan to streamline future phases.
An initial website to attract early adopters and investors.
A dev blog fostering community engagement and transparency.
Infrastructure: Set up a backend (C# .NET) and database (PostgreSQL) to manage user data.
Feasibility: With approximately two months remaining in Q2 2025 (since project start: April 20 to June 30), a team of two can complete these tasks. One developer can focus on planning and content, while the other handles website design and deployment. Static site generators reduce development time, making this phase achievable.

Considerations:

Use responsive design frameworks for the website.
Ensure the News page is easily updatable to maintain regular posts.

--------------------

Q3 2025: Core UI Development
Description: Implement secure user authentication and registration systems. Develop the Profile page allowing users to create and edit their profiles. Design the user interface for Friends and Settings pages. Set up the necessary infrastructure to support user data and interactions.

Detailed Tasks:

User Authentication: Implement secure registration and login using a custom solution. Include features like password reset and email verification.
Profile Page: Develop a functional page with fields for username, bio, and profile picture. Create frontend forms and backend APIs for data storage.
Infrastructure: expand the .NET backend

Expected Outcomes:

A secure authentication system for user onboarding.
A functional Profile page as the app’s core user experience.
UI designs ready for implementation in the next phase.
Backend infrastructure to support social features.
Feasibility: Three months (July to September) is sufficient for these tasks. Authentication setup, taking about one to two weeks. The Profile page, focusing on essential features, can be developed in one month. UI design and infrastructure setup can run concurrently, fitting within the quarter.

Considerations:

Prioritize security with encryption methods like bcrypt for passwords.
Keep Profile page features minimal to meet deadlines, expanding later based on feedback.

--------------------

Q4 2025: Social Features
Description: Fully implement the Friends system, enabling users to send friend requests, accept or decline them, and view their friends list. Develop the Tabs feature for users to create, organize, and share posts. Activate sidebar navigation to access Profile, Friends, and Settings pages.

Detailed Tasks:

Friends System: Build backend logic for friend requests and relationships, with a frontend interface for sending, accepting, and viewing friends. Use the database schema from Q2-Q3.
Tabs Feature: Develop a system for users to create and organize posts into categories or boards, similar to Pinterest’s boards. Implement basic post creation and assignment.
Sidebar Navigation: Enable sidebar links to Profile, Friends, and Settings, ensuring seamless navigation within the app.
Expected Outcomes:

A functional social network for user connections and content sharing.
Active navigation enhancing usability.
A foundation for content engagement in the next phase.
Feasibility: From October to December, the team can leverage Q2-Q3’s infrastructure. The Friends system, estimated at 2–4 weeks, and Tabs, around 3–5 weeks, are manageable with basic implementations. Navigation activation is straightforward, fitting within the three-month period.

Considerations:

Start with simple Tabs functionality, adding features like filters in later phases.

--------------------

Q1 2026: Content & Engagement
Description: In Q1 2026, our primary initiative is to develop and implement a sophisticated feed algorithm that upholds our principles of free speech and ensures content is presented without favoritism towards influencers or popular users, fostering a fair and diverse content experience for all users. In tandem, we will initiate alpha testing with a select group of developers and waitlist users to gather valuable feedback on our core features, including the new feed algorithm.

Detailed Tasks:

Feed Algorithm: Design a feed that avoids bias by using approaches like chronological ordering, user preference-based sorting and other suitable algorithms.
Alpha Testing: Conduct testing with a small group of waitlist users and developers to evaluate Profile, Friends, Tabs, and the feed. Use surveys and analytics for feedback.

Expected Outcomes:

A fair feed prototype enhancing user trust.
Valuable feedback to refine features before the beta launch.
Feasibility: Developing a basic feed algorithm, such as a chronological feed, can take 4–6 weeks. Alpha testing, including setup and analysis, fits within the remaining time. The team can focus on simplicity to meet the three-month deadline.

Considerations:

Ensure testing includes diverse user scenarios to validate free speech principles.

--------------------

Q2 2026: Beta Launch
Description: Release the beta version of WHY, making all sidebar section: Profile, Friends, Tabs, Settings, News, Roadmap, FAQ, Our Goals, Waitlist, fully functional and accessible. Invite users from the waitlist to join the beta and provide feedback. Address any bugs and usability issues based on user input. Finalize preparations for the official public launch.

Detailed Tasks:

Feature Completion: Fully implement Settings and ensure all sidebar sections are functional. Integrate News and Roadmap pages with dynamic content.
Beta Release: Deploy the beta app, inviting waitlist users to join.
Feedback Collection: Gather user feedback through in-app forms and address critical bugs.
Launch Preparation: Plan marketing and finalize launch strategies.
Expected Outcomes:

A fully navigable beta app showcasing WHY’s value proposition.
Actionable feedback for final improvements.
Readiness for the public launch.
Feasibility: Polishing features and fixing bugs in three months is achievable, building on prior work. Beta deployment and feedback collection are standard tasks for this phase.

Considerations:

Use automated testing tools like Jest to identify bugs.
Prioritize user-reported issues to enhance satisfaction.
Q3 2026: Full Launch
Description: Provided we fix any inconvenience that may appear during the beta phase, in Q3 2026 we start the journey.

Detailed Tasks:

Bug Fixes: Address remaining issues from beta feedback.
Official Launch: Release WHY to the public, supported by marketing efforts.
Post-Launch Support: Monitor performance and provide updates.

Expected Outcomes:

A stable, public app attracting users and investors.
A foundation for future enhancements.
Feasibility: Three months allows sufficient time to resolve beta issues and launch, assuming no major setbacks.

Considerations:

Plan a phased rollout to manage server load.
Prepare a support system for user inquiries.


Timeline Overview

Q2 2025:	Planning, informational pages, website, News page	
(Foundation for development and engagement)

Q3 2025:	Authentication, Profile page, UI designs, infrastructure	
(Core systems for user interactions)

Q4 2025:	Friends system, Tabs, sidebar navigation	
(Functional social features)

Q1 2026:	Feed algorithm, alpha testing	
(Fair feed and user feedback)
Q2 2026:	Beta launch, feedback collection	
(Working beta and launch preparation)

Q3 2026:	Full launch, bug fixes	
(Stable public app)
`;

export const RoadmapEvents = [
  {
    label: "Q2 2025",
    title: "📝 Planning & Initial Pages",
    description:
      "Finalize app planning and design informational pages including Our Goals, Waitlist, FAQ, and Roadmap. Deploy the initial website featuring a sidebar that previews the navigation structure of the upcoming WHY app, with placeholders for Profile, Friends, Tabs, Settings, News, Roadmap, FAQ, Our Goals, and Waitlist. Launch the News page as a dev blog to share technical insights and app progress updates.",
    current: true,
  },
  {
    label: "Q3 2025",
    title: "🖥️ Core UI Development",
    description:
      "Implement secure user authentication and registration systems. Develop the Profile page allowing users to create and edit their profiles. Design the user interface for Friends and Settings pages. Set up the necessary infrastructure to support user data and interactions.",
    current: false,
  },
  {
    label: "Q4 2025",
    title: "💬 Social Features",
    description:
      "Fully implement the Friends system, enabling users to send friend requests, accept or decline them, and view their friends list. Develop the Tabs feature for users to create, organize, and share posts. Activate sidebar navigation to access Profile, Friends, and Settings pages.",
    current: false,
  },
  {
    label: "Q1 2026",
    title: "📊 Content & Engagement",
    description:
      "In Q1 2026, our primary initiative is to develop and implement a sophisticated feed algorithm that upholds our principles of free speech and ensures content is presented without favoritism towards influencers or popular users, fostering a fair and diverse content experience for all users. In tandem we will initiate alpha testing with a select group of developers and waitlist users to gather valuable feedback on our core features, including the new feed algorithm.",
    current: false,
  },
  {
    label: "Q2 2026",
    title: "🚀 Beta Launch",
    description:
      "Release the beta version of WHY, making all sidebar sections—Profile, Friends, Tabs, Settings, News, Roadmap, FAQ, Our Goals, and Waitlist—fully functional and accessible. Invite users from the waitlist to join the beta and provide feedback. Address any bugs and usability issues based on user input. Finalize preparations for the official public launch.",
    current: false,
  },
  {
    label: "Q3 2026",
    title: "🚀 Full Launch",
    description:
      "Provided we fix any inconvenience that may appear during the beta phase, in Q3 2026 we start the journey.",
    current: false,
  },
];

export const RoadmapExtendedViewText = "See the detailed view of our roadmap";
