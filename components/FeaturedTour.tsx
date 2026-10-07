import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

// Mobile-only sticky booking bar for the admin-chosen "featured" tour
export default async function FeaturedTour() {
  const content = await getHomepageContent();
  const bookNowText = content.header.bookNowText || "Book Now";
  if (!content.showFeaturedTour) return null;

  const tours = await getTours();
  const tour = tours.find((t) => t.id === content.featuredTourId);
  if (!tour) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#EAE5DB] bg-white/95 px-3.5 py-2.5 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:hidden">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
          <SafeImage src={tour.image} alt={tour.imageAlt} fill sizes="48px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight text-stone-900">{tour.title}</p>
          <div className="mt-0.5 flex items-center gap-2 text-[11px] text-stone-500">
            <StarRating rating={tour.rating} showValue size="xs" />
            <span>·</span>
            <span>
              from <span className="font-semibold text-stone-900">{tour.price > 0 ? `€${tour.price}` : "Check price"}</span>
            </span>
          </div>
        </div>
        <a
          href={tour.href}
          target="_blank"
          rel="noopener nofollow sponsored"
          className="shrink-0 rounded-full bg-[#C28E46] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-[#C28E46]/20 transition hover:bg-[#B37F38]"
        >
          {bookNowText}
        </a>
      </div>
    </div>
  );
}
