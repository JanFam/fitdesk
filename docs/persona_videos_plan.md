# FitDesk — Persona Video Production Plan

## Overview

7 persona-specific social media videos (TikTok, Instagram Reels, YouTube Shorts) driving to the matching landing page. Each video follows the same structure: hook → problem mockups → solution reveal → feature tour → CTA.

**Video length:** 18-22 seconds
**Platform:** TikTok, Instagram Reels, YouTube Shorts
**Goal:** Drive waitlist signups with persona-specific messaging

---

## Video Structure (All Personas)

```
[0-3s]   TEXT HOOK        — Persona-specific pain point, large bold text
[3-8s]   PROBLEM MOCKUPS — 3 quick visual mockups showing that persona's chaos
[8-12s]  SOLUTION REVEAL  — FitDesk logo + full app dashboard mockup appears
[12-18s] FEATURE TOUR    — Quick montage: programs, check-ins, billing
[18-22s] CTA             — "Join the waitlist" + persona landing page URL
```

---

## Per-Persona Breakdown

### Persona 1: `/overwhelmed`
**Hook text:** "You went from 15 to 30 clients and you're drowning."
**Problem mockups (3 cuts):**
1. Phone showing 47+ notification badges
2. Browser with 5 open tabs (WhatsApp, Sheets, PayPal, Calendar, Email)
3. Spreadsheet with client data getting messy

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/overwhelmed`

---

### Persona 2: `/check-in`
**Hook text:** "Monday morning. You haven't had coffee yet and you already have 15 check-ins to review."
**Problem mockups (3 cuts):**
1. WhatsApp-like interface with message pile-up
2. Calendar showing the week filling up fast
3. Client progress notes showing stale data

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/check-in`

---

### Persona 3: `/billing`
**Hook text:** "You have three clients who haven't paid this month."
**Problem mockups (3 cuts):**
1. Awkward payment reminder text draft on phone
2. Bank app showing pending/incomplete PayPal transfers
3. Notebook/spreadsheet with payment tracking that's confusing

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/billing`

---

### Persona 4: `/scale`
**Hook text:** "Same price at 10 clients as at 50. Sound too good to be true?"
**Problem mockups (3 cuts):**
1. Tool-switching montage: Trainerize dashboard → TrueCoach dashboard → another tool
2. $99/month gym software dashboard with features you don't need
3. Feature comparison table getting more complex each time

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/scale`

---

### Persona 5: `/simplicity`
**Hook text:** "Your client just texted that they can't figure out the app."
**Problem mockups (3 cuts):**
1. App tutorial screens — too many steps
2. Client saying "I can't use this" over text
3. Coach spending time on support instead of coaching

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/simplicity`

---

### Persona 6: `/retention`
**Hook text:** "Most of your clients don't tell you they're quitting. They just stop showing up."
**Problem mockups (3 cuts):**
1. Calendar showing client who ghosted — last session 3 weeks ago
2. Check-in response: "yes" from 2 weeks ago, no follow-up
3. No visibility into who's falling off until it's too late

**Solution:** Full FitDesk dashboard (shared across all personas)
**CTA URL:** `fitdesk-xi.vercel.app/retention`

---

## Shared Assets

### Solution Mockup (One for all personas)
**Full FitDesk dashboard mockup** showing:
- Clean sidebar navigation
- Client overview panel
- Check-in feed (3-4 entries)
- Program delivery view
- Billing overview
- All with coral/cream brand colors

This is used as the solution reveal and feature tour source.

### Feature Tour Montage
Quick cuts within the dashboard showing the 3 pillars:
1. **Programs** — build and send workouts screen
2. **Check-ins** — weekly check-in feed showing client status
3. **Billing** — payment overview showing who's paid

---

## Production Steps

### Step 1: Problem Mockups (Open Design per persona)
For each persona, prompt Open Design to create 3 stylized phone/browser mockup screens showing the specific pain. Style: modern minimalist, coral accent colors, dark background option.

Example prompt for /overwhelmed:
> "3 iPhone mockup screens showing notification chaos. Screen 1: phone with 47 notification badges. Screen 2: browser with 5 tabs (WhatsApp, Sheets, PayPal, Calendar, Email). Screen 3: spreadsheet with client data and columns overflowing. Clean minimalist style, coral and cream color palette, dark mode option."

### Step 2: Solution Mockup (Open Design — one time)
Prompt Open Design to create a full FitDesk dashboard mockup:
> "A complete mobile app dashboard mockup for a fitness coaching app called FitDesk. Shows: sidebar nav, client list, recent check-in feed with 3 client entries (Sarah M., Marcus T., Jenna L.), program delivery card showing a workout template, billing summary showing 2 paid / 1 pending. Coral (#EA580B) and cream (#FFEDD5) brand colors, modern minimalist iOS app style."

### Step 3: Screen Recording / Video Capture
Film the Open Design mockups as video — smooth scrolling through screens, each mockup on screen for 1-2s. Use Loom or similar to record.

### Step 4: Editing
Use CapCut (free) to assemble:
1. Text hook (2-3s) — use persona headline in bold
2. Problem mockup cuts (5s) — 3 screens, 1-2s each
3. Solution reveal (4s) — dashboard mockup appearing with FitDesk logo
4. Feature tour (6s) — 3 feature screens from the dashboard
5. CTA (4s) — persona URL + "Join the waitlist" text

### Step 5: Voiceover
- Record yourself reading the hook line
- OR use ElevenLabs AI voice (free tier available)
- Add as voiceover to the text hook section

---

## Stack

| Purpose | Tool |
|---------|------|
| Problem mockups | Open Design (minimax-m2.7) |
| Solution mockup | Open Design (one shared mockup) |
| Screen capture | Loom or screen record |
| Video editing | CapCut (free) |
| AI voice (optional) | ElevenLabs (free tier) |

---

## Post to Each Platform

| Persona | TikTok | Instagram Reels | YouTube Shorts |
|---------|--------|-----------------|---------------|
| /overwhelmed | ✅ | ✅ | ✅ |
| /check-in | ✅ | ✅ | ✅ |
| /billing | ✅ | ✅ | ✅ |
| /scale | ✅ | ✅ | ✅ |
| /simplicity | ✅ | ✅ | ✅ |
| /retention | ✅ | ✅ | ✅ |

Each platform uses the same video file. The persona URL in the CTA is different per platform if tracking needed, but the video itself stays the same.

---

## What We Have Already

- Landing pages: `fitdesk-xi.vercel.app/[persona]`
- Open Design: connected and working
- Supabase: waitlist table with source tracking

---

## What to Build Next (In Order)

1. **Open Design prompt** — write the prompt for the shared solution dashboard mockup
2. **Open Design prompts** — write 6 separate prompts for the problem mockups (one per persona)
3. **Screen capture** — film the mockups
4. **Edit** — assemble in CapCut
5. **Post** — start with the 2 strongest personas (/overwhelmed + /check-in) and iterate

---

## Strongest Personas to Start With

Based on engagement potential:
1. **/check-in** — "Monday morning" hook is the most universally relatable
2. **/overwhelmed** — "15 to 30 clients" hits hard for coaches in growth mode
3. **/billing** — "3 clients who haven't paid" is frustrating and searchable

Start with these two, measure waitlist signups, then do the rest.

---

Last updated: 2026-05-14