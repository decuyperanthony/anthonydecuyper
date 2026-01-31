export const isNavLinkActive = (
  href: string,
  pathname: string,
  homeRoute: string
) =>
  href === homeRoute
    ? pathname === homeRoute
    : pathname === href || pathname.startsWith(`${href}/`);
