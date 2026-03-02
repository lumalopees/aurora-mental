"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  LOCALE_COOKIE_NAME,
  getNextLocale,
  type SiteLocale
} from "@/lib/locale";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  locale: SiteLocale;
  brand: string;
  navAriaLabel: string;
  navLinks: NavLink[];
  languageButtonLabel: string;
  lightModeLabel: string;
  darkModeLabel: string;
};

type ThemeMode = "light" | "dark";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M14.5 3.5a8.5 8.5 0 1 0 6 14.5a9 9 0 1 1-6-14.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.5 12H2m20 0h-2.5M5.8 5.8L4 4m16 16-1.8-1.8M18.2 5.8 20 4M5.8 18.2 4 20" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.8c2.3 2.3 2.3 14.1 0 16.4M12 3.8c-2.3 2.3-2.3 14.1 0 16.4" />
    </svg>
  );
}

export function SiteHeader({
  locale,
  brand,
  navAriaLabel,
  navLinks,
  languageButtonLabel,
  lightModeLabel,
  darkModeLabel
}: SiteHeaderProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("aurora-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode =
      stored === "dark" || stored === "light"
        ? (stored as ThemeMode)
        : prefersDark
          ? "dark"
          : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("aurora-theme", theme);
  }, [theme]);

  const themeButtonLabel = useMemo(
    () => (theme === "dark" ? lightModeLabel : darkModeLabel),
    [darkModeLabel, lightModeLabel, theme]
  );

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  function toggleLocale() {
    const nextLocale = getNextLocale(locale);
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          <Image
            src="/images/bfad2e8a3e6d31eb71bccae93ba08479.png"
            alt={brand}
            width={52}
            height={52}
            priority
          />
        </Link>
        <nav aria-label={navAriaLabel}>
          <ul className="main-nav">
            {navLinks.map((item: NavLink) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-controls">
          <button
            type="button"
            className="icon-button"
            aria-label={themeButtonLabel}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label={languageButtonLabel}
            onClick={toggleLocale}
          >
            <GlobeIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
