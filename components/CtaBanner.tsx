import { getHomepageContent } from "@/lib/homepage";
import { CatacombChurchIcon } from "./icons";

export default async function CtaBanner() {
  const { sections } = await getHomepageContent();
  const s = sections.ctaBanner;

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#FAF8F5] px-6 py-8 sm:px-10 sm:py-10 shadow-lg shadow-stone-200/50 border border-[#EAE5DB]">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C28E46]/10 text-[#C28E46] border border-[#C28E46]/20">
                <CatacombChurchIcon className="h-7 w-7" />
              </div>

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  {s.heading}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-stone-600">{s.subtext}</p>
              </div>
            </div>

            {/* Right Action Button */}
            <a
              href={s.buttonHref}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#C28E46] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-[#C28E46]/20 transition-all hover:bg-[#B37F38] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{s.buttonText}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
