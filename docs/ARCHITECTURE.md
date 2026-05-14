# FitDesk — Architecture

## Design Decisions

### Why Next.js + Tailwind + Vercel?

- Next.js App Router provides SSR/SSG flexibility for a marketing landing page
- Tailwind enables rapid iteration on the warm/energetic brand without custom CSS
- Vercel offers free tier and seamless GitHub deploys for a pre-revenue project
- This stack is well-understood and has great documentation

### Why Supabase for Waitlist?

- Generous free tier (500MB DB, 1GB file storage)
- Already using Supabase for the eventual app — consolidate backend
- REST API accessible directly from server routes — no client library runtime dependency
- `waitlist` table tracks persona source for demand validation per persona

### Why Direct Supabase REST API in Route?

The waitlist API route (`app/api/waitlist/route.ts`) uses the Supabase REST API directly via `fetch` instead of the `@supabase/supabase-js` client library. This avoids a runtime dependency on env var injection during Vercel's build process — the URL and service role key are hardcoded in the route and used at request time.

### Why the ENERGETIC Design System?

- Primary color #EA580B (warm burnt orange) matches "energetic but approachable" brand requirement
- Background #FFEDD5 (warm peach-cream) avoids cold corporate aesthetic
- Design language is dynamic but friendly — fits the "friendly independent coach" vibe

## Current Architecture

```
FitDesk/
├── app/
│   ├── layout.tsx                    ← Root layout: fonts (Limelight + DM Sans), Nav, Footer
│   ├── globals.css                   ← CSS vars (brand tokens) + Tailwind directives
│   ├── page.tsx                      ← / (generic hero)
│   ├── overwhelmed/page.tsx           ← Persona 1
│   ├── check-in/page.tsx              ← Persona 2
│   ├── billing/page.tsx                ← Persona 3
│   ├── scale/page.tsx                  ← Persona 4
│   ├── simplicity/page.tsx             ← Persona 5
│   ├── retention/page.tsx              ← Persona 6
│   └── api/waitlist/route.ts           ← POST: insert email into Supabase waitlist table
├── components/                         ← All shared, used on every page
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── hero.tsx                        ← Props: headline, subheadline, source
│   ├── problem.tsx                     ← Static: 5 pain points
│   ├── solution.tsx                    ← Static: 3 feature cards
│   ├── alternatives.tsx                ← Static: 4 alternatives
│   ├── pricing.tsx                     ← Static: 3 tiers
│   ├── social-proof.tsx               ← Static: 3 testimonials + counter
│   ├── final-cta.tsx                   ← Props: headline, subheadline
│   └── waitlist-form.tsx               ← Client component: email → POST /api/waitlist
├── lib/
│   └── supabase.ts                     ← Supabase client (kept for future use; not used by route)
├── public/
│   └── fitdesk-landing.html             ← Original Open Design HTML (archived reference)
├── .vercel/                           ← Vercel project config (gitignored, but project.json committed)
├── docs/                              ← PROGRESS.md, GOALS.md, ARCHITECTURE.md, landingpage_plan.md
└── AGENTS.md                           ← Project rules and context
```

## Waitlist API Design

`POST /api/waitlist`

Request:
```json
{ "email": "user@example.com", "source": "overwhelmed" }
```

Response (success):
```json
{ "message": "Success" }
```

Response (duplicate):
```json
{ "message": "Already signed up" }
```

Response (invalid email):
```json
{ "error": "Invalid email" }
```

## Environment Variables

Stored in `.env.local` (gitignored). Used locally for `npm run dev`:
```
NEXT_PUBLIC_SUPABASE_URL=https://ivjrqeilpbllstobdqkl.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```

On Vercel: env vars set via `.vercel/.env` (uploaded during deploy) OR hardcoded in the route.

## Future Architecture (TBD After Customer Interviews)

- Supabase Auth for coach accounts
- Client-facing portal for workouts/check-ins
- Payments via Stripe
- Actual client management features (TBD from interviews)

---

Last updated: 2026-05-14