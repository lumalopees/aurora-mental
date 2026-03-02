import type { Metadata } from "next";
import { Section } from "@/components/ui";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Conteudos da Aurora Mental sobre saude emocional, terapia e autocuidado.",
  path: "/blog"
});

export default async function BlogPage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section title={content.blogPage.title} subtitle={content.blogPage.subtitle}>
        <div className="blog-list">
          {content.blogPosts.map((post) => (
            <article key={post.title} className="card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link
                href="/contato"
                aria-label={`${content.blogPage.readArticle}: ${post.title}`}
              >
                {content.blogPage.readArticle}
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
