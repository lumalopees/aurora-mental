import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Termos de Uso",
  description: "Termos gerais de uso do site da Aurora Mental.",
  path: "/termos"
});

export default function TermosPage() {
  return (
    <main>
      <Section
        title="Termos de Uso"
        subtitle="Texto inicial para referencia. Recomenda-se validacao juridica antes de publicar."
      >
        <div className="card legal-text">
          <p>
            O conteudo deste site tem finalidade informativa e nao substitui
            avaliacao profissional individual.
          </p>
          <p>
            O uso do site implica concordancia com estes termos e com a politica
            de privacidade vigente.
          </p>
          <p>
            A Aurora Mental pode atualizar informacoes e condicoes de uso para
            manter o site seguro, claro e atualizado.
          </p>
        </div>
      </Section>
    </main>
  );
}
