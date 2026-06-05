# Feature Report: High-Contrast Mode (#48)

## Feature Details

| | |
|---|---|
| **Epic** | Improve Accessibility & Inclusivity (#36) |
| **Status** | ✅ Closed (Delivered to production) |
| **Delivered** | 2026-07-08 |
| **PR** | [#89](https://github.com/cbipnovo/pagesexample/pull/89) |
| **Description** | Add a high-contrast mode so users with low vision can read content more easily. Increases text/background contrast ratios to meet WCAG AAA (7:1), making the site usable for a broader range of visual abilities. |

### Acceptance Criteria

- [x] A toggle enables/disables high-contrast mode
- [x] All text meets WCAG AAA contrast ratio (7:1) in this mode
- [x] The toggle is accessible via keyboard and labelled for screen readers
- [x] Preference persists across sessions (localStorage)
- [x] Works alongside both classic and vegan colour schemes

---

## Supporting Data (Pre-delivery)

Evidence that justified building this feature:

### Quantitative
- **14% of visitors are 55+** (demographic data) — higher prevalence of visual impairment in this age group
- **Lighthouse accessibility score: 92** (post-keyboard-nav) — contrast issues remained as a flagged item

### Qualitative
- **FB-057** (2026-07-07, staff observations): *"Accessibility consultant mentioned the contrast of some text in vegan mode could be improved for low-vision users."*
- **FB-042** (referenced in issue): *"The vegan mode green text on light background is hard for me to read, especially in the menu"*

---

## Leading Indicator Results (Post-delivery)

Data collected **3 weeks after launch** (W27–W29, July 8–21, 2026):

### 1. High-Contrast Toggle Activation Count

| Metric | Value | Assessment |
|--------|-------|------------|
| Total toggles | 385 | — |
| Unique users who activated | 264 | — |
| **Activation rate** | **6.9%** of visitors | 🟢 Meaningful adoption for accessibility feature |
| Users who toggled back to normal | 137 (52%) | Expected — some try it and prefer default |
| Users who kept it on | 127 (48%) | 🟢 Strong retention for those who need it |

**Weekly trend:**
```
W27: ██████████████████████ 110
W28: ████████████████████████████ 138  (+25%)
W29: ███████████████████████████ 137   (stable)
```

**Interpretation:** Adoption is stable at ~137/week after initial spike. The 48% retention rate (users who keep it on) indicates genuine need — not just curiosity clicks. For an accessibility feature targeting ~14% of the audience, 6.9% overall activation is strong.

---

### 2. Session Duration (High-Contrast vs Normal)

| Cohort | Avg Session Duration | Delta |
|--------|---------------------|-------|
| With high-contrast | 178.4s | — |
| Without high-contrast | 148.2s | — |
| **Improvement** | — | **+20.4%** 🟢 |

**Interpretation:** Users who enable high-contrast spend significantly longer on the site. This suggests the feature removes a readability barrier that previously caused early exits. The 30-second difference represents meaningful additional engagement.

---

### 3. User Feedback on Readability Improvements (Qualitative)

| ID | Date | Channel | Sentiment | Quote |
|----|------|---------|-----------|-------|
| FB-058 | Jul 10 | Google Reviews | 🟢 Positive | *"I have macular degeneration and most websites are impossible to read. With the Ⓐ toggle everything is perfectly clear. Thank you for thinking of us."* |
| FB-059 | Jul 12 | Comment card | 🟢 Positive | *"My father-in-law (72) was able to read the menu on the website for the first time... Made his day."* |
| FB-060 | Jul 14 | Instagram | 🟡 Neutral | *"The high contrast mode is great for reading but the pizza builder looks a bit odd — all the coloured dots become hard to distinguish."* |

---

## Assessment

### Was the feature a success?

| Indicator | Target | Actual | Verdict |
|-----------|--------|--------|---------|
| Toggle activation count | Any meaningful adoption | 264 unique users (6.9%) | ✅ Strong for a11y feature |
| Session duration change | Positive delta | +20.4% for HC users | ✅ Significant |
| User readability feedback | Positive sentiment | 2 positive, 1 constructive | ✅ Net positive |
| Retention (kept on) | >30% | 48% | ✅ Genuine need |

### Overall: 🟢 Feature is delivering value

High-contrast mode has strong adoption among its target audience (low-vision and older users), measurably increases engagement time, and has generated deeply positive feedback from users who previously struggled to use the site. The 48% retention rate proves this isn't a novelty toggle — nearly half of users who try it keep it on.

### Opportunities for Improvement

Based on feedback:

1. **Exclude pizza builder preview from contrast overrides** — the visual builder relies on colour differentiation (FB-060)
2. **Add font size controls (#49)** — next accessibility feature, complements high-contrast for users who need both larger text and better contrast

---

*Report generated: 2026-07-22*
*Data sources: Pendo analytics (W27–W29), User feedback collection (FB-058 to FB-060)*
