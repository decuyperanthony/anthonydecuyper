export const ROUTES = {
  home: "/",
  cv: "/cv",
  projects: "/projects",
  contact: "/contact",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
