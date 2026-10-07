import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section id="what-to-expect" className="py-20 sm:py-24 bg-white border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B8863B]">
            {s.eyebrow}
          </p>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#18382E] leading-[1.15] tracking-tight">
            {s.heading}
          </h2>
          <div className="mt-3.5 mb-1 h-[2.5px] w-12 rounded-full bg-[#B8863B]" />
          <div
            className="rich-content mt-3 text-sm sm:text-base text-stone-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.intro }}
          />
        </div>

        {/* Sample tour timeline + what-you'll-notice list */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-7 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18382E]">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-[#B8863B]/40 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-[#B8863B] ring-4 ring-[#B8863B]/20" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8863B]">{row.time}</span>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-[#18382E]">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-7 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18382E]">{s.learnHeading}</h3>
            <ul className="mt-5 space-y-3">
              {s.learn.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 text-sm sm:text-[14.5px] text-stone-800 shadow-sm"
                >
                  <span className="font-bold text-[#B8863B] mt-0.5">◆</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {s.note && <p className="mt-4 text-xs text-stone-500">{s.note}</p>}
          </div>
        </div>

        {/* Optional 3rd list */}
        {s.extraItems.length > 0 && (
          <div className="mt-10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18382E]">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div
                  key={point.name + i}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-[#B8863B]"
                >
                  <p className="text-sm font-bold text-[#B8863B]">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-700">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA banner */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-[#18382E] p-8 text-white shadow-xl border border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base sm:text-lg font-bold text-white max-w-xl">{s.ctaText}</p>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-full bg-[#B8863B] px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#D4A559] hover:scale-[1.02]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
