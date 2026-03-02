import Link from "next/link";
import type { SiteLocale } from "@/lib/locale";
import { getSiteContent } from "@/content/siteContent";

type SiteFooterProps = {
  locale: SiteLocale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = getSiteContent(locale);

  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {content.brand}. {content.footer.rights}
        </p>
        <nav aria-label={content.footer.legalAria} className="footer-nav">
          <Link href="/politica-de-privacidade">
            {content.footer.privacyLabel}
          </Link>
          <Link href="/termos">{content.footer.termsLabel}</Link>
        </nav>
      </div>
    </footer>
  );
}
