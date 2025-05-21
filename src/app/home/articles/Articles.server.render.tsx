import { Article } from "@/CONSTANTS/article.constants";
import ArticlesClient from "./Articles.client.render";
import { headers } from "next/headers";

export default async function ArticlesServer() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const headersList = await headers();
  const pathname =
    headersList.get("x-pathname") || headersList.get("next-url") || "";

  const pathParts = pathname.split("/");
  const articleId =
    pathParts[pathParts.length - 1] !== "articles"
      ? pathParts[pathParts.length - 1]
      : null;

  const url =
    articleId != null && articleId != ""
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

  return <ArticlesClient currentArticle={currentArticle} />;
}
