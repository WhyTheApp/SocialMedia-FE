import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://whythe.app";

  const filePath = path.join(process.cwd(), "validPaths.json");
  const rawData = readFileSync(filePath, "utf8");
  const staticRoutes: string[] = JSON.parse(rawData);

  let latestId = 0;
  try {
    const res = await fetch(`${baseUrl}/api/Articles/get-latest-article-id`);
    if (res.ok) {
      latestId = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch latest article ID:", err);
  }

  // Generate article paths from 1 to latestId
  const articleRoutes = Array.from({ length: latestId }, (_, i) => `/home/articles/${i + 1}`);

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
