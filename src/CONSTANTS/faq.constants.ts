export interface FAQCategory {
  title: string;
  span2?: boolean;
  span2row?: boolean;
  questions: { question: string; answer: string }[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "About WHY",
    span2: true,
    questions: [
      {
        question: "What is WHY?",
        answer:
          "WHY is an open source social media platform that is owned by its users, not by a company. We want to bring back the kind of social media that actually felt social. Think friend-focused feeds, community spaces for your interests, and an algorithm that helps real people get noticed. No corporate games.",
      },
      {
        question: "Why are we building WHY?",
        answer:
          "Honestly? Because every major platform right now has let its users down in one way or another. Censorship on one, ads on another, data scandals on a third. We got tired of waiting for someone to fix it, so we decided to build something better ourselves.",
      },
      {
        question: "How is WHY different from other platforms?",
        answer:
          "WHY is not owned by investors or advertisers. It is open source, so you can actually see what is running under the hood. We care about your friends showing up in your feed, not whatever a marketing team paid to put there. Privacy is built in from day one, and we actually mean it when we say free speech.",
      },
      {
        question: "What does user-owned mean?",
        answer:
          "It means there is no CEO making decisions behind closed doors. The people who use WHY are the ones who shape it. You get a say in what features we build, what policies we set, and where this whole thing goes. It is a platform built by its community.",
      },
    ],
  },
  {
    title: "Features",
    span2row: true,
    questions: [
      {
        question: "What features will WHY have?",
        answer:
          "Friend-focused feeds like the early days of Facebook, community tabs for specific topics and interests, direct messaging, and multimedia sharing. We are not forcing anyone into short form content or trends. You post what you want, how you want.",
      },
      {
        question: "What are tabs on WHY?",
        answer:
          "Tabs are community spaces built around topics you actually care about. Think of them like subreddits but on a social media platform. Each one has its own feed, its own moderators, and its own culture. Dive into code, music, cooking, memes, whatever you are into.",
      },
      {
        question: "Will WHY push short-form content?",
        answer:
          "No. You can post short stuff if you want to, but we will never force reels or stories on you. No autoplay, no algorithmic pressure to watch one more video. Your timeline is yours.",
      },
      {
        question: "How will the algorithm work?",
        answer:
          "It will be fully open source so anyone can check what it does. The goal is simple: show you things from people you follow and topics you care about. We will also mix in some new perspectives so you are not stuck in a bubble, but it will never be driven by ad money.",
      },
      {
        question: "How will WHY support creators?",
        answer:
          "By actually showing their work. Our algorithm is designed to surface quality content based on how good it is, not how much someone paid to promote it. Real talent deserves to be seen, and that is exactly what we are building for.",
      },
    ],
  },
  {
    title: "Free Speech",
    questions: [
      {
        question: "How will WHY handle free speech?",
        answer:
          "We believe everyone should be able to speak their mind regardless of political leaning. Left, right, center, it does not matter. As long as you are not breaking the law or directly harming someone, your voice has a place here.",
      },
      {
        question: "Will WHY censor content?",
        answer:
          "Only content that is illegal or genuinely dangerous. We are not interested in silencing opinions just because they are unpopular. Our moderation guidelines will be transparent and you will always have a way to appeal.",
      },
      {
        question: "How will WHY tackle echo chambers?",
        answer:
          "By designing the feed to show you more than just what you already agree with. We want to encourage real conversations, not just people shouting into a void where everyone already agrees. Diverse perspectives make a community stronger.",
      },
      {
        question: "Will WHY have community guidelines?",
        answer:
          "Yes, and they will be straightforward. No harm, no illegal activity. Beyond that, you can say what you think. The guidelines are shaped by the community, not by a legal team trying to cover a corporation.",
      },
    ],
  },
  {
    title: "Privacy and Data",
    questions: [
      {
        question: "How will WHY protect my privacy?",
        answer:
          "Privacy is not an afterthought for us. We are based in Europe and we follow GDPR to the letter. We will never track you without asking first and we will never sell your data to anyone. Period.",
      },
      {
        question: "Will WHY sell user data?",
        answer:
          "Never. That is how the old platforms make their money, but it is not how we work. Your information belongs to you and only you.",
      },
      {
        question: "How does WHY handle user data?",
        answer:
          "We only collect what we need to keep the platform running. You can view, download, or delete your data at any time. No fine print, no tricks, no hidden clauses.",
      },
      {
        question: "Why does GDPR compliance matter?",
        answer:
          "Because it is the highest standard for data protection in the world. Being GDPR compliant means we are legally required to respect your rights and keep your data safe. It is not a marketing checkbox for us, it is a core principle.",
      },
    ],
  },
  {
    title: "Fighting AI Content",
    span2: true,
    questions: [
      {
        question: "How does WHY deal with AI-generated content?",
        answer:
          "We think social media should be a place for real people sharing real thoughts. AI generated posts, comments, and profiles are flooding every other platform right now and making it harder for genuine creators to get noticed. We are building tools to detect and label AI content so users always know what is real and what is not.",
      },
      {
        question: "Will WHY ban AI-generated content?",
        answer:
          "We are not going to ban all AI use outright, but we will make sure it is clearly labeled. If someone passes off AI-generated work as their own, that goes against what WHY stands for. We want to protect the people who actually put in the effort to create something original.",
      },
      {
        question: "Why does protecting genuine creators matter?",
        answer:
          "Because the internet is getting flooded with low effort AI output and it is pushing real creators out of the spotlight. Musicians, artists, writers, developers, they all deserve a platform where their work is valued. That is what we are trying to build.",
      },
      {
        question: "How will WHY verify that content is human-made?",
        answer:
          "We are working on detection systems and community-driven reporting tools. The goal is to give users confidence that what they are seeing comes from a real person. It is a hard problem, but it is one we care deeply about solving.",
      },
    ],
  },
  {
    title: "Open Source",
    questions: [
      {
        question: "Why is WHY open source?",
        answer:
          "Because transparency matters. Our code is public for anyone to read, audit, or contribute to. It keeps us honest and it means the community can actually help shape the product instead of just using it.",
      },
      {
        question: "How can developers contribute?",
        answer:
          "Head over to our GitHub repo and check out the contribution guide. Whether you want to fix a bug, suggest a feature, or build something new, all skill levels are welcome. We are building this together.",
      },
    ],
  },
  {
    title: "Getting Involved",
    questions: [
      {
        question: "When will WHY launch?",
        answer:
          "We are still building it out. Follow us on social media or sign up on the waitlist to be the first to know when we go live.",
      },
      {
        question: "How can I get involved?",
        answer:
          "Spread the word, give us feedback, join the conversation on our social channels, or contribute code on GitHub if that is your thing. Every bit of support helps us get closer to launch.",
      },
      {
        question: "How will WHY be funded?",
        answer:
          "Through user-friendly options like donations, optional premium features, or ethical partnerships. No corporate investors calling the shots and no selling your data. We want to be sustainable without selling out.",
      },
      {
        question: "Will WHY have ads?",
        answer:
          "If we do have any, they will be minimal and clearly marked. We are not building an ad machine. The experience should be about connecting with people, not scrolling past sponsored posts.",
      },
      {
        question: "Why should I care about WHY?",
        answer:
          "Because you have probably felt let down by every other social media platform at some point. WHY is a chance to be part of something that is actually built for you. A platform where your privacy matters, your voice is heard, and real human content comes first.",
      },
    ],
  },
];
