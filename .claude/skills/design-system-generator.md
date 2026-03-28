---
name: design-system-generator
description: Generate complete design systems with tokens, component specs, and CSS variables. Three-layer token architecture (primitive > semantic > component). Use when establishing or updating design systems.
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/.claude/skills/design-system
---

# Design System Generator

## Token Architecture (Three Layers)

1. **Primitive** - Raw values (colors, sizes, fonts)
2. **Semantic** - Purpose-driven aliases (--color-primary, --spacing-lg)
3. **Component** - Component-specific tokens (--button-bg, --card-radius)

## Implementation

- Generate CSS custom properties as single source of truth
- Use `var(--token-name)` exclusively -- NO hardcoded hex values
- Validate token usage across codebase
- Configure Tailwind themes from tokens

## Critical Requirements

All UI components must:
- Import design tokens CSS as the single source of truth
- Use CSS variables exclusively
- Avoid hardcoded hex values or typography names
- Maintain consistent token naming conventions

## Workflow

1. Define primitive tokens (raw color/size values)
2. Create semantic aliases (purpose-driven names)
3. Generate component-specific tokens
4. Export as CSS custom properties
5. Validate usage across components
