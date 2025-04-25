import BackgroundContainer from "@/components/background";
import {
  CenteredContainer,
  InputContainer,
  NormalText,
  SoftTitle,
} from "./ThankYou.style";
import { AppTitle, ThankYouText } from "@/CONSTANTS/ui.constants";
import { TabProps } from "@/CONSTANTS/navigation.constants";

const ThankYou = ({ setTab }: TabProps) => {
  const pageContent = (
    <CenteredContainer>
      <SoftTitle>{AppTitle}</SoftTitle>
      <InputContainer>
        <NormalText>{ThankYouText}</NormalText>
      </InputContainer>
    </CenteredContainer>
  );
  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default ThankYou;
