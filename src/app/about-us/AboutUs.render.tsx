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
              <CardTitle>{AboutUsCards.card1.title}</CardTitle>
              <NormalText>{AboutUsCards.card1.content}</NormalText>
              <CardFooter>{AboutUsCards.card1.footer}</CardFooter>
            </InputContainer>
            <InputContainer>
              <CardTitle>{AboutUsCards.card2.title}</CardTitle>
              <NormalText>{AboutUsCards.card2.content}</NormalText>
              <CardFooter>{AboutUsCards.card2.footer}</CardFooter>
            </InputContainer>
          </CardGrid1>
          <CardGrid2>
            <InputContainer>
              <CardTitle>{AboutUsCards.card3.title}</CardTitle>
              <NormalText>{AboutUsCards.card3.content}</NormalText>
              <CardFooter>{AboutUsCards.card3.footer}</CardFooter>
            </InputContainer>
            <InputContainer>
              <CardTitle>{AboutUsCards.card4.title}</CardTitle>
              <NormalText>{AboutUsCards.card4.content}</NormalText>
              <CardFooter>{AboutUsCards.card4.footer}</CardFooter>
            </InputContainer>
          </CardGrid2>
        </CardsContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default ThankYou;
