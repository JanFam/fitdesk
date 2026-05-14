# FitDesk — Progress

## Current Status

**Stage: Demand validation live**

Landing pages are built and deployed. Waitlist is collecting emails in Supabase.

## Completed Tasks

### Strategy & Planning
- [x] Office hours session — validated problem space
- [x] Agreed on validation approach: free waitlist + 2-week trial promise
- [x] Tech stack confirmed: Next.js + Tailwind + Vercel + Supabase
- [x] Brand identity: warm/energetic, coral #EA580B on cream #FFEDD5, friendly independent coach feel
- [x] Content strategy researched — coach language, competitor messaging, hooks
- [x] Open Design setup — connected as local CLI with minimax-m2.7 model
- [x] Design system selected — ENERGETIC (coral/orange on cream)
- [x] Researched reference sites: Wellhub, Mailmodo, Trainerize
- [x] Drafted comprehensive Open Design prompt for base landing page
- [x] Open Design mockup generated and exported as static HTML
- [x] HTML mockup converted to Next.js

### 7 Persona Validation

| # | Persona | Headline | Status |
|---|---|---|---|
| 1 | **Overwhelmed New Coach** (5-15 clients) | "You're not a personal trainer anymore." | ✅ Live |
| 2 | **Check-In Dread Coach** (15-30 clients) | "Monday dread is optional." | ✅ Live |
| 3 | **Billing Hassle Coach** | "Stop chasing payments." | ✅ Live |
| 4 | **Scale-Up Coach** (30-50 clients) | "Same tool at 10 clients as at 50." | ✅ Live |
| 5 | **Simplicity-First Coach** | "Your clients will actually use this." | ✅ Live |
| 6 | **Retention Coach** | "Don't lose clients to silence." | ✅ Live |

## Route Structure

```
fitdesk.com/               ← generic page (original comprehensive)
fitdesk.com/overwhelmed    ← Persona 1 (Overwhelmed New Coach)
fitdesk.com/check-in       ← Persona 2 (Check-In Dread)
fitdesk.com/billing        ← Persona 3 (Billing Hassle)
fitdesk.com/scale          ← Persona 4 (Scale-Up)
fitdesk.com/simplicity     ← Persona 5 (Simplicity-First)
fitdesk.com/retention      ← Persona 6 (Ghosting/Retention)
```

## Landing Page Sections (All Pages Share)

1. Hero (persona-specific headline + waitlist CTA)
2. The Problem — "Sound familiar?" (5 shared pain points)
3. The Solution — 3 pillars (Program Delivery, Check-ins & Accountability, Payments & Billing)
4. The Problem With Alternatives (4 items)
5. Pricing (Starter $29 / Pro $49 featured / Scale $79)
6. Social Proof (3 testimonials + "500+ coaches on waitlist" counter)
7. Final CTA (second waitlist capture)
8. Footer

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS
- **Supabase** — `waitlist` table, free tier
- **Vercel** — deployed to `fitdesk-xi.vercel.app`, aliased to `fitdesk.com` (custom domain pending)
- **Fonts** — Limelight (display) + DM Sans (body) via `next/font/google`

## Supabase

- Project URL: `https://ivjrqeilpbllstobdqkl.supabase.co`
- `waitlist` table: `id` (uuid), `email` (text unique), `source` (text), `created_at` (timestamptz)
- API uses Supabase REST API directly (not the client library) — avoids runtime env var issues

## Infrastructure

- GitHub repo: `https://github.com/JanFam/fitdesk`
- Vercel project: `janfams-projects/fitdesk`
- Production URL: `https://fitdesk-xi.vercel.app`
- Branch: `main` — auto-deploys on push

## Next Steps

1. **Customer interviews** — required before product development starts
2. **Custom domain** — add `fitdesk.com` in Vercel dashboard (pending DNS setup)
3. **Install Vercel GitHub app** — enables preview deployments per PR
4. **Social content** — drive traffic to landing pages (TikTok/Instagram)

## Blockers

- No customer interviews completed yet — required before building product
- Custom domain not yet connected

---

Last updated: 2026-05-14