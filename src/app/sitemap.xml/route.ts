export const dynamic = "force-dynamic";

import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://whythe.app";

  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  const filePath = path.join(process.cwd(), "validPaths.json");
  const rawData = readFileSync(filePath, "utf8");
  const staticRoutes: string[] = JSON.parse(rawData);

  let articleRoutes: string[] = [];
  try {
    const res = await fetch(`${backendUrl}articles/get-slug-map`);

    const slugList: { id: number; slug: string }[] = await res.json();
    const slugMap: Record<string, string> = {};
    for (const { id, slug } of slugList) {
      slugMap[id.toString()] = slug;
    }

    console.log(slugMap);

    articleRoutes = slugList.map(({ slug }) => `/home/articles/${slug}`);
  } catch (err) {
    console.error("❌ Failed to generate article routes:", err);
  }

  const routes = [...staticRoutes, ...articleRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
