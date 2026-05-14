# FitDesk Landing Pages — Implementation Plan

## Status: ✅ COMPLETE

All 7 landing pages are live and collecting waitlist signups.

## Live URLs

- **Production:** `https://fitdesk-xi.vercel.app` (aliased from `fitdesk-cuk91bnz7-janfams-projects.vercel.app`)
- **GitHub:** `https://github.com/JanFam/fitdesk`

---

## Overview

Built 7 persona-specific landing pages (1 generic + 6 persona variants) on a single Next.js app deployed to Vercel. All pages share the same structure — only the hero headline and subheadline differ per persona. Waitlist emails stored in Supabase with persona tracking.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS
- **Supabase** — `waitlist` table, free tier
- **Vercel** — deployed and aliased to `fitdesk-xi.vercel.app`
- **Fonts** — Limelight (display) + DM Sans (body) via `next/font/google`

## Supabase

- Project URL: `https://ivjrqeilpbllstobdqkl.supabase.co`
- `waitlist` table: `id` (uuid PK), `email` (text UNIQUE), `source` (text), `created_at` (timestamptz)
- Service role key hardcoded in `app/api/waitlist/route.ts` — uses Supabase REST API directly via `fetch`

---

## Folder Structure

```
FitDesk/
├── app/
│   ├── layout.tsx                    ← Root layout: fonts, Nav, Footer
│   ├── globals.css                   ← CSS vars + Tailwind directives
│   ├── page.tsx                      ← / (generic hero)
│   ├── overwhelmed/page.tsx           ← Persona 1
│   ├── check-in/page.tsx              ← Persona 2
│   ├── billing/page.tsx                ← Persona 3
│   ├── scale/page.tsx                  ← Persona 4
│   ├── simplicity/page.tsx             ← Persona 5
│   ├── retention/page.tsx              ← Persona 6
│   └── api/waitlist/route.ts           ← POST: insert email into Supabase
├── components/
│   ├── nav.tsx                        ← Sticky top bar
│   ├── footer.tsx                     ← Dark footer
│   ├── hero.tsx                       ← Props: headline, subheadline, source
│   ├── problem.tsx                    ← Static: 5 pain points
│   ├── solution.tsx                   ← Static: 3 feature cards
│   ├── alternatives.tsx               ← Static: 4 alternatives
│   ├── pricing.tsx                    ← Static: 3 tiers
│   ├── social-proof.tsx              ← Static: 3 testimonials + 500+ counter
│   ├── final-cta.tsx                  ← Props: headline, subheadline
│   └── waitlist-form.tsx              ← Client: email → POST /api/waitlist
├── lib/
│   └── supabase.ts                    ← Supabase client (kept for future use)
├── public/
│   └── fitdesk-landing.html            ← Original Open Design HTML (archived)
├── docs/
│   ├── PROGRESS.md
│   ├── GOALS.md
│   ├── ARCHITECTURE.md
│   └── landingpage_plan.md             ← This file
└── .vercel/
    ├── project.json                   ← Vercel project link
    └── .env                           ← Env vars (gitignored, uploaded at deploy time)
```

---

## Implementation Notes

### Waitlist API

`POST /api/waitlist` — request body `{ email, source }`. Uses Supabase REST API directly via `fetch` with service role key. This avoids Vercel runtime env var issues (`.vercel/.env` vars only available during build, not at request time).

### Components

All shared components (`hero`, `problem`, `solution`, etc.) are used on every page. Only `hero` and `final-cta` take persona-specific props (headline + subheadline). All other sections are identical across all 7 pages.

### Client Components

Four components use `'use client'` due to event handlers (hover effects):
- `problem.tsx`
- `solution.tsx`
- `alternatives.tsx`
- `social-proof.tsx`

---

## Remaining Tasks

1. Add custom domain `fitdesk.com` in Vercel dashboard
2. Set up DNS records as Vercel instructs
3. Install Vercel GitHub app for PR preview deployments
4. Customer interviews (required before product development)

---

Last updated: 2026-05-14