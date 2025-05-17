import {
  CenteredContainer,
  BottomText,
  ColoredLink,
  InputContainer,
  NormalText,
} from "./ThankYou.style";
import {
  AboutUsText,
  ReadChoiceFirstVariantText,
  ReadChoiceSecondText,
  RoadmapText,
  ThankYouText,
} from "@/CONSTANTS/ui.constants";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();

  const navigateToRoadmap = () => {
    router.push("/home/roadmap");
  };

  const navigateToAboutUs = () => {
    router.push("/home/about-us");
  };

  return (
    <CenteredContainer>
      <InputContainer>
        <NormalText>{ThankYouText}</NormalText>
      </InputContainer>
      <BottomText>
        {ReadChoiceFirstVariantText}{" "}
        <ColoredLink onClick={navigateToAboutUs}>{AboutUsText}</ColoredLink>{" "}
        <br />
        {ReadChoiceSecondText}{" "}
        <ColoredLink onClick={navigateToRoadmap}>{RoadmapText}</ColoredLink>
      </BottomText>
    </CenteredContainer>
  );
};

export default ThankYou;
