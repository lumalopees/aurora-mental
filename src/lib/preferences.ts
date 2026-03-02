import { cookies } from "next/headers";
import {
  LOCALE_COOKIE_NAME,
  isSiteLocale,
  type SiteLocale
} from "@/lib/locale";

export async function getRequestLocale(): Promise<SiteLocale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  if (isSiteLocale(localeCookie)) {
    return localeCookie;
  }

  return "pt-BR";
}
