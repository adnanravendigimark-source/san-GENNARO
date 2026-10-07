import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import { LockIcon } from "./icons";

export default async function TourGrid() {
  const [toursRaw, homepage] = await Promise.all([getTours(), getHomepageContent()]);
  const s = homepage.sections.tours;
  const bookNowText = homepage.header.bookNowText || "Book Tickets";

  const recommendedId = homepage.showFeaturedTour ? homepage.featuredTourId : "";
  const tours = recommendedId
    ? [...toursRaw].sort((a, b) => (a.id === recommendedId ? -1 : b.id === recommendedId ? 1 : 0))
    : toursRaw;

  if (tours.length === 0) {
    return (
      <section id="tours" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-[#18382E]">{s.heading}</h2>
          <p className="mt-3 text-sm text-stone-600">{s.emptyText}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="tours" className="py-16 sm:py-20 bg-white border-t border-stone-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B8863B]">
            {s.eyebrow}
          </p>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-[2.25rem] font-bold text-[#18382E] tracking-tight">
            {s.heading}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-700">
            {s.subheading}
          </p>
        </div>

        {/* Ticket Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tours.map((tour) => {
            const isRecommended = !!recommendedId && tour.id === recommendedId;
            return (
              <div
                key={tour.id}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 ${
                  isRecommended || tour.featured
                    ? "border-2 border-[#B8863B] shadow-xl shadow-[#B8863B]/10 relative ring-1 ring-[#B8863B]/20"
                    : "border border-stone-200 shadow-sm hover:shadow-lg hover:border-[#B8863B]/40"
                }`}
              >
                {/* Card Image & Overlay Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                  <SafeImage
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    quality={80}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Ribbon Badge */}
                  {(isRecommended || tour.ribbon) && (
                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-md bg-[#B8863B] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      <span>👑</span>
                      <span>{isRecommended ? (homepage.featuredBadgeLabel || "Recommended") : tour.ribbon}</span>
                    </div>
                  )}

                  {/* Rating Badge */}
                  <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#18382E] shadow-sm">
                    <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#18382E] leading-snug group-hover:text-[#B8863B] transition-colors line-clamp-2 min-h-[44px]">
                    <a href={tour.href} target="_blank" rel="noopener nofollow sponsored">
                      {tour.title}
                    </a>
                  </h3>

                  <div
                    className="rich-content mt-1.5 line-clamp-2 min-h-[2rem] text-xs text-stone-700 leading-relaxed [&>p]:m-0 [&>p]:line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: tour.description }}
                  />

                  {tour.includes.length > 0 && (
                    <div className="mt-4 space-y-1.5">
                      {tour.includes.slice(0, 3).map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 rounded-md bg-stone-50 px-2.5 py-1.5 text-[11.5px] text-stone-900 border border-stone-100"
                        >
                          <span className="mt-0.5 text-[#18382E] font-bold shrink-0">✓</span>
                          <span className="leading-tight font-medium line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {tour.duration && (
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-stone-600">
                      <span>⏱</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                  )}

                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between pt-3.5 border-t border-stone-100">
                      <div>
                        <span className="block text-[9.5px] font-bold uppercase tracking-wider text-stone-600">
                          FROM
                        </span>
                        <div className="flex items-baseline gap-1">
                          {tour.originalPrice && (
                            <span className="text-xs text-stone-400 line-through">€{tour.originalPrice}</span>
                          )}
                          <span className="font-serif text-xl sm:text-2xl font-bold text-[#18382E]">
                            {tour.price > 0 ? `€${tour.price}` : "Check price"}
                          </span>
                          <span className="text-[11px] text-stone-600">/person</span>
                        </div>
                      </div>

                      <a
                        href={tour.href}
                        target="_blank"
                        rel="noopener nofollow sponsored"
                        className="inline-flex items-center justify-center rounded-full bg-[#18382E] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#234E41] hover:shadow-md hover:scale-[1.02]"
                      >
                        {bookNowText}
                      </a>
                    </div>
                    {isRecommended && homepage.featuredUrgencyText && (
                      <p className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#B8863B]">
                        <LockIcon className="h-3 w-3" /> {homepage.featuredUrgencyText}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
