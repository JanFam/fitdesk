# FitDesk — Progress

## Current Status

**Stage: Pre-product demand validation**

Finalizing landing page strategy — pivoted to 7-persona approach with 7 landing pages.

## Completed Tasks

- [x] Office hours session — validated problem space, identified customer research gap
- [x] Agreed on validation approach: free waitlist + 2-week trial promise
- [x] Tech stack confirmed: Next.js + Tailwind + Vercel + Loops
- [x] Domain brainstorming done — decided to keep FitDesk name
- [x] Brand identity direction: warm/energetic, not corporate, not gym bro
- [x] Content strategy researched — coach language, competitor messaging, hooks
- [x] Open Design setup — connected as local CLI
- [x] Open Design model selection — minimax-m2.7 from NVIDIA NIM
- [x] Design system selected — ENERGETIC (warm orange #EA580B on cream #FFEDD5)
- [x] Open Design settings finalized:
  - Mode: prototype
  - Skill: saas-landing
  - Design system: ENERGETIC
  - Fidelity: high-fidelity
  - Companion surface: OFF
  - Surface type: responsive web
- [x] Researched reference sites: Wellhub, Mailmodo, Trainerize
- [x] Drafted comprehensive Open Design prompt for base landing page
- [x] Persona research — validated 7 personas from research

## Persona Validation (Research-Backed)

| # | Persona | Headline Angle | Validation |
|---|---|---|---|
| 1 | **Overwhelmed New Coach** (5-15 clients) | "You're not a personal trainer anymore." | ★★★★★ Strong |
| 2 | **Check-In Dread Coach** (15-30 clients) | "Monday morning: 20 unread check-ins." | ★★★★★ Strong |
| 3 | **Billing Hassle Coach** | "Stop chasing payments. Start coaching." | ★★★★☆ Strong |
| 4 | **Scale-Up Coach** (30-50 clients) | "Your spreadsheet can't keep up." | ★★★★★ Strong |
| 5 | **Simplicity-First Coach** (renamed from Tech-Averse) | "If you can use WhatsApp, you can use FitDesk." | ★★★☆☆ Moderate |
| 6 | **Retention Coach** (ghosting prevention) | "Clients don't cancel out loud." | ★★★★☆ Strong |
| 7 | **Growth-Blocked Coach** (15-30 clients) | Merged with Scale-Up as early-stage variant | — |

Note: Persona 7 (Growth-Blocked) and Persona 4 (Scale-Up) overlap significantly. Using `/scale` route for both.

## Immediate Next Steps

1. **Run Open Design** — paste base prompt, generate single HTML artifact, export
2. **Scaffold Next.js project** — `npx create-next-app@latest fitdesk --typescript --tailwind`
3. **Build shared layout** — header, footer, nav (logo + CTA)
4. **Build shared pricing component** — same 3 tiers on every page
5. **Build Loops waitlist form component** — tags submissions with persona source
6. **Create 7 persona pages** in `app/[persona]/page.tsx`
7. **Create generic page** at `/app/page.tsx`
8. **Connect Loops** — create form, get embed code
9. **Deploy to Vercel** — one project, 8 routes total

## Route Structure

```
fitdesk.com/               ← generic page (original comprehensive)
fitdesk.com/overwhelmed    ← Persona 1 (Overwhelmed New Coach)
fitdesk.com/check-in       ← Persona 2 (Check-In Dread)
fitdesk.com/billing        ← Persona 3 (Billing Hassle)
fitdesk.com/scale          ← Persona 4+7 (Scale-Up / Growth-Blocked)
fitdesk.com/simplicity     ← Persona 5 (Simplicity-First)
fitdesk.com/retention      ← Persona 6 (Ghosting/Retention)
```

## Landing Page Sections (All Pages Share)

1. Hero (persona-specific headline + CTA)
2. The Problem — "Sound familiar?" (persona-specific pain points first)
3. The Solution — 3 pillars
4. The Problem With Alternatives
5. Pricing Transparency (same 3 tiers everywhere)
6. Social Proof (same testimonials + waitlist count)
7. Final CTA (2 weeks free)
8. Footer

## Open Design Prompt

One comprehensive prompt written for the base page. Run once in Open Design. For other 6 pages, I duplicate the structure and swap only the persona-specific copy (headlines, subheadlines, pain point emphasis).

Prompt is in: `/docs/OPEN_DESIGN_PROMPT.md` (created separately).

## Blockers

- Instagram post context — user provided the strategy content (7 personas, 7 landing pages, ManyChat)
- Domain name not yet registered

## Open Questions

- No customer interviews completed yet — this is required before building product

## Session Notes

- User prefers warm/energetic brand — coral/orange on cream
- Open Design connected via local CLI with minimax-m2.7 model
- User wanted free waitlist (not paid) with 2-week trial promise
- Brand should feel "friendly independent coach" not "gym bro" or "corporate SaaS"
- Pivoted to 7-persona strategy based on Instagram coaching content

---

Last updated: 2026-05-14