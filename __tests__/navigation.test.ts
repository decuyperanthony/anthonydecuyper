import { describe, expect, it } from "vitest";

import { isNavLinkActive } from "@/lib/navigation";

describe("isNavLinkActive", () => {
  const HOME = "/";

  it("home active only on exact match", () => {
    expect(isNavLinkActive("/", "/", HOME)).toBe(true);
    expect(isNavLinkActive("/", "/cv", HOME)).toBe(false);
  });

  it("other routes active on exact match", () => {
    expect(isNavLinkActive("/cv", "/cv", HOME)).toBe(true);
  });

  it("other routes active on nested paths", () => {
    expect(isNavLinkActive("/cv", "/cv/download", HOME)).toBe(true);
  });

  it("does not match similar prefixes", () => {
    expect(isNavLinkActive("/cv", "/cvalid", HOME)).toBe(false);
  });

  it("projects route with nested path", () => {
    expect(isNavLinkActive("/projects", "/projects/my-app", HOME)).toBe(true);
  });
});
