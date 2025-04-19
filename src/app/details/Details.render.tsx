import BackgroundContainer from "@/components/background";
import {
  BottomButton,
  BottomCutout,
  CenteredContainer,
  CustomInput,
  InputContainer,
  InputWithTitle,
  NormalText,
  SoftTitle,
} from "./Details.style";
import SimpleButton from "@/components/simple-button";
import { AppTitle, JoinText } from "@/constants";

const Details = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>
        <InputContainer>
          <BottomCutout />
          <BottomButton>{JoinText}</BottomButton>
          <InputWithTitle>
            <NormalText>Test</NormalText>
            <CustomInput />
          </InputWithTitle>
          <InputWithTitle>
            <NormalText>Test</NormalText>
            <CustomInput />
          </InputWithTitle>
        </InputContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Details;
