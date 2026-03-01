import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Politica de Privacidade",
  description:
    "Informacoes sobre coleta, uso e protecao de dados no site Aurora Mental.",
  path: "/politica-de-privacidade"
});

export default function PoliticaDePrivacidadePage() {
  return (
    <main>
      <Section
        title="Politica de Privacidade"
        subtitle="Este texto inicial deve ser revisado por responsavel juridico antes da publicacao oficial."
      >
        <div className="card legal-text">
          <p>
            Coletamos apenas os dados necessarios para responder contatos
            enviados por formularios, WhatsApp e canais oficiais da clinica.
          </p>
          <p>
            As informacoes sao tratadas com confidencialidade e usadas
            exclusivamente para comunicacao e atendimento.
          </p>
          <p>
            Voce pode solicitar atualizacao ou exclusao de dados pelos canais de
            contato informados no site.
          </p>
        </div>
      </Section>
    </main>
  );
}
