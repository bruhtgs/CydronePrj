# Security and privacy baseline

This document is a set of requirements, not a claim that the current scaffold already implements them.

- Deny privileged actions unless an explicit policy grants them.
- Never give an LLM unrestricted database credentials or unrestricted Discord client access.
- Validate permissions at the point of action, not only when a command is initially received.
- Scope tenant data by immutable Discord guild and user IDs, never display names.
- Store secrets only in environment variables or a deployment secret manager.
- Do not log bot tokens, authorization headers, message contents by default, or private memory contents.
- Member memory must be inspectable, correctable, deletable, and disableable by the member.
- Do not infer or retain sensitive personal traits from casual conversation.
- Server administrators must not be able to inspect private member memory.
- Proactive participation must support server-level controls, member opt-out, quiet hours, cooldowns, and a global pause.
- Keep an audit trail for consequential administrative actions.
- Apply rate limits and validate all external inputs.
