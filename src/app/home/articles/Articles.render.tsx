"use client";

import { Article } from "@/CONSTANTS/article.constants";
import {
  ArticlesContainer,
  ArticlesVerticalScrollContainer,
  ArticleTitle,
  CenteredContainer,
  MediumText,
} from "./Articles.style";
import { MostRecentArticlesHeader } from "@/CONSTANTS/ui.constants";
import ArticleCard from "@/components/article-card";
import { useEffect, useRef, useState } from "react";
import { PageHeader } from "@/components/page-header";
import PageContainer from "@/components/page-container/PageContainer.style";
import api from "@/services/Requests.service";

const PAGE_SIZE = 50;

type ApiResponse = {
  numberFound: number;
  numberRetrieved: number;
  results: Article[];
};

const ArticlesClient = () => {
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
      const response = await api.post<ApiResponse>(url, data);
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
      <div>
        <ArticleTitle>Blueprint</ArticleTitle>
        <MediumText>Dev blog, where we share our coding journey.</MediumText>
        <MediumText>Join us as we build, learn, and grow together.</MediumText>
      </div>
      <CenteredContainer>
        <ArticlesContainer ref={containerRef} onScroll={handleScroll}>
          <PageHeader>{MostRecentArticlesHeader}</PageHeader>
          <ArticlesVerticalScrollContainer>
            {items.map((item, index) => (
              <div key={index} style={{ scrollSnapAlign: "start" }}>
                <ArticleCard {...item} />
              </div>
            ))}
          </ArticlesVerticalScrollContainer>
        </ArticlesContainer>
      </CenteredContainer>
    </PageContainer>
  );
};

export default ArticlesClient;
