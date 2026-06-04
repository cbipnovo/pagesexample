# PM Proposal 3 — 2026-07-22

## Changes Since Proposal 2 (2026-06-12)

Since the second proposal, 10 additional features have been delivered: print-friendly menu (#26), event calendar (#27), interactive pizza builder (#28), allergen filter (#41), keyboard navigation (#46), high-contrast mode (#48), rotating PotW (#67), dynamic testimonials (#68), updated timestamps (#69), share-to-social lightbox (#70), gallery categories (#71), pinch-to-zoom (#72), scroll lock (#66), lightbox sizing (#65), hamburger fix (#64), and feature toggles (#83).

**Key shifts in the data:**
- Total visitors grew 37% (7,200 → 9,850) — driven by broader feature set and social sharing
- Allergen filter adopted by 22.8% of menu visitors — dietary accessibility is a proven need
- Events page growing 40% W-over-W (520 → 730 views) — users want to know what's happening
- High-contrast mode has 48% retention rate — accessibility features are valued by those who need them
- Pizza builder sees 92.5s avg session time — users enjoy interactive/playful features
- Multiple feedback requests for favourites, ordering, and gamification (FB-051, FB-046, FB-018)
- 6 features remain in "New" status from Epics #34 and #35 — never formally proposed

---

## Current State Summary

- **Delivered features:** 24 (closed with `feature` label)
- **Open/planned features:** 15
- **Active epics:** 11
- **Current roadmap ends:** 2026-08-08

---

## Proposed Features

This proposal recommends moving the 6 existing "New" features through Gate 1, grouped under their existing epics. These features are already defined with acceptance criteria and leading indicators — this proposal provides the formal data justification and roadmap scheduling required to approve them.

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Increase Online Ordering Readiness (#34)**

**Goal:** Visitors can easily discover what's new, find relevant information, and communicate with the restaurant without barriers.

**What success looks like:** Users spend more time on the menu page, create and share order lists with friends, and arrive at the restaurant already knowing what they want to order.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `allergen_filter_usage` — 22.8% of menu visitors use the filter; `menu_session_duration_with_filters` — +24.8% session time for filter users. The menu page is the #2 most visited page (9,870 views). Users are primed for ordering features.
- Qualitative: FB-051 — "Multiple customers this week asked if we could add their pizza to some kind of favourites list. They want to remember what they ordered last time."

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add favourites/wishlist (#39)**

| | |
|---|---|
| **Epic** | Increase Online Ordering Readiness (#34) |
| **Description** | Allow visitors to heart/favourite menu items so they can collect their picks and decide what to order with friends. Reduces decision friction by letting users bookmark items across sessions. |
| **Acceptance criteria** | <ul><li>Users can favourite/unfavourite any menu item</li><li>Favourites persist across page reloads (localStorage)</li><li>A "My Picks" view shows all saved items</li><li>Works in both classic and vegan menu modes</li></ul> |
| **Leading indicators** | Favourite action count per session (quantitative, Pendo). Return visit rate for users who have saved favourites (quantitative, Pendo). User feedback on order planning experience (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `menu_view_duration` — 65.2s average, with 12% spending 120s+ (power users who'd benefit from saving picks); `menu_session_duration_with_filters` shows filter users spend 48.3s on average — these engaged users are ideal favourites candidates
- Qualitative: FB-051 — "Multiple customers this week asked if we could add their pizza to some kind of favourites list"; FB-046 — kids spending 10 minutes on pizza builder suggests users want to save/remember choices

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add order builder with shareable link (#40)**

| | |
|---|---|
| **Epic** | Increase Online Ordering Readiness (#34) |
| **Description** | Allow visitors to build an order (items + quantities) and share it via a link so their group can see what they're planning to get. Bridges the gap between browsing online and ordering in-store by enabling collaborative pre-ordering. |
| **Acceptance criteria** | <ul><li>Users can add items with quantities from the menu</li><li>A summary panel shows selected items, quantities, and estimated total</li><li>A "Copy Link" button generates a shareable URL with the order encoded</li><li>Opening a shared link restores the order summary</li><li>Works in both classic and vegan modes</li></ul> |
| **Leading indicators** | Shareable link generation count (quantitative, Pendo). Order summary interactions per session (quantitative, Pendo). No quantitative leading indicator available for group conversion — qualitative observation of in-store staff noting customers arriving with pre-planned orders (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `print_menu_click` — 342 prints in 3 weeks; users already use the site for offline ordering planning. `social_link_click` — 2,840 clicks shows users share content. Combining these behaviours = shareable order links.
- Qualitative: FB-043 — "Table 3 printed the menu to plan their office pizza order. Said the printout looked clean. They ordered 8 pizzas." — group ordering is a real use case; FB-052 — "Printed the menu to bring to a birthday party planning session. Everyone could see the options and vote."

</div>

---

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Boost Engagement Through Gamification (#35)**

**Goal:** Visitors interact with the site beyond passive browsing, increasing time on site and repeat visits.

**What success looks like:** Users return to the site for fun interactions, share quiz results and generated pizza names on social media, and develop a habit of checking in regularly.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `builder_page_view` — 2,640 views with 92.5s avg session time proves users enjoy interactive/playful features. `events_page_view` — growing 40% W-over-W shows users check back regularly when given a reason. Return visitor rate is 34% — gamification could push this higher.
- Qualitative: FB-018 — "It would be fun if you had some kind of game or quiz on the site. My kids always grab my phone while we wait for the food"; FB-046 — "My kids spent 10 minutes on the pizza builder... Smart feature!" — playful interactions work with this audience.

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add pizza trivia quiz (#42)**

| | |
|---|---|
| **Epic** | Boost Engagement Through Gamification (#35) |
| **Description** | Add a fun pizza trivia quiz so visitors can test their knowledge and share their score. Encourages repeat visits and social sharing through lighthearted competition. |
| **Acceptance criteria** | <ul><li>Users can start and complete a multi-question quiz</li><li>Each question shows 4 answer choices with immediate right/wrong feedback</li><li>Final screen shows score, a fun rank, and a copy-to-clipboard share button</li><li>Quiz can be replayed</li><li>Available in both DA and EN</li></ul> |
| **Leading indicators** | Quiz completion rate (quantitative, Pendo). Share button click rate after quiz completion (quantitative, Pendo). No quantitative indicator for social reach — track mentions of quiz results in customer observations (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `builder_page_view` — 92.5s avg session time on the builder proves users spend time on interactive features; `avg_session_duration_seconds` — 156.8s overall, with gamification likely to extend this
- Qualitative: FB-018 — "It would be fun if you had some kind of game or quiz on the site. My kids always grab my phone while we wait for the food."

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add spin-the-wheel daily special (#43)**

| | |
|---|---|
| **Epic** | Boost Engagement Through Gamification (#35) |
| **Description** | Add a spin-the-wheel feature that suggests a random pizza, helping indecisive visitors discover something new. Creates a playful moment that encourages trying unfamiliar menu items. |
| **Acceptance criteria** | <ul><li>An animated wheel spins and lands on a random menu item</li><li>The selected item is displayed with name, description, and price</li><li>Animation is smooth (CSS transitions or requestAnimationFrame)</li><li>Works with both classic and vegan menu items (based on current mode)</li></ul> |
| **Leading indicators** | Spin count per session (quantitative, Pendo). Click-through from wheel result to menu page (quantitative, Pendo). Staff observations of customers mentioning "the wheel told me to try this" (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `menu_view_duration` — 30.9% of users spend 30-60s on the menu (decision time), plus 12% spend 120s+ (analysis paralysis). A random suggestion shortcircuits this. `potw_card_view` — 8,200 impressions on PotW card shows users respond to "featured" suggestions.
- Qualitative: FB-029 — "Multiple customers this week mentioned they saw the Pizza of the Week on the website before coming in" — curated suggestions drive orders; a random wheel extends this pattern.

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add loyalty stamp card (#44)**

| | |
|---|---|
| **Epic** | Boost Engagement Through Gamification (#35) |
| **Description** | Add a virtual stamp card that tracks site interactions, rewarding visitors for engaging with different features. Creates a habit loop that encourages exploration of the full site and repeat visits. |
| **Acceptance criteria** | <ul><li>A stamp card UI shows current progress (filled/empty slots)</li><li>Users earn stamps for defined site interactions (max 1 per action type per day)</li><li>Progress persists across sessions (localStorage)</li><li>Completing the card triggers a congratulatory animation/message</li><li>Card is accessible from a persistent icon or nav item</li></ul> |
| **Leading indicators** | Stamp card open rate (quantitative, Pendo). Pages visited per session for users with active stamp cards vs without (quantitative, Pendo). No quantitative indicator for emotional reward — track customer comments about the stamp card experience (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `avg_pages_per_session` — 4.2 pages, but `navigation_click` breakdown shows heavy concentration on home + menu (72% of clicks). A stamp card motivates exploring gallery, events, builder. `events_page_view` growing 40% W-over-W shows users respond to new content — stamps give a reason to visit every section.
- Qualitative: FB-044 — "Found out about the Friday open-mic through your events page! I check it every week now." — this user already has a habit loop; stamp card formalises it for others.

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add pizza name generator (#45)**

| | |
|---|---|
| **Epic** | Boost Engagement Through Gamification (#35) |
| **Description** | Add a pizza name generator where visitors input their name, mood, and favourite topping to get a creative custom pizza name. A lighthearted shareable moment that extends brand reach through social sharing. |
| **Acceptance criteria** | <ul><li>Users fill in 2-3 fields (name, mood/adjective, topping preference)</li><li>A unique pizza name is generated and displayed in a styled card</li><li>Users can regenerate for a different result</li><li>A "Copy" or "Share" button lets users share the name</li><li>Available in both DA and EN</li></ul> |
| **Leading indicators** | Generator usage count (quantitative, Pendo). Share/copy button click rate (quantitative, Pendo). Social media mentions of generated pizza names (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `social_link_click` — 2,840 clicks shows users bridge site↔social readily. Copy-link on lightbox shows sharing mechanics are used. A name generator creates shareable content native to the site.
- Qualitative: FB-046 — kids spending 10 minutes on the pizza builder suggests playful features resonate with families; a name generator is low-stakes fun that works for all ages.

</div>

---

## Roadmap

### Current Timeline (Delivered)

| Feature | Status | Start | End |
|---------|--------|-------|-----|
| Add photo gallery of pizzas (#20) | ✅ Closed | 2026-05-28 | 2026-05-30 |
| Add customer testimonials (#25) | ✅ Closed | 2026-05-29 | 2026-06-01 |
| Add social media links (#29) | ✅ Closed | 2026-06-01 | 2026-06-03 |
| Add Pizza of the Week (#22) | ✅ Closed | 2026-06-04 | 2026-06-06 |
| Add contact form (#23) | ✅ Closed | 2026-06-05 | 2026-06-08 |
| Add mobile hamburger menu (#24) | ✅ Closed | 2026-06-14 | 2026-06-17 |
| Add dark mode toggle (#21) | ✅ Closed | 2026-06-18 | 2026-06-20 |
| Add last updated timestamp (#69) | ✅ Closed | 2026-07-10 | 2026-07-12 |
| Add print-friendly menu (#26) | ✅ Closed | 2026-07-22 | 2026-07-24 |
| Add event calendar (#27) | ✅ Closed | 2026-07-25 | 2026-07-27 |
| Add interactive pizza builder (#28) | ✅ Closed | 2026-07-28 | 2026-07-30 |
| Add keyboard navigation (#46) | ✅ Closed | 2026-07-31 | 2026-08-02 |
| Add high-contrast mode (#48) | ✅ Closed | 2026-08-03 | 2026-08-05 |
| Add allergen filter (#41) | ✅ Closed | 2026-08-06 | 2026-08-08 |

### Proposed Timeline

| Feature | Epic | Proposed Start | Proposed End | Duration |
|---------|------|----------------|--------------|----------|
| Add favourites/wishlist (#39) | Ordering Readiness | 2026-08-09 | 2026-08-11 | 3 days |
| Add order builder with shareable link (#40) | Ordering Readiness | 2026-08-12 | 2026-08-14 | 3 days |
| Add pizza trivia quiz (#42) | Gamification | 2026-08-15 | 2026-08-17 | 3 days |
| Add spin-the-wheel daily special (#43) | Gamification | 2026-08-18 | 2026-08-20 | 3 days |
| Add loyalty stamp card (#44) | Gamification | 2026-08-21 | 2026-08-23 | 3 days |
| Add pizza name generator (#45) | Gamification | 2026-08-24 | 2026-08-26 | 3 days |

**Proposed roadmap ends:** 2026-08-26

**Note:** Timeline estimates use 3-day durations based on historical average (mean delivery time across 14 tracked features is 2.6 days). This is rounded up conservatively.

---

## Methodology

- **Delivered features analysed:** 24 closed features with delivery data
- **Gaps identified:** All 6 "New" features lack formal proposal justification — this proposal fills that gap
- **Themes already covered (not duplicated):** UX (#30), Content & Communication (#32), Accessibility (#36), Visual Storytelling (#37), Offline/PWA (#38), Visual Content & Sharing (#63), Content Freshness (#62), Fix & Polish (#61)
- **Velocity data source:** Historical delivery dates from project board (mean 2.6 days/feature)
- **Quantitative data used:** allergen_filter_usage (22.8%), builder_page_view (92.5s), events_page_view (+40% W/W), menu_view_duration (65.2s), print_menu_click (342), social_link_click (2,840), avg_pages_per_session (4.2)
- **Qualitative data used:** FB-018 (kids want games), FB-046 (kids on builder), FB-051 (favourites request), FB-043/FB-052 (group ordering via print), FB-044 (weekly check-ins), FB-029 (PotW driving orders)
