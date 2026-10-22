import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

loadDotEnv();

const sql = neon(process.env.DATABASE_URL);

const articleSlug = "best-time-to-visit-catacombs-of-san-gennaro";
const focusKeyword = "best time to visit San Gennaro Catacombs";

const coverImageUrl =
  "https://vedjab5et4dlkazo.public.blob.vercel-storage.com/blog/san-gennaro-catacombs-best-time-cover-5GVnxh79s6K1cM2hUuDAhDdy1n0o2Y.jpg";
const inlineImageUrl =
  "https://vedjab5et4dlkazo.public.blob.vercel-storage.com/blog/san-gennaro-catacombs-basilica-frescoes-3SlquwQFFdJUMyEK9EvrrhsZPxOVV5.jpg";

const contentHtml = `<p>Carved into the volcanic yellow tufa of Capodimonte hill in Naples, the Catacombs of San Gennaro represent southern Italy’s most extensive early Christian burial site. Unlike cramped Roman catacombs, this subterranean monument features grand vaulted halls, ancient basilicas, and delicate Byzantine frescoes spanning two historic levels. Choosing the <strong>best time to visit San Gennaro Catacombs</strong> ensures an unhurried, comfortable underground journey beneath vibrant Naples.</p>
<h2>Best Time of Day for San Gennaro Catacombs Tours</h2>
<p>Entry is strictly by timed guided tour, making morning slots around 10:00 AM the most rewarding choice. Early morning tours welcome the freshest air, smaller group numbers, and peaceful reflection before daytime crowds arrive. You also avoid Naples’ midday heat before walking up through the historic Rione Sanità district.</p>
<p>Alternatively, late afternoon slots between 3:00 PM and 4:30 PM provide an atmospheric finale to a day of sightseeing. Afternoon light entering the Basilica Madre del Buon Consiglio creates a dramatic contrast as you descend beneath the ground. Midday weekend slots often fill first, so booking ahead remains vital.</p>
<h2>Seasonal Conditions and Underground Microclimate</h2>
<p>Because the site lies deep underground, the temperature inside remains virtually constant at 15°C to 18°C (59°F to 64°F) throughout every season.</p>
<p>During sweltering summer months from June through August, when surface temperatures in Naples easily exceed 35°C (95°F), the catacombs serve as an invigorating, cool retreat. In winter, from December to February, the underground galleries feel surprisingly warm and shielded from coastal winds and rain.</p>
<p>Shoulder months—specifically April, May, September, and October—offer ideal overall travel conditions in Naples. Moderate surface weather makes walking between Rione Sanità, Capodimonte Museum, and the catacombs delightfully manageable.</p>
<figure><img src="${inlineImageUrl}" alt="Subterranean Basilica of Saint Agrippinus with ancient Byzantine frescoes carved into tufa stone" /><figcaption>The subterranean Basilica of Saint Agrippinus features early Christian frescoes preserved inside Naples’ porous tufa rock.</figcaption></figure>
<h2>What to Expect Underground Across Two Levels</h2>
<p>The site is divided into two distinct subterranean levels, spanning over 5,600 square meters.</p>
<p>The Upper Catacomb originated in the 3rd century and features the Crypt of the Bishops, celebrated for 5th-century mosaics and vibrant portraits of Naples' earliest prelates. Spacious passages with high vaulted ceilings prevent claustrophobia, offering wide walkways uncommon in ancient burial networks.</p>
<p>Descending into the Lower Catacomb reveals the 4th-century Basilica of Saint Agrippinus, Naples’ first patron saint before Januarius. Here, an ancient stone altar and bishop’s chair sit surrounded by bedrock-carved burial loculi and early Christian frescoes. Gentle, modern LED illumination safeguards delicate pigments while ensuring safe footing.</p>
<h2>Essential Tips for Planning Your Visit</h2>
<p>To make the most of your excursion, keep these practical guidelines in mind:</p>
<ul>
<li><strong>Wear light layers:</strong> Even on hot summer days, bring a light cardigan or windbreaker to stay comfortable in the cool 15°C underground microclimate.</li>
<li><strong>Choose sturdy walking shoes:</strong> Underground pathways are paved and fully accessible via ramps, yet ancient volcanic tufa can feel cool and slightly damp.</li>
<li><strong>Book guided slots online:</strong> English and Italian tours run at scheduled hourly intervals with capped visitor sizes. Reserving your ticket online in advance guarantees entry during peak weekends.</li>
<li><strong>Explore Rione Sanità:</strong> Combine your visit with the Catacombs of San Gaudioso or local pizzerias in Sanità to experience authentic Neapolitan culture.</li>
</ul>
<h3>Recommended Tour Duration</h3>
<p>Standard guided visits last approximately one hour, providing ample commentary without feeling rushed. Arrive 15 minutes prior to check in smoothly at Via Capodimonte 13.</p>`;

// Calculate exact text word count
const plainText = contentHtml
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ")
  .trim();

const words = plainText.split(" ").filter(Boolean);
console.log(`Calculated plain-text word count: ${words.length} words`);

const articleRecord = {
  slug: articleSlug,
  title: "Best Time to Visit the Catacombs of San Gennaro: Hours, Climate & Tour Tips",
  metaTitle: "Best Time to Visit San Gennaro Catacombs (Hours & Tour Tips)",
  metaDescription:
    "Discover the best time to visit San Gennaro Catacombs in Naples. Learn about morning vs afternoon tours, underground microclimate, and crowd tips.",
  category: "Trip Planning",
  excerpt:
    "When to visit Naples' ancient Catacombs of San Gennaro: morning vs afternoon tours, underground microclimates, and essential planning advice.",
  quickAnswer:
    "The best time to visit San Gennaro Catacombs is on a weekday morning tour around 10:00 AM, avoiding both Naples' midday heat and larger weekend tour crowds. Inside, the catacombs maintain a constant cool temperature of 15°C–18°C (59°F–64°F) all year round, offering a perfect underground escape in summer or winter.",
  readTime: "4 min read",
  date: "2026-10-22",
  image: coverImageUrl,
  imageAlt: "Vaulted tufa stone galleries and burial loculi inside the Catacombs of San Gennaro in Naples",
  recommendedTourId: "san-gennaro-catacombs-guided-tour",
  recommendedTourAfterBlock: 1,
  content: contentHtml,
  ctaHeading: "Plan Your San Gennaro Visit",
  ctaBody: "Compare ticket options and reserve your guided tour slot in advance.",
  ctaButtonText: "View Tour Options",
  ctaButtonHref: "/#prices",
  focusKeyword: focusKeyword,
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.sangennarocatacombstickets.com/blog/best-time-to-visit-catacombs-of-san-gennaro",
  ogTitle: "Best Time to Visit San Gennaro Catacombs (Hours & Tour Tips)",
  ogDescription:
    "Discover the best time to visit San Gennaro Catacombs in Naples. Learn about morning vs afternoon tours, underground microclimate, and crowd tips.",
  ogImage: coverImageUrl,
};

async function seed() {
  console.log("Seeding article into Neon database...");

  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleRecord.slug}, ${articleRecord.title}, ${articleRecord.metaTitle}, ${articleRecord.metaDescription},
      ${articleRecord.category}, ${articleRecord.excerpt}, ${articleRecord.quickAnswer}, ${articleRecord.readTime},
      ${articleRecord.date}, ${articleRecord.date}, ${articleRecord.image}, ${articleRecord.imageAlt},
      ${articleRecord.recommendedTourId}, ${articleRecord.recommendedTourAfterBlock},
      ${JSON.stringify(articleRecord.content)}::jsonb, 0,
      ${articleRecord.ctaHeading}, ${articleRecord.ctaBody}, ${articleRecord.ctaButtonText}, ${articleRecord.ctaButtonHref},
      ${articleRecord.focusKeyword}, ${articleRecord.noIndex}, ${articleRecord.noFollow}, ${articleRecord.canonicalUrl},
      ${articleRecord.ogTitle}, ${articleRecord.ogDescription}, ${articleRecord.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;

  console.log("Database upsert successful!");

  // Verify DB state
  const allPosts = await sql`SELECT slug, title, category, date FROM posts ORDER BY date DESC`;
  console.log(`Current DB posts count: ${allPosts.length}`);
  console.log(allPosts);

  // Sync with data/posts.json
  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  let existingJsonPosts = [];
  if (fs.existsSync(postsJsonPath)) {
    try {
      existingJsonPosts = JSON.parse(fs.readFileSync(postsJsonPath, "utf-8"));
    } catch (e) {
      existingJsonPosts = [];
    }
  }

  // Remove any older duplicate with the same slug if present, and prepend the new article
  const filteredJson = existingJsonPosts.filter((p) => p.slug !== articleSlug);
  const updatedJson = [articleRecord, ...filteredJson];
  fs.writeFileSync(postsJsonPath, JSON.stringify(updatedJson, null, 2), "utf-8");
  console.log(`Updated data/posts.json with ${updatedJson.length} posts.`);
}

seed().catch(console.error);
