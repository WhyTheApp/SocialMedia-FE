import { BottomText, CenteredContainer, ColoredLink } from "./Waitlist.style";
import SimpleButton from "@/components/simple-button";

import { useRouter } from "next/navigation";
import {
  JoinUsTitle,
  JoinText,
  ReadChoiceFirstText,
  ReadChoiceSecondText,
  AboutUsText,
  RoadmapText,
} from "@/CONSTANTS/ui.constants";
import { Title } from "@/components/title";

const Waitlist = () => {
  const router = useRouter();

  const navigateToDetailsInput = () => {
    router.push("/home/details");
  };

  const navigateToRoadmap = () => {
    router.push("/home/roadmap");
  };

  const navigateToAboutUs = () => {
    router.push("/home/about-us");
  };

  return (
    <CenteredContainer>
      <Title>{JoinUsTitle}</Title>
      <SimpleButton
        onClick={navigateToDetailsInput}
        buttonText={JoinText}
      ></SimpleButton>
      <BottomText>
        {ReadChoiceFirstText}{" "}
        <ColoredLink onClick={navigateToAboutUs}>{AboutUsText}</ColoredLink>{" "}
        <br />
        {ReadChoiceSecondText}{" "}
        <ColoredLink onClick={navigateToRoadmap}>{RoadmapText}</ColoredLink>
      </BottomText>
    </CenteredContainer>
  );
};

export default Waitlist;
