import { Article } from "@/CONSTANTS/article.constants";
import {
  ArticleContent,
  ArticlesScrollContainer,
  ArticleTitle,
  Container,
  MainArticleContainer,
  MainArticleContentContainer,
} from "./Articles.style";
import { MostRecentArticlesText } from "@/CONSTANTS/ui.constants";
import ArticleCard from "@/components/article-card";
import { Title } from "@/components/title";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  ArticleCardDetailsDateSection,
  ArticleCardDetailsNameSection,
  ArticleCardDetailsTextPart,
} from "@/components/article-card/ArticleCard.style";

const PAGE_SIZE = 10;
type ApiResponse = {
  numberFound: number;
  numberRetrieved: number;
  results: Article[];
};

const Articles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Article[]>([]);
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentArticle, setCurrentArticle] = useState<Article>();

  const fetchArticles = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "articles/get-filtered";

    const data = {
      onlyCount: false,
      paging: {
        pageSize: PAGE_SIZE,
        pageNumber: pageNumber,
      },
      sorting: {
        fieldToSortBy: "date",
        order: "desc",
      },
    };

    try {
      await axios.post<ApiResponse>(url, data).then((response) => {
        if (response.status === 200 || response.status === 201) {
          if (
            items.length + response.data.numberRetrieved >=
            response.data.numberFound
          )
            setHasMore(false);

          setPage(pageNumber + 1);
          setItems((prev) => [...prev, ...response.data.results]);
        }
      });
    } catch {}
  };

  const fetchFeatured = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "articles/get-featured";

    try {
      await axios.get<Article>(url).then((response) => {
        if (response.status === 200 || response.status === 201) {
          setCurrentArticle(response.data);
        }
      });
    } catch {}
  };

  const fetchMore = async () => {
    setLoading(true);
    await fetchArticles();
    setLoading(false);
  };

  useEffect(() => {
    fetchMore();
    fetchFeatured();
  }, []);

  const handleScroll = () => {
    if (hasMore == false) return;

    const el = containerRef.current;
    if (!el || loading) return;

    const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 100;
    if (nearEnd) fetchMore();
  };

  return (
    <Container>
      <Title>{MostRecentArticlesText}</Title>
      <ArticlesScrollContainer ref={containerRef} onScroll={handleScroll}>
        {items.map((item: Article, index: number) => (
          <div key={index} style={{ scrollSnapAlign: "start" }}>
            <ArticleCard
              articleId={item.articleId}
              title={item.title}
              content={item.content}
              author={item.author}
              date={item.date}
            />
          </div>
        ))}
      </ArticlesScrollContainer>
      {currentArticle && (
        <MainArticleContainer>
          <MainArticleContentContainer>
            <ArticleTitle>{currentArticle.title}</ArticleTitle>
            <ArticleContent>
              {currentArticle.content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </ArticleContent>
          </MainArticleContentContainer>
          <ArticleCardDetailsTextPart>
            <ArticleCardDetailsNameSection>
              {currentArticle.author}
            </ArticleCardDetailsNameSection>
            <ArticleCardDetailsDateSection>
              {new Date(currentArticle.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </ArticleCardDetailsDateSection>
          </ArticleCardDetailsTextPart>
        </MainArticleContainer>
      )}
    </Container>
  );
};

export default Articles;
