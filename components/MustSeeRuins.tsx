import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function MustSeeRuins() {
  const { sections } = await getHomepageContent();
  const s = sections.mustSeeRuins;

  return (
    <section id="must-see-ruins" className="bg-white py-20 sm:py-24 border-y border-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-50 border border-stone-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-chichen-gold">
            <span>🏛️</span> {s.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-stone-900 leading-[1.15] tracking-tight">
            {s.heading}
          </h2>
          <div
            className="rich-content mt-4 text-sm sm:text-base text-stone-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
          <ul className="mt-6 space-y-3.5 text-xs sm:text-sm font-medium text-stone-800">
            {s.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C28E46] text-white text-[10px] font-bold">
                  ✓
                </span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={s.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C28E46] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-[#C28E46]/20 transition-all hover:bg-[#B37F38] hover:shadow-lg hover:scale-[1.02]"
          >
            <span>{s.ctaButtonText}</span>
            <span>→</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-40 sm:h-48 overflow-hidden rounded-2xl border border-stone-200 shadow-sm bg-stone-900"
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                quality={85}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs sm:text-sm font-bold text-white drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
