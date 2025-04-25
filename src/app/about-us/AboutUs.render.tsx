import BackgroundContainer from "@/components/background";
import {
  CardFooter,
  CardGrid1,
  CardGrid2,
  CardsContainer,
  CardTitle,
  CenteredContainer,
  HardTitle,
  InputContainer,
  InputInner,
  NormalText,
  SoftTitle,
} from "./AboutUs.style";
import { AboutUsCards, AppTitle, AboutUsTitle } from "@/constants";

const ThankYou = () => {
  return (
    <BackgroundContainer>
      <SoftTitle>{AppTitle}</SoftTitle>
      <CenteredContainer>
        <HardTitle>{AboutUsTitle}</HardTitle>
        <CardsContainer>
          <CardGrid1>
            <InputContainer>
              <InputInner>
                <CardTitle>{AboutUsCards.card1.title}</CardTitle>
                <NormalText>{AboutUsCards.card1.content}</NormalText>
                <CardFooter>{AboutUsCards.card1.footer}</CardFooter>
              </InputInner>
            </InputContainer>
            <InputContainer>
              <InputInner>
                <CardTitle>{AboutUsCards.card2.title}</CardTitle>
                <NormalText>{AboutUsCards.card2.content}</NormalText>
                <CardFooter>{AboutUsCards.card2.footer}</CardFooter>
              </InputInner>
            </InputContainer>
          </CardGrid1>
          <CardGrid2>
            <InputContainer>
              <InputInner>
                <CardTitle>{AboutUsCards.card3.title}</CardTitle>
                <NormalText>{AboutUsCards.card3.content}</NormalText>
                <CardFooter>{AboutUsCards.card3.footer}</CardFooter>
              </InputInner>
            </InputContainer>
            <InputContainer>
              <InputInner>
                <CardTitle>{AboutUsCards.card4.title}</CardTitle>
                <NormalText>{AboutUsCards.card4.content}</NormalText>
                <CardFooter>{AboutUsCards.card4.footer}</CardFooter>
              </InputInner>
            </InputContainer>
          </CardGrid2>
        </CardsContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default ThankYou;
