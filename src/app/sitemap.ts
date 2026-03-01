import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/especialidades",
  "/sobre",
  "/metodologia",
  "/depoimentos",
  "/blog",
  "/contato",
  "/politica-de-privacidade",
  "/termos"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}
