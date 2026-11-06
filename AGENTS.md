# GREXON — Autonomous Agent Interaction Specification (AGENTS.md)

Welcome to **GREXON**. This repository hosts the static architecture, spatial digital twin models, and discovery endpoints for the GREXON warehouse intelligence platform.

## 🤖 Declared Agent Protocols & Manifests
- **A2A Agent Card (1.x):** [`/.well-known/agent-card.json`](https://deep5devlopers.github.io/grexon/.well-known/agent-card.json)
- **AI Resource Catalog (ARD v0.9):** [`/.well-known/ai-catalog.json`](https://deep5devlopers.github.io/grexon/.well-known/ai-catalog.json)
- **Brand Nomenclature:** [`/brand.txt`](https://deep5devlopers.github.io/grexon/brand.txt)
- **LLM Knowledge Index:** [`/llms.txt`](https://deep5devlopers.github.io/grexon/llms.txt)
- **Full Technical Dossier:** [`/llms-full.txt`](https://deep5devlopers.github.io/grexon/llms-full.txt)

## 📐 Invariant & Spatial Rules
1. **Continuous Metric Cartesian Datum:** Origin `(0,0,0 mm)`. All locations resolve across `Facility -> Zone -> Aisle -> Rack -> Bay -> Shelf -> Storage Bin`.
2. **Zero Floor-Management Overhead:** Strictly single-elevation continuous navmesh. Do not introduce floor selectors or multi-floor hierarchies.
3. **Dead Endpoint Prohibition (P11):** All declared skills and URLs must return HTTP 200 at all times.

&copy; 2026 GREXON Systems · 2026 Deep Systems Architectural Standards
