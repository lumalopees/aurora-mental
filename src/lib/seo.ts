import type { Metadata } from "next";

const defaultSiteUrl = "https://auroramental.com.br";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const fullUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "website",
      locale: "pt_BR",
      siteName: "Aurora Mental"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
