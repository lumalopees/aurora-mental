import type { Metadata } from "next";
import { Contact, Faq } from "@/sections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato",
  description:
    "Fale com a equipe da Aurora Mental e agende seu atendimento pelo WhatsApp.",
  path: "/contato"
});

export default function ContatoPage() {
  return (
    <main>
      <Contact />
      <Faq />
    </main>
  );
}
