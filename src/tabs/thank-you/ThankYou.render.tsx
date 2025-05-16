import BackgroundContainer from "@/components/background";
import {
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
import { TabProps } from "@/CONSTANTS/navigation.constants";
import Background from "@/components/background";

const ThankYou = ({ setTab }: TabProps) => {
  const pageContent = (
    <Background>
      <InputContainer>
        <NormalText>{ThankYouText}</NormalText>
      </InputContainer>
      <BottomText>
        {ReadChoiceFirstVariantText} <ColoredLink>{AboutUsText}</ColoredLink>{" "}
        <br />
        {ReadChoiceSecondText} <ColoredLink>{RoadmapText}</ColoredLink>
      </BottomText>
    </Background>
  );
  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default ThankYou;
