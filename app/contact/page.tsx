import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg, buildBreadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: { absolute: contact.metaTitle },
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Contact Hero Banner matching About & Blog styling */}
        <section className="relative overflow-hidden bg-white border-b border-[#EAE5DB]/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SafeImage
              src="/images/sg-gallery.jpg"
              alt="San Gennaro Catacombs illuminated gallery in Naples"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-[80%_center] md:object-[78%_center] lg:object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-45% md:from-white/90 md:via-white/60 md:via-50% lg:via-52% to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#555049]/70">
                <ol className="flex items-center gap-1.5">
                  <li>
                    <Link href="/" className="hover:text-chichen-gold transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-400">&gt;</li>
                  <li className="font-semibold text-chichen-charcoal" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>

              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-chichen-gold">
                {contact.heroEyebrow || "CONTACT"}
              </span>

              <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chichen-charcoal">
                {contact.heroHeading || "Get in Touch"}
              </h1>

              {/* Gold accent line */}
              <div className="mt-3.5 mb-4 h-[2.5px] w-12 rounded-full bg-chichen-gold" />

              <div
                className="rich-content mt-2 text-xs leading-relaxed text-[#555049] sm:text-sm"
                dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
              />
            </div>
          </div>
        </section>

        {/* Contact Content Container on pure white background */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20">
          {/* Primary Email Card */}
          <div className="rounded-2xl border border-[#EAE5DB] bg-white p-8 sm:p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-chichen-navy text-white shadow-md">
              <MailIcon className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#686E62]">
              {contact.emailLabel || "Email us directly"}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1.5 inline-block break-all font-serif text-2xl sm:text-3xl font-bold text-chichen-charcoal hover:text-chichen-gold transition-colors"
            >
              {contact.email}
            </a>
            <p className="mt-2 text-xs sm:text-sm text-[#787E72] max-w-md mx-auto">
              {contact.emailNote || "We typically reply within 1–2 business days."}
            </p>
          </div>

          {/* 3 Support Reason Cards */}
          <div className="mt-10">
            <h2 className="text-center font-serif text-xl sm:text-2xl font-bold text-chichen-charcoal mb-6">
              {contact.reasonsHeading || "How We Can Help"}
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {contact.reasons.map(({ icon, title, body }) => {
                const Icon = getIconComponent(icon);
                return (
                  <div
                    key={title}
                    className="flex flex-col rounded-2xl border border-[#EAE5DB] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-chichen-gold/50 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] border border-[#EAE5DB] text-chichen-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-chichen-charcoal leading-snug">{title}</h3>
                    <div
                      className="rich-content mt-2 text-xs sm:text-[13px] text-[#555049] leading-relaxed flex-1"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer note */}
          {contact.footerNote && (
            <div className="mt-10 rounded-xl border border-[#EAE5DB] bg-[#FAF7F2]/60 p-5 text-center">
              <div
                className="rich-content text-xs sm:text-sm text-[#686E62] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contact.footerNote }}
              />
            </div>
          )}

          {/* Bottom CTA block */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl bg-chichen-navy p-8 text-white shadow-xl">
            <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
              {contact.ctaHeading || "Ready to explore the San Gennaro Catacombs?"}
            </p>
            <a
              href="/#tours"
              className="shrink-0 rounded-full bg-chichen-gold px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-[#A87935] hover:scale-[1.02]"
            >
              {contact.ctaButtonLabel || "Compare San Gennaro Catacombs Tickets"} →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
