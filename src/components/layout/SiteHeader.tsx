import Link from "next/link";
import { navLinks } from "@/content/siteContent";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          Aurora Mental
        </Link>
        <nav aria-label="Menu principal">
          <ul className="main-nav">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
