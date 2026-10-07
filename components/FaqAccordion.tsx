"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div
            key={f.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
              open ? "border-[#C28E46] shadow-md shadow-[#C28E46]/10" : "border-[#EAE5DB] hover:border-[#C28E46]/50"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-3 p-5 text-left font-semibold text-stone-900 sm:p-5.5"
            >
              <span className="font-serif text-[16px] sm:text-lg font-bold pr-3 text-stone-900">{f.question}</span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#EAE5DB] text-xs font-bold transition ${
                  open ? "rotate-45 bg-[#C28E46] text-white border-[#C28E46]" : "bg-[#FAF8F5] text-stone-700"
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <div
                className="rich-content border-t border-[#EAE5DB] px-5 pb-5 pt-3 text-xs sm:text-[13.5px] leading-relaxed text-stone-700 sm:px-5.5"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
