import { Button } from "@/components/ui";
import { ctas, heroContent } from "@/content/siteContent";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Clinica de Psicologia</p>
        <h1 className="hero-title">{heroContent.title}</h1>
        <p className="hero-subtitle">{heroContent.subtitle}</p>
        <p className="hero-support">{heroContent.support}</p>
        <div className="cta-row">
          <Button label={ctas.whatsapp.label} href={ctas.whatsapp.href} />
          <Button
            label={ctas.equipe.label}
            href={ctas.equipe.href}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
