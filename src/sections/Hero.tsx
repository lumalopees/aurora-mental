import { Button } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Hero() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 className="hero-title">{content.hero.title}</h1>
        <p className="hero-subtitle">{content.hero.subtitle}</p>
        <p className="hero-support">{content.hero.support}</p>
        <div className="cta-row">
          <Button
            label={content.ctas.whatsapp.label}
            href={content.ctas.whatsapp.href}
          />
          <Button
            label={content.ctas.team.label}
            href={content.ctas.team.href}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
