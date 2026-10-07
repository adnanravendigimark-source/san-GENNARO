import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  if (tours.length === 0) return null;

  return (
    <section id="prices" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B8863B]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#18382E] leading-[1.15] tracking-tight">
          {s.heading}
        </h2>
        <div
          className="rich-content mt-3 text-sm sm:text-base text-stone-900/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E8DFC7] bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#18382E] text-white">
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8DFC7]/60">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-[#FAF7F2] ${
                  tour.featured ? "bg-amber-50/40 font-medium" : i % 2 ? "bg-[#FAF7F2]/50" : ""
                }`}
              >
                <td className="px-6 py-4 font-serif text-base font-bold text-[#18382E]">{tour.title}</td>
                <td className="px-6 py-4 font-serif text-lg font-bold text-[#B8863B]">
                  {tour.price > 0 ? `€${tour.price}` : "Check price"} <span className="font-sans font-normal text-xs text-stone-900/60">/ person</span>
                </td>
                <td className="px-6 py-4 text-stone-900/80">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-stone-900/80">{tour.priceTableFeature || "No"}</td>
                <td className="px-6 py-4 text-stone-900/80">{tour.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-full bg-[#18382E] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#234E41] hover:scale-[1.02]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.note && <p className="mt-3.5 text-xs text-stone-900/60">{s.note}</p>}
    </section>
  );
}
