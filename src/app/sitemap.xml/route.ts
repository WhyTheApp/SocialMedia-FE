import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://whythe.app";

  const filePath = path.join(process.cwd(), "validPaths.json");
  const rawData = readFileSync(filePath, "utf8");
  const routes: string[] = JSON.parse(rawData);

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
