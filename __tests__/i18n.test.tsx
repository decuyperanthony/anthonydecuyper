import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";

import { I18nProvider, useI18n } from "@/lib/i18n";

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const TestComponent = () => {
  const { locale, t, setLocale } = useI18n();

  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="name">{t.meta.name}</span>
      <button onClick={() => setLocale(locale === "en" ? "fr" : "en")}>
        Toggle
      </button>
    </div>
  );
};

describe("I18n", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it("provides default English locale", async () => {
    await act(async () => {
      render(
        <I18nProvider>
          <TestComponent />
        </I18nProvider>
      );
    });

    expect(screen.getByTestId("locale")).toHaveTextContent("en");
  });

  it("provides translations", async () => {
    await act(async () => {
      render(
        <I18nProvider>
          <TestComponent />
        </I18nProvider>
      );
    });

    expect(screen.getByTestId("name")).toHaveTextContent("Anthony de Cuyper");
  });

  it("allows changing locale", async () => {
    await act(async () => {
      render(
        <I18nProvider>
          <TestComponent />
        </I18nProvider>
      );
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Toggle"));
    });

    expect(screen.getByTestId("locale")).toHaveTextContent("fr");
  });

  it("persists locale to localStorage", async () => {
    await act(async () => {
      render(
        <I18nProvider>
          <TestComponent />
        </I18nProvider>
      );
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Toggle"));
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "preferred-locale",
      "fr"
    );
  });
});
