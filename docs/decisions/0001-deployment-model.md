# ADR 0001: Hybrid deployment

- Status: Accepted
- Decision: Cydrone will be open-source/self-hostable in architecture, with an optional official centrally operated instance.
- Rationale: Portability, community participation, and reduced dependence on one hosting provider.
- Consequence: Product logic must not assume one global database, one hosting provider, or a single operator. Multi-tenant boundaries must be explicit.
