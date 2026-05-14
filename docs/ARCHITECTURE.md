# FitDesk — Architecture

## Design Decisions

### Why Next.js + Tailwind + Vercel?

- Next.js App Router provides SSR/SSG flexibility needed for a marketing landing page
- Tailwind enables rapid iteration on the warm/energetic brand without writing custom CSS
- Vercel offers free tier and seamless GitHub deploys for a pre-revenue project
- This stack is well-understood and has great documentation for the creator

### Why Loops for Waitlist?

- Generous free tier (up to 10k contacts)
- Built specifically for product waitlists and launch campaigns
- Has email deliverability built-in (avoids spam folder issues)
- Simpler than setting up a database + email service separately

### Why Open Design for Landing Page Mockup?

- Local-first, BYOK design tool using existing coding agent (minimax-m2.7)
- ENERGETIC design system provides warm orange/coral palette that matches brand direction
- Generates real HTML/CSS artifacts (not just mockups) that can inform the actual build
- Saves time on design iteration — AI generates, human critiques and refines

### Why the ENERGETIC Design System?

- Primary color #EA580B (warm burnt orange) matches "energetic but approachable" brand requirement
- Background #FFEDD5 (warm peach-cream) avoids cold corporate aesthetic
- Design language is dynamic but friendly — fits the "friendly independent coach" vibe
- Alternative considered: WARM-EDITORIAL (terracotta on cream), BENTO (soft peach on cream) — both good alternatives if ENERGETIC feels too bold

## Feature Decisions (Pending — Will Come From Customer Research)

TBD after 20 customer interviews. The wedge (the one thing coaches would pay for this week) hasn't been determined yet.

## Technical Constraints

- Must be able to deploy to Vercel
- Must be able to collect emails via Loops
- Must be mobile-responsive
- Must load fast (landing page performance matters for conversion)

---

Last updated: 2026-05-14