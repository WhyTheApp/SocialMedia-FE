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
  MoreButton,
  Popup,
} from "./ArticleCard.style";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ArticleCard = (article: Article) => {
  const [popup, setPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const navigateToArticle = () => {
    router.push("/home/articles/" + article.articleId);
  };

  const moreAction = () => {
    setPopup(!popup);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(
      "https://whythe.app/home/articles/" + article.articleId
    );

    setPopup(false);
    setCopied(true);

    await new Promise((r) => setTimeout(r, 2000));

    setCopied(false);
  };

  return (
    <ArticleCardContainer>
      <ArticleCardContent onClick={navigateToArticle}>
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
        <MoreButton onClick={moreAction} />
      </ArticleCardDetails>
      {popup && <Popup onClick={copyLink}>Copy link</Popup>}
      {copied && <Popup>Copied.</Popup>}
    </ArticleCardContainer>
  );
};

export default ArticleCard;
