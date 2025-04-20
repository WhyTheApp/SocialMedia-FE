import BackgroundContainer from "@/components/background";
import {
  CenteredContainer,
  InputContainer,
  NormalText,
  SoftTitle,
} from "./ThankYou.style";
import { AppTitle, ThankYouText } from "@/constants";

const ThankYou = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>
        <InputContainer>
          <NormalText>{ThankYouText}</NormalText>
        </InputContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default ThankYou;
