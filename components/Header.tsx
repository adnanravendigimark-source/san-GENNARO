import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  const ctaText = header.ctaText || header.bookNowText || "Book Tickets";
  const rawCtaHref = header.ctaHref || "#tours";
  const ctaHref = rawCtaHref.startsWith("#") ? `/${rawCtaHref}` : rawCtaHref;

  return (
    <StickyHeader>
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 bg-white/95">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt || "San Gennaro Catacombs Tickets"}
          line1={header.logoLine1 || "SAN GENNARO"}
          line2={header.logoLine2 || "CATACOMBS TICKETS"}
        />

        <HeaderNav links={navLinks} />

        <div className="flex items-center gap-3.5 sm:gap-4">
          {/* Book Tickets Pill Button */}
          <a
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#18382E] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#234E41] hover:shadow-md hover:scale-[1.02]"
          >
            <span>{ctaText}</span>
            <span className="text-sm leading-none">→</span>
          </a>

          <MobileNav navLinks={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
        </div>
      </div>
    </StickyHeader>
  );
}
