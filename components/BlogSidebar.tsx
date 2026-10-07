"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import TableOfContents from "./TableOfContents";
import { CalendarIcon, SearchIcon, TicketIcon } from "./icons";
import type { Post } from "@/lib/posts";
import type { TocItem } from "@/lib/tableOfContents";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogSidebar({
  popularPosts,
  toc,
  tocLabel = "In This Guide",
  relatedHeading = "Popular Guides",
  compareLinkText = "Compare San Gennaro Catacombs Tickets →",
  recommendedBadge,
  searchPlaceholder = "",
  ctaHeading = "",
  ctaBody = "",
}: {
  slug: string;
  popularPosts: Post[];
  toc: TocItem[];
  tocLabel?: string;
  relatedHeading?: string;
  compareLinkText?: string;
  recommendedBadge?: string;
  searchPlaceholder?: string;
  ctaHeading?: string;
  ctaBody?: string;
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const popular = popularPosts.slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm focus-within:border-[#C28E46]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full bg-transparent px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center bg-[#C28E46] px-3.5 text-white transition hover:bg-[#B37F38]"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </form>

      {/* Table of Contents */}
      <TableOfContents items={toc} label={tocLabel} />

      {/* Popular Articles */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-stone-900">
            {relatedHeading}
          </p>
          <div className="mt-4 space-y-3.5">
            {popular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3"
              >
                <div className="relative h-13 w-16 shrink-0 aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                  <SafeImage
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    quality={65}
                    sizes="80px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-bold leading-snug text-stone-900 transition-colors group-hover:text-[#C28E46]">
                    {post.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                    <CalendarIcon className="h-3 w-3 text-[#C28E46]" />
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Compare Tickets Promo Card */}
      <div className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] p-6 text-center text-stone-900 shadow-sm border border-[#EAE5DB]">
        {recommendedBadge && (
          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#C28E46]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C28E46]">
            {recommendedBadge}
          </span>
        )}
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#C28E46]/10 text-[#C28E46] border border-[#C28E46]/20 shadow-sm">
          <TicketIcon className="h-5 w-5" />
        </div>
        <p className="mt-3.5 font-display text-base font-bold text-stone-900">
          {ctaHeading}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
          {ctaBody}
        </p>
        <a
          href="/#tours"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#C28E46] px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-[#C28E46]/20 transition hover:bg-[#B37F38] hover:scale-[1.02]"
        >
          {compareLinkText}
        </a>
      </div>

      {/* Newsletter Card */}
    </aside>
  );
}
