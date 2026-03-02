export type SiteLocale = "pt-BR" | "en";

export const LOCALE_COOKIE_NAME = "aurora-locale";

export function isSiteLocale(value: string | undefined): value is SiteLocale {
  return value === "pt-BR" || value === "en";
}

export function getNextLocale(current: SiteLocale): SiteLocale {
  return current === "pt-BR" ? "en" : "pt-BR";
}
