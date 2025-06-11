import {
  CardFooter,
  CardsContainer,
  CardTitle,
  InputInner,
  NormalText,
} from "./AboutUs.style";
import { AboutUsCards } from "@/CONSTANTS/about.constants";
import { GoalsHeader } from "@/CONSTANTS/ui.constants";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-heeader";

const AboutUs = () => {
  return (
    <PageContainer>
      <PageHeader>{GoalsHeader}</PageHeader>

      <CardsContainer>
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
      </CardsContainer>
    </PageContainer>
  );
};

export default AboutUs;
