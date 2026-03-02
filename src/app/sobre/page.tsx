import type { Metadata } from "next";
import { Card, Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre",
  description:
    "Conheca a equipe da Aurora Mental e nossa abordagem clinica humanizada.",
  path: "/sobre"
});

export default async function SobrePage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section
        title={content.aboutPage.title}
        subtitle={content.teamSection.description}
      >
        <div className="card">
          <p>{content.aboutPage.intro}</p>
        </div>
      </Section>

      <Section
        title={content.aboutPage.teamTitle}
        subtitle={content.aboutPage.teamSubtitle}
      >
        <div className="grid-3">
          {content.teamMembers.map((member) => (
            <Card
              key={member.name}
              title={member.name}
              description={`${member.role} · ${member.focus}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
