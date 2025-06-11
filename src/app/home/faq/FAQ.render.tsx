import { FAQ_QUESTIONS } from "@/CONSTANTS/faq.constants";
import {
  QuestionContainer,
  QuestionContentContainer,
  QuestionTitleContainer,
} from "./FAQ.style";
import { FAQHeader } from "@/CONSTANTS/ui.constants";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-heeader";

const FAQ = () => {
  return (
    <PageContainer>
      <PageHeader>{FAQHeader}</PageHeader>

      {FAQ_QUESTIONS.map((item, index) => (
        <QuestionContainer key={index}>
          <QuestionTitleContainer>{item.question}</QuestionTitleContainer>
          <QuestionContentContainer>{item.answer}</QuestionContentContainer>
        </QuestionContainer>
      ))}
    </PageContainer>
  );
};

export default FAQ;
