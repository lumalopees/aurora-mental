import { Section } from "@/components/ui";
import { blogPosts } from "@/content/siteContent";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <Section
        title="Blog"
        subtitle="Conteudo inicial estatico. Depois vamos conectar com CMS para publicacao dinamica."
      >
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.title} className="card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href="/contato" aria-label={`Ler artigo: ${post.title}`}>
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
