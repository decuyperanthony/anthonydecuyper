import { afterEach, describe, expect, it, vi } from "vitest";

import { getBrowserLocale, isValidLocale } from "@/lib/i18n";

describe("isValidLocale", () => {
  it("accepts 'en'", () => {
    expect(isValidLocale("en")).toBe(true);
  });

  it("accepts 'fr'", () => {
    expect(isValidLocale("fr")).toBe(true);
  });

  it("rejects 'es'", () => {
    expect(isValidLocale("es")).toBe(false);
  });

  it("rejects null", () => {
    expect(isValidLocale(null)).toBe(false);
  });

  it("rejects empty string", () => {
    expect(isValidLocale("")).toBe(false);
  });
});

describe("getBrowserLocale", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns 'fr' when browser is 'fr-FR'", () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    expect(getBrowserLocale()).toBe("fr");
  });

  it("returns 'en' for unsupported language", () => {
    vi.stubGlobal("navigator", { language: "es-ES" });
    expect(getBrowserLocale()).toBe("en");
  });

  it("returns 'en' for 'en-US'", () => {
    vi.stubGlobal("navigator", { language: "en-US" });
    expect(getBrowserLocale()).toBe("en");
  });
});
