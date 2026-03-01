import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Aurora Mental. Todos os direitos reservados.</p>
        <nav aria-label="Links legais" className="footer-nav">
          <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
          <Link href="/termos">Termos de Uso</Link>
        </nav>
      </div>
    </footer>
  );
}
