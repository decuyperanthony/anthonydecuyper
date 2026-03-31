import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "fr"];
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "preferred-locale";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  // Read locale from cookie (set by client-side i18n)
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    // Pass locale to layout via a request header
    response.headers.set("x-locale", cookieLocale);
    return response;
  }

  // Fallback: detect from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const browserLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().split("-")[0])
    .find((lang) => SUPPORTED_LOCALES.includes(lang));

  response.headers.set("x-locale", browserLocale ?? DEFAULT_LOCALE);
  return response;
};

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|icons|manifest.json|robots.txt|sw.js|workbox-.*|swe-worker-.*).*)",
  ],
};
