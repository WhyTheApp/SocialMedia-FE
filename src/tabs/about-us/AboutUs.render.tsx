import BackgroundContainer from "@/components/background";
import {
  CardFooter,
  CardGrid1,
  CardGrid2,
  CardsContainer,
  CardTitle,
  InputInner,
  NormalText,
  SoftTitle,
} from "./AboutUs.style";
import { AboutUsCards } from "@/CONSTANTS/about.constants";
import { AboutUsTitle, AppTitle } from "@/CONSTANTS/ui.constants";
import { TabProps } from "@/CONSTANTS/navigation.constants";
import Background from "@/components/background";
import { Title } from "@/components/title";

const AboutUs = ({ setTab }: TabProps) => {
  const pageContent = (
    <>
      <Background>
        <Title>{AboutUsTitle}</Title>
        <CardsContainer>
          <CardGrid1>
            <InputInner>
              <CardTitle>{AboutUsCards.card1.title}</CardTitle>
              <NormalText>{AboutUsCards.card1.content}</NormalText>
              <CardFooter>{AboutUsCards.card1.footer}</CardFooter>
            </InputInner>
            <InputInner>
              <CardTitle>{AboutUsCards.card2.title}</CardTitle>
              <NormalText>{AboutUsCards.card2.content}</NormalText>
              <CardFooter>{AboutUsCards.card2.footer}</CardFooter>
            </InputInner>
          </CardGrid1>
          <CardGrid2>
            <InputInner>
              <CardTitle>{AboutUsCards.card3.title}</CardTitle>
              <NormalText>{AboutUsCards.card3.content}</NormalText>
              <CardFooter>{AboutUsCards.card3.footer}</CardFooter>
            </InputInner>
            <InputInner>
              <CardTitle>{AboutUsCards.card4.title}</CardTitle>
              <NormalText>{AboutUsCards.card4.content}</NormalText>
              <CardFooter>{AboutUsCards.card4.footer}</CardFooter>
            </InputInner>
          </CardGrid2>
        </CardsContainer>
      </Background>
    </>
  );

  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>
      <SoftTitle>{AppTitle}</SoftTitle>

      {pageContent}
    </BackgroundContainer>
  );
};

export default AboutUs;
