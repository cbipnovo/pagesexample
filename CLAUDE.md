# Development Workflow

When implementing any changes:

1. **Create a GitHub issue** with a clear title and description (include clarifications if gathered from the user)
2. **Create a development branch** named after the issue (e.g., `issue-12-feature-name`)
3. **Implement the changes** on that branch
4. **Create a PR** that links to the issue using `Closes #X` in the body
5. **Never commit directly to main** — all changes go through the issue → branch → PR flow
