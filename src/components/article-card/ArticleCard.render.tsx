import { Article } from "@/CONSTANTS/article.constants";
import {
  ArticleCardContainer,
  ArticleCardContent,
  ArticleCardContentText,
  ArticleCardDetails,
  ArticleCardDetailsDateSection,
  ArticleCardDetailsNameSection,
  ArticleCardDetailsTextPart,
  ArticleCardTitle,
} from "./ArticleCard.style";

const ArticleCard = (article: Article) => {
  return (
    <ArticleCardContainer>
      <ArticleCardContent>
        <ArticleCardTitle>{article.title}</ArticleCardTitle>
        <ArticleCardContentText>{article.content}</ArticleCardContentText>
      </ArticleCardContent>
      <ArticleCardDetails>
        <ArticleCardDetailsTextPart>
          <ArticleCardDetailsNameSection>
            {article.author}
          </ArticleCardDetailsNameSection>
          <ArticleCardDetailsDateSection>
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </ArticleCardDetailsDateSection>
        </ArticleCardDetailsTextPart>
      </ArticleCardDetails>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
