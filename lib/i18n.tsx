"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import enContent from "@/content/en.json";
import frContent from "@/content/fr.json";

// ============================================================================
// Configuration - SINGLE SOURCE OF TRUTH
// To add a new language: 1) import JSON above, 2) add to translations below
// ============================================================================

type Translations = typeof enContent;

const translations = {
  en: enContent,
  fr: frContent satisfies Translations,
} as const;

export type Locale = keyof typeof translations;

const SUPPORTED_LOCALES = Object.keys(translations) as Locale[];
const DEFAULT_LOCALE: Locale = "en";

const LOCALE_LABELS = {
  en: "EN",
  fr: "FR",
} satisfies Record<Locale, string>;

// ============================================================================
// Locale utilities
// ============================================================================

const STORAGE_KEY = "preferred-locale";

const isValidLocale = (value: string | null): value is Locale =>
  value !== null && value in translations;

const getBrowserLocale = (): Locale => {
  const browserLang = navigator.language.split("-")[0];
  return isValidLocale(browserLang) ? browserLang : DEFAULT_LOCALE;
};

const getStoredLocale = (): Locale => {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(STORAGE_KEY);
  return isValidLocale(stored) ? stored : getBrowserLocale();
};

// ============================================================================
// React Context
// ============================================================================

type I18nContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LOCALE;
const getServerSnapshot = () => DEFAULT_LOCALE;

type I18nProviderProps = {
  children: ReactNode;
};

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const storedValue = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const locale: Locale = isValidLocale(storedValue)
    ? storedValue
    : getStoredLocale();

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    window.dispatchEvent(new Event("storage"));
  }, []);

  const value: I18nContextType = {
    locale,
    t: translations[locale],
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export {
  SUPPORTED_LOCALES,
  LOCALE_LABELS,
  isValidLocale,
  getBrowserLocale,
  getStoredLocale,
};
