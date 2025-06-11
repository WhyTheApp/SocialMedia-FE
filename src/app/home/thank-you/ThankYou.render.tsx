import PageContainer from "@/components/page-container/PageContainer.style";
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
  WaitlistHeader,
} from "@/CONSTANTS/ui.constants";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/page-heeader";

const ThankYou = () => {
  const router = useRouter();

  const navigateToRoadmap = () => {
    router.push("/home/roadmap");
  };

  const navigateToAboutUs = () => {
    router.push("/home/about-us");
  };

  return (
    <PageContainer>
      <PageHeader>{WaitlistHeader}</PageHeader>
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
    </PageContainer>
  );
};

export default ThankYou;
