# PM Proposal — 2026-05-29

## Current State Summary

- **Delivered features:** 0 (none closed with `feature` label yet)
- **In-progress/planned features:** 28
- **Active epics:** 8
- **Current roadmap ends:** 2026-06-24

---

## Proposed Epics & Features

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Strengthen Local SEO & Social Discoverability**

**Goal:** The site surfaces effectively in local search results, and shared links present Cool Pizza attractively on social media and messaging apps.

**What success looks like:** Visitors find Cool Pizza through organic search without needing a direct link, and shared URLs generate rich preview cards that entice clicks.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `visitor_summary.top_referrers` — Google is the #1 traffic source (2,100 visitors, 41% of total), yet users report inability to find the site via search
- Qualitative: FB-026 (in-store comment card) — "when I looked up 'Cool Pizza Copenhagen' nothing came up on Google. Only found it through the direct link she sent"; FB-017 (Google Reviews) — "When I share the link to friends on WhatsApp it just shows a plain URL with no preview image or description. Looks dodgy"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add structured data (JSON-LD)**

| | |
|---|---|
| **Epic** | Strengthen Local SEO & Social Discoverability |
| **Description** | Embed JSON-LD structured data (Schema.org Restaurant type) in the page, providing search engines with business name, address, hours, menu link, and geo-coordinates in a machine-readable format. |
| **Acceptance criteria** | <ul><li>A valid JSON-LD script tag is present in the page</li><li>Includes Schema.org Restaurant type with name, address, telephone, openingHours, geo, and menu URL</li><li>Passes Google Rich Results Test validation</li><li>Updates menu URL based on selected mode (classic/vegan)</li></ul> |
| **Leading indicators** | Google Search Console rich result impressions (quantitative, Pendo). Click-through rate from search results (quantitative, Pendo). Appearance in local search for "pizza Copenhagen" (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `visitor_summary.top_referrers` — Google drives 2,100 visitors but the site has zero structured data to help with local SEO ranking
- Qualitative: FB-026 — user searched "Cool Pizza Copenhagen" and found nothing; structured data directly addresses search engine discoverability

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add Open Graph & Twitter Card meta tags**

| | |
|---|---|
| **Epic** | Strengthen Local SEO & Social Discoverability |
| **Description** | Add Open Graph and Twitter Card meta tags so that shared links display a rich preview card with restaurant name, tagline, and an appetizing image on social media and messaging apps. |
| **Acceptance criteria** | <ul><li>og:title, og:description, og:image, og:url meta tags are present</li><li>twitter:card, twitter:title, twitter:description, twitter:image meta tags are present</li><li>Shared links on WhatsApp/Facebook/Twitter show a rich preview card</li><li>Preview image is optimised for social sharing (1200x630)</li></ul> |
| **Leading indicators** | Social media referral traffic (quantitative, Pendo). Link share click-through rate (quantitative, Pendo). User feedback on link appearance (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `visitor_summary.top_referrers` — Instagram (820) and Facebook (430) already drive traffic; rich previews would increase conversion from social shares
- Qualitative: FB-017 (Google Reviews) — "When I share the link to friends on WhatsApp it just shows a plain URL with no preview image or description. Looks dodgy compared to other restaurants"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add sitemap.xml and robots.txt**

| | |
|---|---|
| **Epic** | Strengthen Local SEO & Social Discoverability |
| **Description** | Provide a sitemap.xml listing all site pages and a robots.txt allowing full crawling, ensuring search engines can efficiently discover and index all content. |
| **Acceptance criteria** | <ul><li>A sitemap.xml file exists at the site root with URLs for all pages</li><li>A robots.txt file exists allowing all crawlers and pointing to the sitemap</li><li>Sitemap validates against the Sitemaps protocol</li><li>Both files are committed to the repo and served by GitHub Pages</li></ul> |
| **Leading indicators** | Pages indexed in Google Search Console (quantitative, Pendo). Time to first indexing after deployment (quantitative, Pendo). Crawl error rate (quantitative, Pendo). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: The SPA has 5 distinct pages (`page_view` event) but no sitemap to tell crawlers about them — contributing to poor search visibility
- Qualitative: FB-026 — "nothing came up on Google" indicates crawling/indexing gaps that a sitemap directly addresses

</div>

---

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Reduce First-Visit Friction**

**Goal:** New visitors understand what Cool Pizza offers and take their desired action (view menu, find location, choose mode) with minimal hesitation or confusion.

**What success looks like:** Fewer visitors bounce from the choose page, more visitors reach the menu within their first session, and first-time users report the site is intuitive.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `choose_page_bounce` — 30.7% of visitors (4,360 users) leave without selecting a mode; `menu_view_duration` — 12.2% of menu visitors leave within 15 seconds (1,200 users)
- Qualitative: FB-002 (in-store comment card) — "The website looks nice but I couldn't figure out how to actually order online. Ended up calling instead"; FB-008 (staff observations) — "tourists couldn't navigate the site on their phones… the nav was confusing"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add choose page quick-preview**

| | |
|---|---|
| **Epic** | Reduce First-Visit Friction |
| **Description** | Show a short preview (2-3 top pizzas) under each mode card on the choose page, so visitors can see what each mode offers before committing. Reduces the decision anxiety that drives 30.7% bounce rate. |
| **Acceptance criteria** | <ul><li>Each mode card shows 2-3 representative menu items below the description</li><li>Items include name and one-line description</li><li>Layout remains clean and doesn't overwhelm (progressive disclosure)</li><li>Responsive on mobile — previews stack below cards</li></ul> |
| **Leading indicators** | Choose page bounce rate (quantitative, Pendo). Time-to-selection after landing (quantitative, Pendo). User confusion reports (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `choose_page_bounce` — 30.7% bounce rate (4,360 users lost); trend improving slowly (38.2% → 28.5% over 8 weeks) but still significant
- Qualitative: FB-002 — user confusion about what to do; the choose page offers no preview of what's behind each option

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add onboarding tooltip for first-time visitors**

| | |
|---|---|
| **Epic** | Reduce First-Visit Friction |
| **Description** | Show a brief, dismissible tooltip on first visit explaining the classic/vegan choice and what "Switch Style" does. Stored in localStorage so it only appears once. Addresses confusion reported by new visitors. |
| **Acceptance criteria** | <ul><li>A tooltip/overlay appears on first visit explaining the dual-mode concept</li><li>Tooltip is dismissible and never shows again (localStorage)</li><li>Available in both DA and EN</li><li>Does not block interaction — user can click past it immediately</li></ul> |
| **Leading indicators** | Choose page bounce rate for first-time visitors (quantitative, Pendo). Mode selection rate on first session (quantitative, Pendo). Confusion reports from tourists (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `choose_page_bounce` — 14,200 landings with 4,360 bounces; `navigation_click` "switch_style" has 5,900 clicks suggesting users explore modes but may not understand the mechanic initially
- Qualitative: FB-008 (staff observations) — tourists found the nav "confusing"; FB-002 — user "couldn't figure out" how to proceed

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add quick-action buttons on home page**

| | |
|---|---|
| **Epic** | Reduce First-Visit Friction |
| **Description** | Add prominent "Call Now" (tel: link) and "Get Directions" (maps link) buttons on the home page for mobile users who want to take immediate action. Reduces the gap between browsing and visiting. |
| **Acceptance criteria** | <ul><li>"Call Now" button uses tel: link to open the phone dialler</li><li>"Get Directions" button opens Google Maps/Apple Maps with the restaurant address</li><li>Buttons are prominent on mobile, subtle on desktop</li><li>Buttons appear in the Hours & Location section</li></ul> |
| **Leading indicators** | Button click-through rate (quantitative, Pendo). Phone call volume correlation (qualitative, observations). "How do I get there" enquiry reduction (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `visitor_summary.device_breakdown` — 50% of visitors are on mobile (2,550/5,100); `navigation_click.device_split` — 12,200 mobile nav clicks showing high mobile engagement but no direct action paths
- Qualitative: FB-002 — "Ended up calling instead" (users want quick actions); FB-023 — "Do you deliver? I couldn't find any info" (users seek immediate actionable info)

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add smart default mode based on return visits**

| | |
|---|---|
| **Epic** | Reduce First-Visit Friction |
| **Description** | For returning visitors who previously selected a mode, skip the choose page entirely and go straight to their last-used mode's home page. Removes an unnecessary step for 69.3% of visitors who already know what they want. |
| **Acceptance criteria** | <ul><li>Returning visitors with a mode in localStorage skip the choose page</li><li>A "Switch Style" option remains accessible in the nav</li><li>First-time visitors still see the choose page</li><li>If localStorage is cleared, the choose page returns</li></ul> |
| **Leading indicators** | Return visitor session start time (quantitative, Pendo). Pages-per-session for returning visitors (quantitative, Pendo). Choose page view count reduction (quantitative, Pendo). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `mode_selection` — 9,840 selections made vs. 14,200 choose page landings means ~69% of visitors do proceed; `choose_page_bounce` improving trend (38.2%→28.5%) suggests returning visitors adapt but still pass through an unnecessary gate
- Qualitative: FB-012 (staff observations) — regular customer Marco "checks the site every week" — these power users gain nothing from the choose page on repeat visits

</div>

---

<div style="background-color: #fff3e0; border-left: 4px solid #f57c00; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #3e2723;">

**Epic: Serve the International Audience**

**Goal:** Non-Danish-speaking visitors (tourists, expats, international food enthusiasts) feel fully served by the site, with content and UX tailored to their context.

**What success looks like:** International visitors engage as deeply as local visitors, language-related confusion decreases, and the site becomes a useful tool for tourists planning meals in Copenhagen.

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `language_toggle` — 3,842 toggles by 1,620 unique users (31.7% of all visitors); 75% of switches are DA→EN; weekly trend growing steadily from 380 to 543 toggles (+43% over 8 weeks)
- Qualitative: FB-006 (in-store comment card) — "My Danish isn't great so I really appreciate the English option"; FB-008 (staff observations) — "Group of tourists at table 7 couldn't navigate the site on their phones"

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add automatic language detection**

| | |
|---|---|
| **Epic** | Serve the International Audience |
| **Description** | Detect the visitor's browser language on first visit and default to English if their preferred language is not Danish. Eliminates the need for international visitors to manually find and click the language toggle. |
| **Acceptance criteria** | <ul><li>Browser's navigator.language is checked on first visit</li><li>If language is not 'da' or 'da-DK', default to English</li><li>User can still manually switch languages</li><li>Preference is stored in localStorage and takes priority on subsequent visits</li></ul> |
| **Leading indicators** | Language toggle usage rate (quantitative, Pendo — should decrease). Time-to-first-interaction for non-Danish visitors (quantitative, Pendo). International visitor satisfaction (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `language_toggle` — 2,890 out of 3,842 toggles (75%) are DA→EN, meaning most non-Danish users must manually switch every first visit; 1,620 unique users need this workaround
- Qualitative: FB-006 — "My Danish isn't great so I really appreciate the English option" (appreciates it exists, but had to discover it manually)

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add tourist quick-info banner**

| | |
|---|---|
| **Epic** | Serve the International Audience |
| **Description** | Show a compact, dismissible banner for English-language visitors with key tourist info: location (near Central Station), open hours, and payment methods (card/MobilePay). Answers the top questions tourists have without navigating away from the current page. |
| **Acceptance criteria** | <ul><li>Banner appears for visitors browsing in English (first 2 visits)</li><li>Shows: walking distance from station, today's hours, accepted payment</li><li>Dismissible and doesn't reappear once closed (localStorage)</li><li>Compact design — doesn't push content significantly</li></ul> |
| **Leading indicators** | Find Us page visits from English-language users (quantitative, Pendo). Tourist-related questions to staff (qualitative, observations). Banner dismiss rate (quantitative, Pendo). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `page_view` — "findus" page gets 4,560 views (2,780 unique) suggesting many visitors need location info; `map_interaction` — 5,230 map interactions from 2,410 users confirms visitors actively seek directions
- Qualitative: FB-008 — tourists struggled with the site; FB-022 — "5 mins from Central Station was spot on" (this specific info is what tourists value most)

</div>

<div style="background-color: #f3e5f5; border-left: 4px solid #7b1fa2; padding: 1em; margin-bottom: 1em; border-radius: 4px; color: #311b92;">

**Feature: Add multi-currency price display**

| | |
|---|---|
| **Epic** | Serve the International Audience |
| **Description** | Allow English-language visitors to see approximate menu prices in EUR alongside DKK, helping international visitors who are unfamiliar with Danish kroner gauge value. Uses a static exchange rate updated in a config file. |
| **Acceptance criteria** | <ul><li>Menu prices show EUR equivalent when browsing in English</li><li>Exchange rate is stored in a JSON config file (easy to update)</li><li>A small note indicates "approximate conversion"</li><li>Danish-language visitors continue to see DKK only</li></ul> |
| **Leading indicators** | Menu page time-on-page for English visitors (quantitative, Pendo). Menu bounce rate by language (quantitative, Pendo). Tourist feedback on pricing clarity (qualitative, observations). |

</div>

<div style="background-color: #e8f5e9; border-left: 4px solid #388e3c; padding: 0.75em 1em; margin-top: -0.5em; margin-bottom: 1.5em; border-radius: 4px; color: #1b5e20; font-size: 0.9em;">

📊 **Data support:**
- Quantitative: `menu_view_duration` — 12.2% of visitors leave menu within 15s (potential confusion); `language_toggle` — 31.7% of visitors switch to English (international audience seeing DKK prices without context)
- Qualitative: FB-008 — tourists struggled generally; combined with the high English-toggle rate, price unfamiliarity is a likely friction point for the 1,620+ international users

</div>

---

## Roadmap

### Current Timeline

| Feature | Status | Start | End |
|---------|--------|-------|-----|
| Add photo gallery of pizzas | Planned | 2026-05-28 | 2026-05-30 |
| Add customer testimonials section | Planned | 2026-05-29 | 2026-06-01 |
| Add social media links and Instagram feed | Planned | 2026-06-01 | 2026-06-03 |
| Add Pizza of the Week highlight | Planned | 2026-06-04 | 2026-06-06 |
| Add contact form | Planned | 2026-06-05 | 2026-06-08 |
| Add print-friendly menu | Planned | 2026-06-08 | 2026-06-10 |
| Add event calendar | Planned | 2026-06-11 | 2026-06-14 |
| Add mobile hamburger menu | Planned | 2026-06-14 | 2026-06-17 |
| Add dark mode toggle | Planned | 2026-06-18 | 2026-06-20 |
| Add interactive pizza builder preview | Planned | 2026-06-19 | 2026-06-24 |

**Current roadmap ends: 2026-06-24**

### Proposed Timeline

| Feature | Epic | Proposed Start | Proposed End | Duration |
|---------|------|----------------|--------------|----------|
| Add structured data (JSON-LD) | Strengthen Local SEO & Social Discoverability | 2026-06-25 | 2026-06-27 | 3 days |
| Add Open Graph & Twitter Card meta tags | Strengthen Local SEO & Social Discoverability | 2026-06-28 | 2026-06-30 | 3 days |
| Add sitemap.xml and robots.txt | Strengthen Local SEO & Social Discoverability | 2026-07-01 | 2026-07-03 | 3 days |
| Add choose page quick-preview | Reduce First-Visit Friction | 2026-07-04 | 2026-07-06 | 3 days |
| Add onboarding tooltip for first-time visitors | Reduce First-Visit Friction | 2026-07-07 | 2026-07-09 | 3 days |
| Add quick-action buttons on home page | Reduce First-Visit Friction | 2026-07-10 | 2026-07-12 | 3 days |
| Add smart default mode based on return visits | Reduce First-Visit Friction | 2026-07-13 | 2026-07-15 | 3 days |
| Add automatic language detection | Serve the International Audience | 2026-07-16 | 2026-07-18 | 3 days |
| Add tourist quick-info banner | Serve the International Audience | 2026-07-19 | 2026-07-21 | 3 days |
| Add multi-currency price display | Serve the International Audience | 2026-07-22 | 2026-07-24 | 3 days |

**Proposed new work ends: 2026-07-24**

**Note:** Timeline estimates use a default 3-day duration per feature. No historical delivery velocity data is available yet (0 features closed). Estimates will be refined as features are delivered and actual cycle times become measurable.

---

## Methodology

- **Delivered features analysed:** None closed with `feature` label (site features delivered as issues #2, #4, #5, #8, #10, #12, #14, #16, #18 without the label)
- **Gaps identified:** SEO/discoverability (no structured data, no sitemap, no OG tags), first-visit conversion (30.7% choose page bounce), international audience needs (31.7% non-Danish users underserved)
- **Themes avoided (already covered):** User Experience, Community & Trust, Content & Communication, Online Ordering Readiness, Gamification, Accessibility & Inclusivity, Visual Storytelling, Offline & PWA
- **Velocity data source:** Default placeholder (3 days/feature) — no closed feature issues to calculate historical velocity
- **Quantitative data used:** choose_page_bounce (30.7%), language_toggle (3,842 toggles, 75% DA→EN, +43% growth), visitor_summary (50% mobile, Google #1 referrer at 2,100), menu_view_duration (12.2% leave <15s), navigation_click (5,900 switch_style clicks), map_interaction (5,230 interactions)
- **Qualitative data used:** FB-002 (can't figure out actions), FB-006 (appreciates English), FB-008 (tourist nav confusion), FB-012 (repeat visitor pattern), FB-017 (bad social preview), FB-022 (tourist values station proximity), FB-023 (delivery info gap), FB-026 (can't find on Google)
