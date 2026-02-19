import {
  ActionContainer,
  Banner,
  BannerLabel,
  BannerSubtext,
  BannerText,
  BottomText,
  CenteredContainer,
  ImageComponent,
  MainContainer,
  MediaActionRow,
} from "./Landing.style";
import SimpleButton from "@/components/simple-button";

import { useRouter } from "next/navigation";

import {
  CommunityButtonText,
  CommunityLabelText,
  GithubButtonText,
  GithubLabelText,
  WaitlistButtonText,
  WaitlistLabelText,
} from "@/CONSTANTS/landing-page.constants";
import Footer from "@/components/footer";

const Landing = () => {
  const router = useRouter();

  const navigateToDetailsInput = () => {
    router.push("/home/waitlist");
  };

  const navigateToCommunity = () => {
    window.open(
      "https://discord.gg/uHPUdNZxKm",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navigateToGithub = () => {
    window.open(
      "https://github.com/WhyTheApp",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <MainContainer>
      <Banner>
        <BannerLabel>Why, the app</BannerLabel>
        <BannerText>Welcome to Why, the app</BannerText>
        <BannerSubtext>
          Take control of your social media. Join WHY today
        </BannerSubtext>
      </Banner>
      <CenteredContainer>
        <MediaActionRow>
          <ActionContainer>
            <ImageComponent
              src={"https://media.whythe.app/uploads/investor_pitch.webp"}
              alt={"waitlist"}
            />
          </ActionContainer>
          <ActionContainer>
            <SimpleButton
              onClick={navigateToDetailsInput}
              buttonText={WaitlistButtonText}
            ></SimpleButton>
            <BottomText>{WaitlistLabelText}</BottomText>
          </ActionContainer>
        </MediaActionRow>

        <MediaActionRow reverse={true}>
          <ActionContainer>
            <ImageComponent
              src={"https://media.whythe.app/uploads/discord_community.webp"}
              alt={"discord"}
            />
          </ActionContainer>
          <ActionContainer>
            <SimpleButton
              onClick={navigateToCommunity}
              buttonText={CommunityButtonText}
            ></SimpleButton>
            <BottomText>{CommunityLabelText}</BottomText>
          </ActionContainer>
        </MediaActionRow>

        <MediaActionRow>
          <ActionContainer>
            <ImageComponent
              src={"https://media.whythe.app/uploads/github_overview.webp"}
              alt={"github"}
            />
          </ActionContainer>
          <ActionContainer>
            <SimpleButton
              onClick={navigateToGithub}
              buttonText={GithubButtonText}
            ></SimpleButton>
            <BottomText>{GithubLabelText}</BottomText>
          </ActionContainer>
        </MediaActionRow>
      </CenteredContainer>
      <Footer />
    </MainContainer>
  );
};

export default Landing;
