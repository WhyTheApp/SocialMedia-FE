"use client";

import { Article } from "@/CONSTANTS/article.constants";
import {
  ArticleContent,
  ArticlesScrollContainer,
  ArticleTitle,
  MainArticleContainer,
  MainArticleContentContainer,
} from "./Articles.style";
import { MostRecentArticlesHeader } from "@/CONSTANTS/ui.constants";
import ArticleCard from "@/components/article-card";
import {
  ArticleCardDetailsDateSection,
  ArticleCardDetailsNameSection,
  ArticleCardDetailsTextPart,
} from "@/components/article-card/ArticleCard.style";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { marked } from "marked";
import { PageHeader } from "@/components/page-heeader";
import PageContainer from "@/components/page-container/PageContainer.style";

const PAGE_SIZE = 10;

type ApiResponse = {
  numberFound: number;
  numberRetrieved: number;
  results: Article[];
};

type Props = {
  currentArticle: Article | null;
};

const ArticlesClient = ({ currentArticle }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Article[]>([]);
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "articles/get-filtered";

    const data = {
      onlyCount: false,
      paging: { pageSize: PAGE_SIZE, pageNumber },
      sorting: { fieldToSortBy: "date", order: "desc" },
    };

    try {
      const response = await axios.post<ApiResponse>(url, data);
      if (response.status === 200 || response.status === 201) {
        if (
          items.length + response.data.numberRetrieved >=
          response.data.numberFound
        )
          setHasMore(false);

        setPage(pageNumber + 1);
        setItems((prev) => [...prev, ...response.data.results]);
      }
    } catch {}
  };

  const fetchMore = async () => {
    setLoading(true);
    await fetchArticles();
    setLoading(false);
  };

  useEffect(() => {
    fetchMore();
  }, []);

  const handleScroll = () => {
    if (!hasMore || loading) return;

    const el = containerRef.current;
    if (!el) return;

    const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 100;
    if (nearEnd) fetchMore();
  };

  return (
    <PageContainer>
      <PageHeader>{MostRecentArticlesHeader}</PageHeader>
      <ArticlesScrollContainer ref={containerRef} onScroll={handleScroll}>
        {items.map((item, index) => (
          <div key={index} style={{ scrollSnapAlign: "start" }}>
            <ArticleCard {...item} />
          </div>
        ))}
      </ArticlesScrollContainer>

      {currentArticle && (
        <MainArticleContainer>
          <MainArticleContentContainer>
            <ArticleTitle>{currentArticle.title}</ArticleTitle>
            <ArticleContent html={marked(currentArticle.content)} />
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
    </PageContainer>
  );
};

export default ArticlesClient;
