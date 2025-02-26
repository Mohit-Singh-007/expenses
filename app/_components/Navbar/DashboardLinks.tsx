"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardLinks = [
  { id: 0, name: "Dashboard", href: "/dashboard" },
  {
    id: 1,
    name: "Income",
    href: "/dashboard/income",
  },
  {
    id: 2,
    name: "Budget",
    href: "/dashboard/budget",
  },
  {
    id: 3,
    name: "Expenses",
    href: "/dashboard/expenses",
  },
];

export default function DashboardLinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={cn(
            pathname === link.href
              ? "text-primary"
              : " text-muted-foreground hover:text-foreground ",
            "flex items-center gap-2 px-4 py-2 transition-all hover:text-primary"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
