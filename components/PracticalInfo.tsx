import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section id="practical" className="bg-white py-20 sm:py-24 border-t border-stone-100">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-chichen-navy font-bold text-lg mb-4 border border-stone-200 shadow-sm">
            ⏱
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-chichen-navy">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-xs sm:text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-stone-200/60 last:border-0">
                  <td className="py-2.5 pr-3 text-stone-700">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-chichen-navy">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {s.hoursNote && <p className="mt-3 text-xs text-stone-500">{s.hoursNote}</p>}
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-chichen-navy font-bold text-lg mb-4 border border-stone-200 shadow-sm">
            📍
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-chichen-navy">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-stone-700">{s.address}</p>
          {s.metro && <p className="mt-3 text-xs font-semibold text-chichen-gold">{s.metro}</p>}
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-7 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-chichen-gold font-bold text-lg mb-4 border border-stone-200 shadow-sm">
            💡
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-chichen-navy">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-xs sm:text-sm text-stone-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
