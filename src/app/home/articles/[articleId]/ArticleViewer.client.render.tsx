"use client";

import { Article } from "@/CONSTANTS/article.constants";
import {
  AddArticleButton,
  ArticleContent,
  ArticlesScrollContainer,
  ArticleTitle,
  MainArticleContainer,
  MainArticleContentContainer,
} from "../Articles.style";
import { MostRecentArticlesHeader } from "@/CONSTANTS/ui.constants";
import ArticleCard from "@/components/article-card";
import {
  ArticleCardDetailsDateSection,
  ArticleCardDetailsNameSection,
  ArticleCardDetailsTextPart,
} from "@/components/article-card/ArticleCard.style";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import { PageHeader } from "@/components/page-header";
import PageContainer from "@/components/page-container/PageContainer.style";
import api from "@/services/Requests.service";
import { getUserRole } from "@/services/TokenManager";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

type ApiResponse = {
  numberFound: number;
  numberRetrieved: number;
  results: Article[];
};

type Props = {
  currentArticle: Article;
};

const ArticlesClient = ({ currentArticle }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Article[]>([]);
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

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

  const ArticleDetailsData = (
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
  );

  const ArticleContentData = (
    <MainArticleContentContainer>
      <ArticleTitle>{currentArticle.title}</ArticleTitle>
      {ArticleDetailsData}
      <ArticleContent html={marked(currentArticle.content)} />
    </MainArticleContentContainer>
  );

  const isUserAdmin = () => {
    return getUserRole() == "Admin";
  };

  const editArticle = () => {
    router.push("/home/articles/edit/" + currentArticle.articleId);
  };

  return (
    <PageContainer>
      {isUserAdmin() && (
        <AddArticleButton onClick={editArticle}>Edit article</AddArticleButton>
      )}
      <MainArticleContainer>{ArticleContentData}</MainArticleContainer>
      <PageHeader>{MostRecentArticlesHeader}</PageHeader>
      <ArticlesScrollContainer ref={containerRef} onScroll={handleScroll}>
        {items.map((item, index) => (
          <div key={index} style={{ scrollSnapAlign: "start" }}>
            <ArticleCard {...item} />
          </div>
        ))}
      </ArticlesScrollContainer>
    </PageContainer>
  );
};

export default ArticlesClient;
