# San Gennaro Catacombs Tickets

Database-driven affiliate travel site targeting **"San Gennaro Catacombs Tickets"**
(Naples, Italy). Next.js 14 App Router · Neon Postgres · Tailwind · Tiptap CMS.

Theme: tufa-stone ivory, burgundy and antique gold with serif editorial type.

## Quick start

```bash
npm install
# .env is already configured for this project's own Neon database.
node scripts/setup-db.mjs      # creates tables + seeds starter content (safe to re-run)
npm run dev                    # http://localhost:3000   (admin: /admin)
```

Admin credentials live in `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`). Rotate them before going live.
Never commit `.env` (it is git-ignored). Use `.env.example` as the template.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | This project's Neon database (pooled, server-side only) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Owner account for `/admin` |
| `ADMIN_SESSION_SECRET` | Signs admin session cookies (**required in production**) |
| `NEXT_PUBLIC_SITE_URL` | Public URL (see also `lib/site.ts` → `SITE_URL`) |
| `BLOB_STORE_ID`, `BLOB_READ_WRITE_TOKEN` | Vercel Blob for image uploads (create a new store) |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 id; nothing loads when empty |

## Content model (all editable in /admin)

Homepage (hero, every section, header, footer, theme colours, SEO fields), Tickets/Tours
(title, price, ratings, image, affiliate path), Blog posts (Tiptap editor), FAQs, About,
Contact, Privacy, Indexing (noindex/nofollow per page), Redirects, Media library, Users.

Ratings/reviews are optional: leave them at 0 and no stars or `aggregateRating` are shown.

## Adding your tickets

Admin → Tours → New: paste the GetYourGuide path (or full URL) in the booking-link field;
Booking links are used exactly as pasted in the admin; nothing is appended automatically.

## Production build

```bash
npm run build && npm start
```
# san-GENNARO
