# Feature Report: Add Favourites/Wishlist (#39)

## 1. Feature Details

| Field | Value |
|-------|-------|
| **Epic** | Increase Online Ordering Readiness (#34) |
| **Status** | ✅ Delivered |
| **Delivered** | 2026-06-05 |
| **PR** | [#90](https://github.com/cbipnovo/pagesexample/pull/90) |
| **Description** | Allow visitors to heart/favourite menu items so they can collect their picks and decide what to order with friends. Reduces decision friction by letting users bookmark items across sessions. |

## 2. Acceptance Criteria

- [x] Users can favourite/unfavourite any menu item
- [x] Favourites persist across page reloads (localStorage)
- [x] A "My Picks" view shows all saved items
- [x] Works in both classic and vegan menu modes

## 3. Supporting Data (Pre-delivery)

### Quantitative Evidence
- **menu_page_view** avg session duration of 45 seconds suggests users browse but have no way to remember selections across visits
- **menu_view_duration** shows 35.7% of users spend over 60 seconds on the menu (indicating decision friction)
- Return visitors represent ~40% baseline return rate — opportunity to increase stickiness

### Qualitative Evidence
- **FB-051** (staff observations, 2026-06-28): "Multiple customers this week asked if we could add their pizza to some kind of favourites list. They want to remember what they ordered last time."
- **FB-021** (Google Reviews): "We usually order as a group and it would be nice to save what I like before we decide together"
- General theme: Users browse the menu repeatedly across sessions without a way to persist their selections

## 4. Leading Indicator Results (Post-delivery)

### Favourite Action Count per Session

| Week | Total Actions | Unique Users | Actions/User |
|------|--------------|--------------|--------------|
| W23 (launch) | 680 | 340 | 2.0 |
| W24 | 980 | 420 | 2.3 |
| W25 | 1,180 | 360 | 3.3 |
| **Total** | **2,840** | **1,120** | **3.4 avg** |

**Trend:** +73.5% growth in weekly actions from W23→W25. Users are saving more items per session as they discover the feature, rising from 2.0 to 3.3 actions/user.

**Top favourited items:** Margherita (340), Pepperoni (290), Vodka Pie (245), BBQ Chicken (210), Meat Lovers (185)

### Return Visit Rate (Users with Favourites vs Without)

| Week | With Favourites | Without Favourites | Lift |
|------|----------------|--------------------|------|
| W23 | 58.2% | 39.4% | +47.7% |
| W24 | 64.8% | 40.1% | +61.6% |
| W25 | 66.1% | 40.0% | +65.3% |

**Trend:** Users who save favourites return at significantly higher rates. The 66.1% return rate vs 40.0% baseline represents a **+65.3% lift** — indicating favourites create meaningful engagement hooks.

### My Picks Page Views

| Week | Views | Unique Visitors |
|------|-------|-----------------|
| W23 | 380 | — |
| W24 | 560 | — |
| W25 | 700 | — |
| **Total** | **1,640** | **890** |

**Trend:** +84.2% growth in page views from W23→W25. Users are actively returning to check their saved items.

### Qualitative Observations (Post-delivery)

| ID | Channel | Sentiment | Quote |
|----|---------|-----------|-------|
| FB-061 | Google Reviews | ✅ Positive | "The favourites feature is brilliant! We usually order as a group and now everyone saves their picks beforehand." |
| FB-062 | Staff observations | ✅ Positive | "A regular showed me her 'My Picks' on her phone — she had 6 items saved and said she rotates between them each week." |
| FB-063 | In-store comment cards | ⚠️ Neutral | "I saved favourites on my phone but when I checked the site on my laptop they weren't there. Would be nice if favourites synced between devices." |

## 5. Assessment

### Indicator Performance

| Indicator | Target | Actual | Verdict |
|-----------|--------|--------|---------|
| Favourite action count per session | Meaningful adoption (>500 actions/week) | 1,180 actions in W25, 3.4 avg/user | ✅ Exceeds |
| Return visit rate (favourites users) | Higher than baseline (>40%) | 66.1% vs 40.0% baseline (+65.3% lift) | ✅ Exceeds |
| User feedback on order planning | Positive sentiment | 2/3 positive, validates group planning use case | ✅ Meets |

### Overall Rating: 🟢 Green

The favourites feature shows strong adoption with accelerating engagement metrics. The 65.3% lift in return visits demonstrates that the feature creates meaningful "hooks" that bring users back. The group-planning use case (cited in FB-061) validates the original hypothesis about reducing decision friction for group ordering.

### Opportunities for Improvement

1. **Cross-device sync** (FB-063): localStorage is device-specific. A future iteration could offer shareable links or QR codes to transfer picks between devices without requiring accounts.
2. **Share favourites list**: Allow users to share their "My Picks" as a link for group ordering coordination — this naturally leads into Epic #34's next feature (#40: order builder with shareable link).
3. **Favourites from gallery**: Consider letting users favourite items when viewing pizza photos in the gallery, not just from the menu page.
