# Aurora Mental

Site institucional da clinica **Aurora Mental**, desenvolvido para apresentar servicos de psicologia, gerar confianca e facilitar contato via WhatsApp.

## Finalidade do projeto

- Estruturar uma presenca digital profissional para a clinica.
- Exibir informacoes de atendimento de forma clara e acolhedora.
- Oferecer navegacao multi-pagina com conteudo organizado por assunto.
- Preparar base tecnica para evolucao futura (CMS, blog dinamico, area logada).

## Tecnologias usadas

- **Next.js 16 (App Router)**: rotas, renderizacao e estrutura do app.
- **React 19**: composicao de UI em componentes reutilizaveis.
- **TypeScript**: tipagem estatica e maior seguranca em manutencao.
- **ESLint**: padrao de qualidade de codigo.
- **CSS global com tokens**: design system leve sem framework CSS.
- **Metadata API (Next)**: SEO por pagina, `robots` e `sitemap`.

## Como o site foi construido

O projeto foi organizado em fases para acelerar entrega sem perder qualidade:

1. **Setup tecnico**
   - configuracao inicial de Next + TypeScript + lint;
   - estrutura de pastas padronizada.
2. **Base visual**
   - tokens de cor, espaco e raio;
   - componentes UI reutilizaveis (`Button`, `Card`, `Section`);
   - CTAs principais da clinica.
3. **Home completa**
   - seções: Hero, Especialidades, Como Funciona, Equipe, Depoimentos, FAQ e Contato.
4. **Evolucao para multi-pagina**
   - rotas reais no menu (`/especialidades`, `/sobre`, `/metodologia`, etc.).
5. **Fechamento de estrutura**
   - SEO por pagina, `robots.txt`, `sitemap.xml`;
   - paginas legais (`/politica-de-privacidade`, `/termos`);
   - base pronta para deploy.

## Estrutura de pastas

```text
src/
  app/                 # Rotas da aplicacao (App Router)
  components/
    layout/            # Header/Footer globais
    ui/                # Componentes de UI reutilizaveis
  content/             # Conteudo textual centralizado
  lib/                 # Utilitarios (ex.: SEO)
  sections/            # Secoes da Home (blocos reutilizaveis)
  styles/              # Estilos globais e tokens visuais
public/
  images/              # Assets de imagem
```

## Páginas atuais

- `/`
- `/especialidades`
- `/sobre`
- `/metodologia`
- `/depoimentos`
- `/blog` (estatico no momento)
- `/contato`
- `/politica-de-privacidade`
- `/termos`

## Como rodar localmente

1. Instalar dependencias:
   - `npm install`
2. Rodar em desenvolvimento:
   - `npm run dev`
3. Abrir no navegador:
   - `http://localhost:3000`

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de producao
- `npm run start`: servidor de producao
- `npm run lint`: analise de codigo
- `npm run typecheck`: validacao de tipos

## SEO e publicacao

- Defina `NEXT_PUBLIC_SITE_URL` com o dominio oficial em producao.
- Metadados por pagina sao gerados via `src/lib/seo.ts`.
- `robots.txt` e `sitemap.xml` sao gerados em:
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

## Proximos passos sugeridos

- Integrar blog a um CMS (ex.: Sanity, Contentful, Strapi).
- Substituir textos de placeholder por conteudo final da clinica.
- Adicionar analytics e monitoramento de conversao.
- Refinar acessibilidade (auditoria completa com Lighthouse/axe).