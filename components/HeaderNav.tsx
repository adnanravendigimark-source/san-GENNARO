"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  // Exactly the 4 requested links: Home, About Us, Blog, Contact
  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = defaultLinks;

  return (
    <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative py-1 text-[13.5px] lg:text-[14px] font-medium transition-colors ${
              isActive
                ? "text-[#1C1917] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#C49B5B]"
                : "text-[#4A4744] hover:text-[#1C1917]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
