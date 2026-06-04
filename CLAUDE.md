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

## 3. Create Feature Report
Generate a report at `claude_reports/feature-{number}-{short-name}.md` with this structure:

1. **Feature Details** — table with Epic, Status, Delivered date, PR link, Description
2. **Acceptance Criteria** — all items checked off
3. **Supporting Data (Pre-delivery)** — the quantitative + qualitative evidence that justified building it
4. **Leading Indicator Results (Post-delivery)** — 3 weeks of metrics from the mock data, with tables, trends, and interpretation
5. **Assessment** — table comparing indicators to targets with verdicts (✅/❌), overall green/yellow/red rating, and opportunities for improvement based on feedback

When a leading indicator is explicitly "No quantitative leading indicator available", note this in the report and explain the qualitative-only measurement approach.
