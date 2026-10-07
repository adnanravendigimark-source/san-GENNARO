import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyText: string;
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface MustSeeRuinsSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
  latestGuidesHeading: string;
  latestGuidesIntro: string;
  searchPlaceholder: string;
  categoriesHeading: string;
  popularGuidesHeading: string;
  sidebarCtaBody: string;
}

export interface CtaBannerSection {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export interface HeroTrustBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HeroTrustSection {
  badges: HeroTrustBadge[];
}

export interface HomepageSections {
  heroTrust: HeroTrustSection;
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  mustSeeRuins: MustSeeRuinsSection;
  practical: PracticalSection;
  price: PriceSection;
  ctaBanner: CtaBannerSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  homeLabel: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "San Gennaro Catacombs Tickets",
  logoLine1: "SAN GENNARO",
  logoLine2: "CATACOMBS TICKETS",
  homeLabel: "Home",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Tickets", href: "/#tours" },
    { label: "What to Expect", href: "/#what-to-expect" },
    { label: "Highlights", href: "/#must-see-ruins" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK NOW",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with the Catacombs of Naples, the Diocese of Naples or any official body — we compare bookable San Gennaro Catacombs tickets and guided visits from trusted booking partners and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "San Gennaro Catacombs Tickets", href: "/#tours" },
        { label: "What to Expect", href: "/#what-to-expect" },
        { label: "Ticket Comparison", href: "/#prices" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Catacombs Location",
  addressLine1: "Via Capodimonte 13, 80136 Naples NA",
  addressLine2: "Rione Sanità, Naples, Italy",
  copyrightText:
    "San Gennaro Catacombs Tickets. Prices shown are indicative and set by the booking partner; always confirm on the booking page.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#B8863B",   // Antique Roman Gold
  secondary: "#18382E", // Forest Spruce
  dark: "#16332B",      // Deep Spruce
  accent: "#D4A559",    // Soft Gold
};

export const DEFAULT_HERO_TRUST: HeroTrustSection = {
  badges: [
    { icon: "ShieldCheckIcon", title: "Trusted Booking Partner", subtitle: "Secure checkout" },
    { icon: "ClockIcon", title: "Instant Confirmation", subtitle: "Mobile voucher" },
    { icon: "HeadsetIcon", title: "Customer Support", subtitle: "Help if plans change" },
  ],
};

export const DEFAULT_SECTIONS: HomepageSections = {
  heroTrust: DEFAULT_HERO_TRUST,
  tours: {
    eyebrow: "San Gennaro Catacombs Tickets & Guided Visits",
    heading: "San Gennaro Catacombs Tickets",
    subheading:
      "Compare bookable entry tickets and guided visits for the Catacombs of San Gennaro in Naples, then reserve your preferred time slot.",
    emptyText: "Tickets are being added — please check back shortly.",
  },
  highlights: {
    eyebrow: "Why Book With Us",
    heading: "Why Book With Us",
    subheading:
      "Guided visits to the catacombs run in small time slots, so booking ahead keeps your plans simple. Here is what you get from our comparison.",
    cards: [
      {
        title: "Reserve Your Time Slot",
        body: "Choose a date and time in advance so you are not left hoping for space on the day.",
        icon: "🎫",
      },
      {
        title: "Clear Comparison",
        body: "We list what each ticket includes — guide, language and duration — so you can compare like for like.",
        icon: "⚖️",
      },
      {
        title: "Guided Visits",
        body: "The catacombs are best understood with a guide who explains the frescoes, basilicas and burial areas.",
        icon: "🕯️",
      },
      {
        title: "Flexible Booking",
        body: "Many options offer free cancellation up to a set time before the visit — check the terms on each booking page.",
        icon: "✅",
      },
    ],
  },
  why: {
    eyebrow: "The Visit",
    heading: "What You See on a San Gennaro Catacombs Visit",
    intro:
      "The Catacombs of San Gennaro lie beneath Capodimonte hill in Naples' Rione Sanità and form one of the most important early Christian burial sites in southern Italy. A guided visit typically follows this path.",
    timelineHeading: "Typical visit",
    timeline: [
      { time: "Start", step: "Meet at the entrance beside the Basilica Madre del Buon Consiglio and join your guide" },
      { time: "Upper level", step: "The Catacomb of San Gennaro Superiore — wide galleries, burial niches and early Christian frescoes" },
      { time: "Basilica", step: "The Basilica of St Agrippinus and the area linked to the burial of St Januarius (San Gennaro)" },
      { time: "Lower level", step: "The Catacomb of San Gennaro Inferiore — atrium, tombs and the history of this ancient cemetery" },
      { time: "Finish", step: "Return to the surface in the heart of Rione Sanità, with the neighbourhood to explore" },
    ],
    learnHeading: "Good to know before your visit",
    learn: [
      "Visits are usually guided — check the language and duration shown on each ticket",
      "The catacombs are underground and the air is cool year-round, so bring a light layer",
      "Expect steps and uneven surfaces; wear comfortable closed-toe shoes",
      "Accessibility varies by area — contact the booking partner before you book if you need step-free access",
    ],
    note: "Itinerary details and the order of areas can vary by tour operator and on the day.",
    extraHeading: "Getting to the Catacombs",
    extraItems: [
      { name: "From central Naples", note: "Take a bus or taxi toward Capodimonte, or walk through Rione Sanità; allow extra time for hills and narrow streets" },
      { name: "From the Archaeological Museum area", note: "A walk of roughly 20–25 minutes uphill, or a short taxi ride" },
      { name: "Meeting point", note: "Your voucher confirms the exact meeting point and arrival time — arrive a little early" },
    ],
    ctaText: "Ready to visit? Compare San Gennaro Catacombs tickets and reserve your slot.",
    ctaButtonText: "Book Your Catacombs Ticket →",
    ctaHref: "#tours",
  },
  mustSeeRuins: {
    eyebrow: "Highlights",
    heading: "What Makes the San Gennaro Catacombs Special",
    body:
      "These are the <strong>oldest and largest</strong> catacombs in Naples, with <strong>two levels</strong> of galleries, early Christian <strong>frescoes</strong> and the burial place associated with <strong>St Januarius (San Gennaro)</strong>, the patron saint of Naples.",
    bullets: [
      "Two levels: San Gennaro Superiore and San Gennaro Inferiore",
      "The Basilica of St Agrippinus and ancient burial niches carved into tufa rock",
      "Early Christian frescoes and mosaics in the galleries",
      "A guided visit adds the history of Naples' patron saint and the Rione Sanità neighbourhood",
    ],
    ctaButtonText: "See San Gennaro Catacombs Tickets",
    ctaHref: "#tours",
    images: [
      { src: "/images/sg-hero-arch.jpg", alt: "Vaulted catacomb corridor carved into tufa stone with candlelight lanterns", label: "The Vaulted Galleries" },
      { src: "/images/sg-basilica.jpg", alt: "Arched basilica interior in the catacombs", label: "The Basilica" },
      { src: "/images/sg-niches.jpg", alt: "Burial niches carved into the catacomb wall", label: "Burial Niches" },
      { src: "/images/sg-fresco.jpg", alt: "Early Christian fresco and mosaic art", label: "Early Frescoes" },
    ],
  },
  practical: {
    hoursHeading: "Opening Hours & Best Time to Visit",
    hours: [
      { range: "Visits", time: "Guided visits run in scheduled time slots — see your ticket for available times" },
      { range: "Meeting time", time: "Arrive 10–15 minutes before your slot unless your voucher says otherwise" },
      { range: "Closures", time: "Hours can change on holidays and for events — confirm on the booking page" },
    ],
    hoursNote: "Always confirm opening days and times on the booking page before you travel.",
    addressHeading: "Location & Entrance",
    address:
      "Catacombs of San Gennaro, Via Capodimonte 13, 80136 Naples, Italy.\nThe entrance is beside the Basilica Madre del Buon Consiglio.",
    metro: "Reached by bus or taxi from central Naples, or on foot through Rione Sanità. Ask the booking partner or check your voucher for the latest directions.",
    bestTimeHeading: "Best Time for a Catacombs Visit",
    bestTimeBody:
      "The catacombs are underground, so the visit is comfortable year-round. Book ahead for weekends and holiday periods, and pair your visit with Rione Sanità and the Capodimonte area.",
  },
  price: {
    eyebrow: "Compare & Choose",
    heading: "Compare San Gennaro Catacombs Tickets",
    subheading:
      "Pick the ticket that matches your schedule, then book straight from the table.",
    note: "Reduced rates may apply for children, students or residents — check each booking page for age tiers.",
    itemLabel: "Ticket Type",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Guide Included",
    bestForLabel: "Best For",
    bookLabel: "Book Now",
  },
  ctaBanner: {
    heading: "Ready to Explore the San Gennaro Catacombs?",
    subtext: "Compare tickets, choose a time slot and book your visit to Naples' oldest catacombs.",
    buttonText: "See All Tickets",
    buttonHref: "#tours",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "San Gennaro Catacombs Tickets FAQs",
  },
  notFound: {
    heading: "This gallery leads nowhere.",
    body: "The page you're looking for doesn't exist or may have moved. Try one of these instead.",
    primaryButtonText: "Compare San Gennaro Catacombs Tickets →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Visitor Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "San Gennaro Catacombs Guides & Tips",
    subheading:
      "Practical advice on choosing a ticket, planning your visit and exploring Rione Sanità.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "San Gennaro Catacombs Blog",
    heading: "San Gennaro Catacombs Visitor Guide",
    subheading: "Tickets, tours, how to get there and what to see — everything you need to plan a visit to the Catacombs of San Gennaro in Naples.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to book your San Gennaro Catacombs ticket?",
    ctaButtonText: "Compare San Gennaro Catacombs Tickets →",
    backToGuidesText: "← All guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Guides",
    sidebarRelatedHeading: "Related Articles",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets →",
    promoRecommendedText: "Recommended for you",
    latestGuidesHeading: "Latest Guides",
    latestGuidesIntro: "Tickets, tours and everything you need to know about visiting the San Gennaro Catacombs.",
    searchPlaceholder: "Search guides...",
    categoriesHeading: "Categories",
    popularGuidesHeading: "Popular Guides",
    sidebarCtaBody: "Compare tickets and guided visits, then reserve your time slot.",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "HISTORY / FAITH / NAPLES",
  heroHeading: "Step into the Ancient\nSan Gennaro\nCatacombs",
  heroSubheading:
    "Explore a hidden world beneath Naples, where faith, history and art come together in one of the most extraordinary underground sites in Italy.",
  heroImage: "/images/sg-hero-arch.jpg",
  heroImageAlt: "Atmospheric candlelit corridor in San Gennaro Catacombs in Naples",
  heroCtaPrimaryText: "Book Your Tickets",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "Discover What to Expect",
  heroCtaSecondaryHref: "#what-to-expect",
  showFeaturedTour: true,
  featuredTourId: "san-gennaro-catacombs-guided-tour",
  featuredBadgeLabel: "Recommended",
  featuredUrgencyText: "Limited time slots",
  featuredReasons: [
    "Reserve a time slot in advance",
    "Instant mobile confirmation",
    "Check the booking page for cancellation terms",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "San Gennaro Catacombs Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || "",
    heroHeading: row.hero_heading || "",
    heroSubheading: row.hero_subheading || "",
    heroImage: row.hero_image || "",
    heroImageAlt: row.hero_image_alt || "",
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || "",
    featuredBadgeLabel: row.featured_badge_label || "",
    featuredUrgencyText: row.featured_urgency_text || "",
    featuredReasons: parseReasons(row.featured_reasons),
    sections: {
      heroTrust: { ...DEFAULT_SECTIONS.heroTrust, ...sectionsRaw.heroTrust },
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      mustSeeRuins: { ...DEFAULT_SECTIONS.mustSeeRuins, ...sectionsRaw.mustSeeRuins },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      ctaBanner: { ...DEFAULT_SECTIONS.ctaBanner, ...sectionsRaw.ctaBanner },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || "",
    metaDescription: row.meta_description || "",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt},
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      theme_json = EXCLUDED.theme_json
  `;
}
