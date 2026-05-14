# FitDesk Landing Pages — Implementation Plan

## Overview
Build 7 persona-specific landing pages (1 generic + 6 persona variants) on a single Next.js app deployed to `fitdesk.com`. All pages share the same structure — only the hero headline and subheadline differ per persona. Waitlist emails stored in Supabase.

## Stack
- **Next.js 14+** — App Router, TypeScript, Tailwind CSS
- **Supabase** — free tier, hosts the `waitlist` table
- **Vercel** — deploy target
- **Fonts** — Limelight (display) + DM Sans (body) via `next/font/google`

## Supabase Credentials
- Project URL: `https://ivjrqeilpbllstobdqkl.supabase.co`
- Service role key: `***hidden***` (stored in `.env.local`)

---

## Folder Structure
```
FitDesk/
├── app/
│   ├── layout.tsx                    ← Root layout (fonts, nav, footer)
│   ├── globals.css                   ← CSS vars + Tailwind directives
│   ├── page.tsx                      ← / (generic hero)
│   ├── overwhelmed/page.tsx
│   ├── check-in/page.tsx
│   ├── billing/page.tsx
│   ├── scale/page.tsx
│   ├── simplicity/page.tsx
│   ├── retention/page.tsx
│   └── api/
│       └── waitlist/route.ts         ← POST: store email in Supabase
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── hero.tsx                      ← accepts headline + subheadline props
│   ├── problem.tsx
│   ├── solution.tsx
│   ├── alternatives.tsx
│   ├── pricing.tsx
│   ├── social-proof.tsx
│   ├── final-cta.tsx                 ← accepts headline + subheadline props
│   └── waitlist-form.tsx             ← email input → POST /api/waitlist
├── lib/
│   └── supabase.ts                   ← Supabase client (server-side)
├── styles/
│   └── globals.css                   ← CSS vars (brand tokens) + Tailwind
├── docs/                             ← Existing documentation (untouched)
├── public/
│   └── fitdesk-landing.html           ← Original HTML (archived reference)
├── AGENTS.md                          ← Untouched
└── .env.local                         ← Contains real Supabase keys (gitignored)
```

---

## Stage 1 — Foundation

1. Move `fitdesk-landing.html` → `public/fitdesk-landing.html`
2. Create `docs/PLAN.md` (this file)
3. Create `lib/supabase.ts` — server-side Supabase client using service role key
4. Create `.env.local` with Supabase credentials
5. Create `app/globals.css` — CSS variables matching brand tokens from original HTML
6. Create `app/layout.tsx` — root layout with Limelight + DM Sans fonts, Nav + Footer
7. Run `npm run build` — must compile clean

### Supabase Table (via REST API)
```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX waitlist_email_idx ON waitlist(email);
```

---

## Stage 2 — Shared Components

All components are built once and reused on every page.

- `components/nav.tsx` — Sticky top bar: FitDesk logo + anchor links
- `components/footer.tsx` — Dark footer: logo + Privacy/Terms/Contact
- `components/waitlist-form.tsx` — Email input → POST /api/waitlist, loading/success/error states
- `components/hero.tsx` — Props: `headline`, `subheadline`. Eyebrow + h1 + p + WaitlistForm
- `components/problem.tsx` — Static, 5 pain points
- `components/solution.tsx` — Static, 3 feature cards
- `components/alternatives.tsx` — Static, 4 alternatives
- `components/pricing.tsx` — Static, 3 tiers (Starter $29, Pro $49 featured, Scale $79)
- `components/social-proof.tsx` — Static, 3 testimonials + 500+ counter
- `components/final-cta.tsx` — Props: `headline`, `subheadline`. Second email capture.

---

## Stage 3 — API Route

**`app/api/waitlist/route.ts` (POST only):**
1. Parse `{ email: string, source?: string }`
2. Validate email format → 400 if invalid
3. Insert into Supabase `waitlist` table
4. Duplicate email → silent 200 (no error to user)
5. Supabase error → 500

---

## Stage 4 — Landing Pages

| Page | Headline | Subheadline |
|------|----------|-------------|
| `/` | "You're not a personal trainer anymore." | "You're running an admin business that occasionally involves coaching. FitDesk fixes that — program delivery, check-ins, billing, all in one place. No more switching between 5 tools." |
| `/overwhelmed` | "You're not a personal trainer anymore." | "You're running an admin business that occasionally involves coaching. FitDesk fixes that — program delivery, check-ins, billing, all in one place. No more switching between 5 tools." |
| `/check-in` | "Monday dread is optional." | "FitDesk handles the check-in backlog so you don't have to. Know who's falling off before they've already quit." |
| `/billing` | "Stop chasing payments." | "FitDesk tracks who's paid, automates reminders, and ends the awkward conversations. Get paid without the hassle." |
| `/scale` | "Same tool at 10 clients as at 50." | "FitDesk grows with you. No tier jumps, no feature gates, no switching tools every 6 months. Just one price." |
| `/simplicity` | "Your clients will actually use this." | "As easy as WhatsApp for your clients. No app downloads, no confusing dashboards. Just results." |
| `/retention` | "Don't lose clients to silence." | "FitDesk's check-in system catches drop-offs early. Reach out before they've already quit." |

---

## Stage 5 — Deploy to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy → verify `fitdesk.com` loads
5. Add custom domain in Vercel settings

---

## Stage 6 — Verify

1. All 7 pages load without errors
2. Email submission creates a row in Supabase `waitlist` table
3. Duplicate email doesn't error
4. Mobile responsive (DevTools check)
5. `npm run build` passes clean