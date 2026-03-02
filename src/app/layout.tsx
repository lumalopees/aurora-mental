import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getSiteUrl } from "@/lib/seo";
import { getRequestLocale } from "@/lib/preferences";
import { getNavLinks, getSiteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Aurora Mental",
    template: "%s | Aurora Mental"
  },
  description:
    "Clinica de psicologia com atendimento acolhedor, etico e baseado em evidencia.",
  icons: {
    icon: "/images/bfad2e8a3e6d31eb71bccae93ba08479.png",
    shortcut: "/images/bfad2e8a3e6d31eb71bccae93ba08479.png",
    apple: "/images/bfad2e8a3e6d31eb71bccae93ba08479.png"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Aurora Mental"
  },
  twitter: {
    card: "summary_large_image"
  }
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);
  const navLinks = getNavLinks(locale);

  return (
    <html lang={locale}>
      <body>
        <SiteHeader
          locale={locale}
          brand={content.brand}
          navAriaLabel={content.nav.ariaLabel}
          navLinks={navLinks}
          languageButtonLabel={content.controls.language}
          lightModeLabel={content.controls.themeLight}
          darkModeLabel={content.controls.themeDark}
        />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
