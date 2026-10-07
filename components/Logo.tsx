import Link from "next/link";
import Image from "next/image";
import { CatacombChurchIcon } from "./icons";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt = "San Gennaro Catacombs Tickets",
  logoAlt = "San Gennaro Catacombs Tickets",
  line1 = "SAN GENNARO",
  line2 = "CATACOMBS TICKETS",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  logoImage?: string;
  alt?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = (logoImage || src)?.trim();
  const resolvedAlt = logoAlt || alt;

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <span className="relative block h-11 w-11 transition-transform duration-300 hover:scale-105 drop-shadow-sm">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="88px" className="object-contain" priority />
          ) : (
            <CatacombChurchIcon className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] ${
              isDark ? "text-white" : "text-stone-900"
            }`}
          >
            {line1 || "SAN GENNARO"}
          </span>
          <span className="block font-sans text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.26em] uppercase text-[#C28E46] mt-1">
            {line2 || "CATACOMBS TICKETS"}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-9 sm:h-10 w-9 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm">
      {customSrc ? (
        <Image src={customSrc} alt={resolvedAlt} fill priority sizes="52px" className="object-contain" />
      ) : (
        <CatacombChurchIcon className="h-full w-full" />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block truncate font-serif text-[16px] sm:text-[18px] font-bold tracking-[0.14em] leading-tight transition-colors ${
          isDark ? "text-white group-hover:text-[#D4A559]" : "text-stone-900 group-hover:text-[#C28E46]"
        }`}
      >
        {line1 || "SAN GENNARO"}
      </span>
      <span className="block truncate font-sans text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.26em] uppercase text-[#C28E46] leading-none mt-1">
        {line2 || "CATACOMBS TICKETS"}
      </span>
    </div>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-3 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
