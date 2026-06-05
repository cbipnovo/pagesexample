# Prioritization Rules

When determining the next issue to work on:

1. **Epic priority** is determined by the order in the GitHub Project table view — the epic listed highest (closest to the top) is the highest priority
2. **Feature priority within an epic** is determined by the sub-issue order on the epic itself (use the `subIssues` field via GraphQL) — the first open sub-issue is the highest priority
3. **Never use** the project board position of individual features or issue creation order as a proxy for priority — always check the epic's sub-issue ordering
4. **Skip closed/completed** sub-issues and pick the first open one in the list

Summary: Project table → highest epic → epic's sub-issue list → first open item = next issue.

# Development Workflow

When implementing any changes:

1. **Create a GitHub issue** with a clear title and description (include clarifications if gathered from the user)
2. **Create a development branch** named after the issue (e.g., `issue-12-feature-name`)
3. **Implement the changes** on that branch
4. **Create a PR** that links to the issue using `Closes #X` in the body
5. **Never commit directly to main** — all changes go through the issue → branch → PR flow
6. **When a PR is merged/closed**, update the linked issue's status on the GitHub Project board to "Closed" — the project board does not auto-sync with GitHub issue state, so this must be done manually to avoid stale/conflicting statuses

# Feature Delivery Lifecycle

When delivering a feature, complete ALL of the following steps:

## 1. Implement
- Create branch from main (`issue-{number}-{short-name}`)
- Implement the feature (code changes)
- Add a feature toggle entry in the registry (key, issue number, DA/EN name and description)
- Commit, push, create PR with `Closes #{number}`
- Merge the PR
- Update the project board status to "Closed"

## 2. Generate Mock Data
After merging, generate post-delivery analytics data:

- **Pendo data** (`data/quantitative/pendo-data.json`): Add event(s) based on the feature's **leading indicators**. Include weekly trends (3 weeks post-launch), totals, breakdowns, and comparisons where relevant.
- **Feedback data** (`data/qualitative/user-feedback.json`): Add 3 new entries (sequential FB-xxx IDs) covering reactions to the feature — aim for 2 positive + 1 constructive/neutral. Use realistic channels (Google Reviews, in-store comment cards, Instagram DMs, staff observations).
- Validate both JSON files after editing.
- Commit directly to main.

## 3. Create Feature Delivery Report
Generate a feature delivery report at `claude_reports/delivery/feature-{number}-{short-name}.md` with this structure:

1. **Feature Details** — table with Epic, Status, Delivered date, PR link, Description
2. **Acceptance Criteria** — all items checked off
3. **Supporting Data (Pre-delivery)** — the quantitative + qualitative evidence that justified building it
4. **Leading Indicator Results (Post-delivery)** — 3 weeks of metrics from the mock data, with tables, trends, and interpretation
5. **Assessment** — table comparing indicators to targets with verdicts (✅/❌), overall green/yellow/red rating, and opportunities for improvement based on feedback

When a leading indicator is explicitly "No quantitative leading indicator available", note this in the report and explain the qualitative-only measurement approach.

This report is created once, at delivery time, using the mock data generated in step 2. It captures the feature's initial performance snapshot.

# Product Reports

There are two on-demand report types that product management can request at any time. These are distinct from the **Feature Delivery Report** above (which is generated automatically as part of the delivery lifecycle).

## When asked for a Proposal

Generate a proposal at `claude_reports/proposals/pm-proposal-{n}.md` (increment `n` from the highest existing proposal number).

### Steps:
1. Read current epics, delivered features, and proposed features from the GitHub Project board
2. Read `data/quantitative/pendo-data.json` for analytics trends
3. Read `data/qualitative/user-feedback.json` for user sentiment and unmet needs
4. Identify the optimal product direction given the current state
5. Generate the proposal document

### Structure:
1. **Current state summary** — delivered count, active epics, key metric movements
2. **Strategic direction** — why this direction is right, grounded in data trends
3. **Proposed epics/features** — each with description, acceptance criteria, leading indicators, and data support (minimum one quantitative + one qualitative cite per feature)
4. **Roadmap impact** — how new work fits alongside existing commitments

### On acceptance:
- Create approved features as GitHub issues linked to their epics as sub-issues
- Add approved features to the project board in **Proposed** state
- Create any new epics on the project board
- Re-order project board prioritisation if the proposal specifies a new direction

## When asked for a Delivery Report

A delivery report is an on-demand validation check that uses *current* product data to assess whether a delivered feature is still performing against its proposed value. This is different from the Feature Delivery Report (created once at delivery time) — a delivery report can be requested at any point after delivery to get a fresh assessment.

Generate or update a report at `claude_reports/delivery/delivery-report-{number}-{short-name}.md`.

### Steps:
1. Identify which delivered feature(s) to assess (ask if ambiguous)
2. Read the feature's leading indicators from the GitHub issue body
3. Read `data/quantitative/pendo-data.json` for current metrics
4. Read `data/qualitative/user-feedback.json` for current user reactions
5. Generate the delivery report with a fresh assessment based on current data

### Structure:
1. **Feature Details** — table with Epic, Status, Delivered date, PR link, Description
2. **Leading Indicators** — the indicators defined for this feature
3. **Current Performance** — latest metrics from analytics data with tables, trends, and interpretation
4. **User Sentiment** — relevant feedback entries referencing this feature
5. **Assessment** — indicators vs targets with verdicts (✅/❌), overall rating (🟢/🟡/🔴), and recommended actions

### Rating guide:
- 🟢 **Green** — feature delivering expected or above-expected value — no action needed
- 🟡 **Yellow** — partial delivery, some indicators below target — may trigger a follow-up proposal
- 🔴 **Red** — underperforming against leading indicators — warrants rework or removal
