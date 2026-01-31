import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("px-4", "py-2");
    expect(result).toBe("px-4 py-2");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const result = cn("base", isActive && "active");
    expect(result).toBe("base active");
  });

  it("handles false conditional classes", () => {
    const isActive = false;
    const result = cn("base", isActive && "active");
    expect(result).toBe("base");
  });

  it("merges tailwind classes correctly", () => {
    const result = cn("px-4", "px-8");
    expect(result).toBe("px-8");
  });

  it("handles arrays of classes", () => {
    const result = cn(["px-4", "py-2"]);
    expect(result).toBe("px-4 py-2");
  });

  it("handles undefined values", () => {
    const result = cn("base", undefined, "extra");
    expect(result).toBe("base extra");
  });

  it("handles null values", () => {
    const result = cn("base", null, "extra");
    expect(result).toBe("base extra");
  });
});
