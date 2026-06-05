# PM Proposal 2 — 2026-06-12

## Changes Since Proposal 1 (2026-05-29)

Since the first proposal, 5 features have been delivered: photo gallery (#20), Pizza of the Week (#22), mobile hamburger menu (#24), customer testimonials (#25), and social media links (#29). New quantitative and qualitative data is now available showing how these features perform in production.

**Key shifts in the data:**
- Traffic grew 41% (5,100 → 7,200 unique visitors) — growth partly driven by social links and Instagram referrals (+54%)
- Gallery is heavily used (5,640 lightbox opens, 3.3 photos viewed per session) but users want more variety and sharing options
- Pizza of the Week drives in-store orders but has a freshness/staleness problem
- Testimonials build trust but feel curated — users want authenticity
- Hamburger menu adopted well (4,280 toggles) but has a scroll-behind UX bug
- Previous proposal suggested SEO, first-visit friction, and international audience — SEO and first-visit friction remain unaddressed; this proposal focuses on new signals from delivered features

---

## Current State Summary

- **Delivered features:** 5 (with `feature` label closed)
- **In-progress/planned features:** 23
- **Active epics:** 8
- **Current roadmap ends:** 2026-06-24

---

## Proposed Epics & Features

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Deepen Visual Content & Sharing**

**Goal:** The gallery and visual content become shareable assets that drive organic growth, and the content feels authentic and varied rather than purely promotional.

**What success looks like:** Users share gallery content directly to social platforms, gallery engagement deepens beyond browsing, and the visual content includes people and place — not just product.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `gallery_lightbox_open` — 5,640 opens from 1,720 users (3.3 photos/session) shows strong engagement; `social_link_click` — Instagram clicks growing 93% week-over-week (420→810)
- Qualitative: FB-031 — "photos are nice but they all look the same — just the pizza. Would love to see the restaurant interior, staff, or people"; FB-038 — "Could you add a way to share a specific gallery photo directly to Instagram stories?"; FB-035 — "Tried to zoom in on a gallery photo but the lightbox image was still pretty small"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add share-to-social buttons on lightbox**

| | |
|---|---|
| **Epic** | Deepen Visual Content & Sharing |
| **Description** | Add share buttons (Instagram, Facebook, copy link) to the lightbox modal, allowing users to share individual gallery photos directly to social platforms without screenshotting. |
| **Acceptance criteria** | <ul><li>Lightbox shows share buttons below the image</li><li>"Copy link" generates a URL with the photo ID in the hash</li><li>Opening a shared link opens the lightbox directly on that photo</li><li>Buttons are accessible and labelled</li></ul> |
| **Leading indicators** | Share button click rate (quantitative, Pendo). Gallery-driven social referral traffic (quantitative, Pendo). User feedback on sharing ease (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `social_link_click` — 1,840 total clicks show users want to bridge site↔social; `gallery_lightbox_open` — 5,640 opens means high volume of shareable moments
- Qualitative: FB-038 (Instagram DMs) — "Could you add a way to share a specific gallery photo directly to Instagram stories? I wanted to show my friends the truffle pizza but had to screenshot instead"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add restaurant & people photos to gallery**

| | |
|---|---|
| **Epic** | Deepen Visual Content & Sharing |
| **Description** | Expand the gallery with photos of the restaurant interior, the team at work, and customers enjoying food. Adds warmth and authenticity beyond product shots. |
| **Acceptance criteria** | <ul><li>Gallery includes at least 4 non-pizza photos (interior, oven, team, customers)</li><li>Photos are categorised with filter tabs (All / Pizzas / Restaurant / People)</li><li>Filters work client-side with smooth transitions</li><li>Available in both DA and EN</li></ul> |
| **Leading indicators** | Gallery page dwell time (quantitative, Pendo). Non-pizza photo view rate (quantitative, Pendo). User feedback on authenticity (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `gallery_page_view` — 3,420 views growing 120% W22→W24 (780→1720) shows accelerating interest; most-viewed photo is "Our coal-fired oven" (820 opens) — a non-pizza shot already outperforms some pizza photos
- Qualitative: FB-031 (in-store comment card) — "Would love to see photos of the restaurant interior, the staff, or people enjoying the food"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add pinch-to-zoom on mobile lightbox**

| | |
|---|---|
| **Epic** | Deepen Visual Content & Sharing |
| **Description** | Enable pinch-to-zoom gesture on lightbox images for mobile users who want to inspect pizza toppings and details up close. |
| **Acceptance criteria** | <ul><li>Mobile users can pinch-to-zoom on lightbox images</li><li>Zoom level resets when closing the lightbox</li><li>Does not interfere with swipe-to-close or other gestures</li><li>Desktop users can scroll-zoom or double-click to zoom</li></ul> |
| **Leading indicators** | Lightbox time-on-image on mobile (quantitative, Pendo). Zoom interaction rate (quantitative, Pendo). User satisfaction with photo detail (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `visitor_summary.device_breakdown` — 52% mobile (3,740/7,200); `gallery_lightbox_open` — high engagement but no zoom capability on the dominant device
- Qualitative: FB-035 (in-store comment card) — "Tried to zoom in on a gallery photo on my phone to see the toppings more clearly but the lightbox image was still pretty small. Pinch to zoom would be nice"

</div>

---

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Improve Content Freshness & Authenticity**

**Goal:** Dynamic content stays current and feels genuine, giving visitors a reason to return and trust what they see.

**What success looks like:** The Pizza of the Week updates reliably, testimonials feel balanced and real, and returning visitors notice fresh content each week.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `potw_card_view` — 8,200 impressions (3,950 unique) shows the feature gets attention, but no mechanism ensures freshness; `testimonial_scroll_into_view` — 72.4% scroll-past rate suggests some users don't engage deeply
- Qualitative: FB-033 (staff observations) — "Customer asked why the Pizza of the Week hasn't changed in over a week. They expected it to update every Monday"; FB-039 (in-store comment card) — "The testimonials section only shows 5 reviews and they're all positive. Feels a bit fake honestly"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add rotating Pizza of the Week from a schedule**

| | |
|---|---|
| **Epic** | Improve Content Freshness & Authenticity |
| **Description** | Replace the single pizza-of-the-week.json with a schedule of multiple entries. The site automatically shows the correct one based on the current week number, ensuring the content rotates without manual intervention. |
| **Acceptance criteria** | <ul><li>JSON file contains an array of 4+ pizza entries with week numbers</li><li>Site displays the entry matching the current ISO week</li><li>Falls back gracefully if no entry matches (shows most recent past entry)</li><li>Adding a new week's pizza requires only editing the JSON file</li></ul> |
| **Leading indicators** | Return visitor rate to home page (quantitative, Pendo). Pizza of the Week-driven in-store orders (qualitative, observations). Staleness complaints (qualitative — should decrease). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `potw_card_view` — 8,200 impressions, growing 64% W23→W24 (3100→5100), but same content shown throughout — repeat visitors see stale content
- Qualitative: FB-033 (staff observations) — "Customer asked why the Pizza of the Week hasn't changed in over a week. They expected it to update every Monday. We need a process for keeping this fresh"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add dynamic testimonial rotation with mixed sentiment**

| | |
|---|---|
| **Epic** | Improve Content Freshness & Authenticity |
| **Description** | Load testimonials from a JSON file with a larger pool (10-15 entries including constructive criticism), and randomly display 3-4 per page load. Include one "honest" review to feel authentic. |
| **Acceptance criteria** | <ul><li>Testimonials sourced from a JSON file (not hardcoded)</li><li>Pool contains at least 10 entries including 2-3 with constructive/mixed sentiment</li><li>3-4 randomly selected per page load (different each visit)</li><li>At least one displayed testimonial is "honest" (not purely positive)</li></ul> |
| **Leading indicators** | Testimonial section engagement time (quantitative, Pendo). Testimonial scroll-past rate (quantitative — should decrease). Trust perception (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `testimonial_scroll_into_view` — 72.4% scroll-past rate and only 8.7s avg visibility suggests many users glance but don't engage deeply; static content may bore repeat visitors
- Qualitative: FB-039 (in-store comment card) — "The testimonials section only shows 5 reviews and they're all positive. Feels a bit fake honestly. Real restaurants have some mixed feedback too"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add "last updated" timestamp to dynamic content**

| | |
|---|---|
| **Epic** | Improve Content Freshness & Authenticity |
| **Description** | Show a subtle "Updated: [date]" label on the Pizza of the Week card and testimonials section, signalling to users that content is maintained and current. |
| **Acceptance criteria** | <ul><li>Pizza of the Week card shows a small "Updated: [date]" below the price</li><li>Date is read from the JSON data file (not hardcoded)</li><li>Testimonials section shows "Last refreshed: [date]"</li><li>Timestamps are in relative format where sensible ("2 days ago" vs exact date)</li></ul> |
| **Leading indicators** | Return visit frequency (quantitative, Pendo). Content staleness complaints (qualitative — should decrease). Perceived freshness (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `potw_card_view` weekly growth (+64%) shows users check the home page regularly — they need a signal that content is fresh; `visitor_summary` — avg 3.8 pages/session (up from 3.2) means users explore and would notice staleness
- Qualitative: FB-033 — customer expected Monday updates; a visible timestamp sets clear expectations about refresh cadence

</div>

---

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Fix & Polish Delivered Features**

**Goal:** Recently shipped features work flawlessly, addressing bugs and rough edges reported by users before moving to new functionality.

**What success looks like:** Reported UX issues are resolved, user complaints about specific features decrease, and the overall quality perception improves.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `hamburger_menu_toggle` — 1,420 closes via overlay vs only 750 via nav click suggests users may be accidentally closing; high toggle count (4,280) relative to unique users (1,890) means users toggle multiple times per session (possible confusion)
- Qualitative: FB-036 (Google Reviews) — "when I open it, I can still scroll the page behind it. Feels janky. Also the menu covers the language toggle on desktop when I resize"; FB-035 — lightbox too small on mobile

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Fix hamburger menu scroll-behind bug**

| | |
|---|---|
| **Epic** | Fix & Polish Delivered Features |
| **Description** | Prevent the page from scrolling when the mobile menu is open by adding `overflow: hidden` to the body while the menu is active. Also fix the language toggle overlap on desktop resize. |
| **Acceptance criteria** | <ul><li>Page body does not scroll when mobile menu is open</li><li>Scroll position is preserved when menu closes</li><li>Language toggle does not overlap with the menu on any viewport</li><li>No layout shift when overflow is toggled</li></ul> |
| **Leading indicators** | Hamburger toggle-per-session rate (quantitative — should decrease). UX complaints about mobile nav (qualitative — should stop). Close-via-overlay rate (quantitative — should decrease if accidental closes reduce). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `hamburger_menu_toggle` — 4,280 toggles from 1,890 users = 2.3 toggles/user (suggests re-opening after accidental close); close_via_overlay (1,420) is nearly 2x close_via_nav_click (750)
- Qualitative: FB-036 (Google Reviews) — "when I open it, I can still scroll the page behind it. Feels janky. Also the menu covers the language toggle on desktop when I resize my browser"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Improve lightbox image sizing on mobile**

| | |
|---|---|
| **Epic** | Fix & Polish Delivered Features |
| **Description** | Make lightbox images fill more of the mobile viewport (use `max-width: 95vw` and `max-height: 90vh` on mobile) so users can see pizza details without zooming. |
| **Acceptance criteria** | <ul><li>Lightbox images fill at least 90% viewport width on mobile</li><li>Images remain properly contained (no overflow/clipping)</li><li>Close button remains visible and tappable</li><li>No change to desktop behaviour</li></ul> |
| **Leading indicators** | Lightbox time-on-image on mobile (quantitative, Pendo). Zoom-related feedback (qualitative — should stop). Gallery satisfaction (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: 52% of visitors are mobile; `gallery_lightbox_open` — 5,640 opens but current `max-width: 90vw / max-height: 85vh` CSS wastes screen space on small devices
- Qualitative: FB-035 (in-store comment card) — "Tried to zoom in on a gallery photo on my phone to see the toppings more clearly but the lightbox image was still pretty small"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add body scroll lock utility**

| | |
|---|---|
| **Epic** | Fix & Polish Delivered Features |
| **Description** | Create a reusable scroll-lock utility that prevents background scrolling when any overlay is open (lightbox, mobile menu). Prevents the class of bugs where modal content and page content scroll simultaneously. |
| **Acceptance criteria** | <ul><li>Background page does not scroll when lightbox is open</li><li>Background page does not scroll when hamburger menu is open</li><li>Scroll position is restored correctly after closing</li><li>Works on iOS Safari (which has quirks with overflow:hidden on body)</li></ul> |
| **Leading indicators** | Overlay-related UX complaints (qualitative — should stop). Accidental close rate on overlays (quantitative — should decrease). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: Both `hamburger_menu_toggle` (1,420 overlay closes) and `gallery_lightbox_open` (5,640 opens) involve overlays that currently allow background scroll — a shared fix addresses both
- Qualitative: FB-036 — "I can still scroll the page behind it. Feels janky" (hamburger); same issue implicitly affects the lightbox on mobile

</div>

---

## Roadmap

### Current Timeline

| Feature | Status | Start | End |
|---------|--------|-------|-----|
| Add photo gallery of pizzas | Closed | 2026-05-28 | 2026-05-30 |
| Add customer testimonials section | Closed | 2026-05-29 | 2026-06-01 |
| Add social media links and Instagram feed | Closed | 2026-06-01 | 2026-06-03 |
| Add Pizza of the Week highlight | Closed | 2026-06-04 | 2026-06-06 |
| Add mobile hamburger menu | Closed | 2026-06-14 | 2026-06-17 |
| Add print-friendly menu | Proposed | 2026-06-08 | 2026-06-10 |
| Add event calendar | Proposed | 2026-06-11 | 2026-06-14 |
| Add interactive pizza builder preview | Proposed | 2026-06-19 | 2026-06-24 |

**Current roadmap ends: 2026-06-24**

### Proposed Timeline

| Feature | Epic | Proposed Start | Proposed End | Duration |
|---------|------|----------------|--------------|----------|
| Fix hamburger menu scroll-behind bug | Fix & Polish Delivered Features | 2026-06-25 | 2026-06-27 | 3 days |
| Improve lightbox image sizing on mobile | Fix & Polish Delivered Features | 2026-06-28 | 2026-06-30 | 3 days |
| Add body scroll lock utility | Fix & Polish Delivered Features | 2026-07-01 | 2026-07-03 | 3 days |
| Add rotating Pizza of the Week from a schedule | Improve Content Freshness & Authenticity | 2026-07-04 | 2026-07-06 | 3 days |
| Add dynamic testimonial rotation with mixed sentiment | Improve Content Freshness & Authenticity | 2026-07-07 | 2026-07-09 | 3 days |
| Add "last updated" timestamp to dynamic content | Improve Content Freshness & Authenticity | 2026-07-10 | 2026-07-12 | 3 days |
| Add share-to-social buttons on lightbox | Deepen Visual Content & Sharing | 2026-07-13 | 2026-07-15 | 3 days |
| Add restaurant & people photos to gallery | Deepen Visual Content & Sharing | 2026-07-16 | 2026-07-18 | 3 days |
| Add pinch-to-zoom on mobile lightbox | Deepen Visual Content & Sharing | 2026-07-19 | 2026-07-21 | 3 days |

**Proposed new work ends: 2026-07-21**

**Note:** Timeline estimates use a default 3-day duration per feature. No closed features have "Effort Spent" data populated yet. Estimates will be refined once historical velocity data is available.

---

## Methodology

- **Delivered features analysed:** #20 (photo gallery), #22 (Pizza of the Week), #24 (hamburger menu), #25 (testimonials), #29 (social media links)
- **Gaps identified:** Content staleness, sharing friction, mobile UX polish, authenticity of social proof
- **Themes avoided (already covered):** User Experience, Community & Trust, Content & Communication, Online Ordering Readiness, Gamification, Accessibility, Visual Storytelling, Offline/PWA, SEO (proposed in v1)
- **Velocity data source:** Default placeholder (3 days/feature) — no "Effort Spent" data on closed features yet
- **Quantitative data used:** gallery_lightbox_open (5,640), potw_card_view (8,200, +64% weekly), hamburger_menu_toggle (4,280, 2.3 per user), testimonial_scroll_into_view (72.4% scroll-past), social_link_click (1,840, Instagram +93% weekly), visitor_summary (7,200 visitors, +41% vs proposal 1)
- **Qualitative data used:** FB-031 (want restaurant photos), FB-033 (POTW stale), FB-035 (can't zoom lightbox), FB-036 (scroll-behind bug), FB-038 (want share to social), FB-039 (testimonials feel fake)
