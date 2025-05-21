import { Article } from "@/CONSTANTS/article.constants";
import ArticlesClient from "./Articles.client.render";

type Props = {
  params: { articleId?: string };
};

const ArticlesPage = async ({ params }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const articleId = params?.articleId;

  const url = articleId
    ? `${baseUrl}articles/get-article?articleId=${articleId}`
    : `${baseUrl}articles/get-featured`;

  let currentArticle: Article | null = null;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) {
      currentArticle = await res.json();
    }
  } catch (e) {
    console.error("SSR article fetch error:", e);
  }

  return (
    <>
      <ArticlesClient currentArticle={currentArticle} />
    </>
  );
};

export default ArticlesPage;
