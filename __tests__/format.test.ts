import { describe, expect, it } from "vitest";

import { getDisplayUrl } from "@/lib/format";

describe("getDisplayUrl", () => {
  it("strips https://www.", () => {
    expect(getDisplayUrl("https://www.github.com/user")).toBe("github.com/user");
  });

  it("strips http://www.", () => {
    expect(getDisplayUrl("http://www.linkedin.com")).toBe("linkedin.com");
  });

  it("strips https:// without www", () => {
    expect(getDisplayUrl("https://github.com/user")).toBe("github.com/user");
  });

  it("returns unchanged if no protocol", () => {
    expect(getDisplayUrl("github.com/user")).toBe("github.com/user");
  });
});
