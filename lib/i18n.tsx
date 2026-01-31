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

type Translations = typeof enContent;

// Validate fr.json has same structure as en.json at compile time
const en: Translations = enContent;
const fr: Translations = frContent satisfies Translations;

export type Locale = "en" | "fr";

const translations: Record<Locale, Translations> = { en, fr };

type I18nContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "preferred-locale";

const isValidLocale = (value: string | null): value is Locale =>
  value === "en" || value === "fr";

const getStoredLocale = (): Locale => {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidLocale(stored)) return stored;
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "fr" ? "fr" : "en";
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => localStorage.getItem(STORAGE_KEY) ?? "en";
const getServerSnapshot = () => "en";

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
