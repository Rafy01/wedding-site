export type NavRoute = { href: string; label: string; enabled: boolean };

export const routes: NavRoute[] = [
  { href: "/", label: "Home", enabled: true },
  { href: "/live", label: "Live", enabled: false },
  { href: "/seating", label: "Seating", enabled: false },
  { href: "/hotels", label: "Hotels", enabled: false },
  { href: "/schedule", label: "Schedule", enabled: false },
];
