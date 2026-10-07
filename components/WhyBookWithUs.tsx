import { getHomepageContent } from "@/lib/homepage";

export default async function WhyBookWithUs() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section className="bg-[#FAF8F5] border-t border-b border-[#EAE5DB]/60 py-20 text-[#1E2522]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C28E46]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E2522]">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-base text-[#555049] leading-relaxed">{s.subheading}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-[#EAE5DB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C28E46]/60 hover:shadow-md"
            >
              <span className="text-3xl sm:text-4xl">{item.icon}</span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#1E2522] group-hover:text-[#C28E46] transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-[#555049] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
