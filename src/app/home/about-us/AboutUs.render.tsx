import { AboutUsCards } from "@/CONSTANTS/about.constants";
import {
  BentoGrid,
  GoalCard,
  CardTitle,
  CardContent,
  CardFooter,
} from "./AboutUs.style";
import { GoalsHeader } from "@/CONSTANTS/ui.constants";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-header";

const AboutUs = () => {
  return (
    <PageContainer>
      <PageHeader>{GoalsHeader}</PageHeader>

      <BentoGrid>
        {AboutUsCards.map((card, idx) => (
          <GoalCard key={idx} span2={card.span2}>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
            {card.footer && <CardFooter>{card.footer}</CardFooter>}
          </GoalCard>
        ))}
      </BentoGrid>
    </PageContainer>
  );
};

export default AboutUs;
