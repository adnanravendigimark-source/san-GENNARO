import SafeImage from "./SafeImage";
import { AncientChurchIcon, StunningMosaicIcon, ExpertGuidesIcon } from "./icons";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] bg-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 flex items-center">
      {/* Background Watercolor Sketch of Naples & Mount Vesuvius (faded on bottom left) */}
      <div
        className="absolute bottom-0 left-0 w-[90%] sm:w-[65%] md:w-[50%] h-[55%] md:h-[75%] pointer-events-none select-none opacity-20 mix-blend-multiply z-0"
        style={{
          maskImage: "linear-gradient(to top right, black 25%, rgba(0,0,0,0.3) 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top right, black 25%, rgba(0,0,0,0.3) 65%, transparent 100%)",
        }}
      >
        <SafeImage
          src="/images/sg-naples-sketch.jpg"
          alt="Historic Naples and Mount Vesuvius vintage sketch"
          fill
          sizes="50vw"
          className="object-contain object-bottom-left"
          priority
        />
      </div>

      {/* Main Grid Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-4">

          {/* Left Column: Category Tag, Headline, Subtitle, 3 Badges, CTA Buttons (Cols 1-6 / 1-5) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center max-w-xl">

            {/* Category Tag: Gold Line + HISTORY / FAITH / NAPLES */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-[#9E7B54] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#9E7B54]">
                {content.heroBadge || "HISTORY / FAITH / NAPLES"}
              </span>
            </div>

            {/* Headline matching the exact typographic layout */}
            <h1 className="mt-3.5 sm:mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] font-bold leading-[1.08] tracking-tight text-[#1E2522]">
              Step into the Ancient<br />
              San Gennaro<br />
              <span className="font-serif italic font-normal text-[#C28E46]">Catacombs</span>
            </h1>

            {/* Subtitle / Intro Text */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#555049] font-normal leading-relaxed max-w-lg">
              {content.heroSubheading.replace(/<[^>]+>/g, "").trim() ||
                "Explore a hidden world beneath Naples, where faith, history and art come together in one of the most extraordinary underground sites in Italy."}
            </p>

            {/* 3 Outlined Feature Badges in horizontal row */}
            <div className="mt-7 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4 pt-1 max-w-lg">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5">
                <div className="text-[#C28E46] shrink-0">
                  <AncientChurchIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-[13px] text-[#1E2522]">Ancient</span>
                  <span className="block text-[11px] sm:text-xs text-[#6B655D] mt-0.5">Christian History</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5">
                <div className="text-[#C28E46] shrink-0">
                  <StunningMosaicIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-[13px] text-[#1E2522]">Stunning</span>
                  <span className="block text-[11px] sm:text-xs text-[#6B655D] mt-0.5">Mosaics & Art</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5">
                <div className="text-[#C28E46] shrink-0">
                  <ExpertGuidesIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-[13px] text-[#1E2522]">Expert</span>
                  <span className="block text-[11px] sm:text-xs text-[#6B655D] mt-0.5">Local Guides</span>
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <div className="mt-8 sm:mt-9 flex items-center">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18382E] px-8 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-white shadow-md shadow-[#18382E]/15 transition-all duration-300 hover:bg-[#234E41] hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{content.heroCtaPrimaryText || "Book Your Tickets"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Artwork with increased size matching design (Cols 7-12 / 6-12) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-[580px] sm:max-w-[680px] lg:max-w-none xl:max-w-[820px]">

              {/* High-fidelity generated composite artwork matching reference exactly */}
              <div className="relative aspect-[4/3] w-full select-none pointer-events-none mix-blend-multiply">
                <SafeImage
                  src="/images/sg-hero-composite.jpg"
                  alt="San Gennaro Catacombs vaulted corridor with glowing lanterns and ancient fresco of Saint Januarius"
                  fill
                  priority
                  quality={95}
                  sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 95vw"
                  className="object-contain object-center lg:object-right"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
