---
name: frontend-design
description: Guides creation of distinctive, production-grade frontend interfaces that prioritize authentic design over generic aesthetics. Use when building or redesigning UI components, pages, or layouts.
source: https://github.com/anthropics/skills/tree/main/skills/frontend-design
---

# Frontend Design Skill

## Design Philosophy

Before coding, establish a clear aesthetic direction by considering:
- **Purpose**: What is the interface trying to achieve?
- **Tone**: What emotion should it evoke?
- **Constraints**: What are the technical/brand limitations?
- **Memorability**: What makes this interface distinctive?

Bold maximalism and refined minimalism both work -- the key is **intentionality, not intensity**.

## Essential Design Elements

### Typography
- Choose fonts that are beautiful, unique, and interesting
- **Avoid generic fonts** like Arial, Inter, and system defaults
- Opt for distinctive choices that elevate the frontend's aesthetics
- Pair fonts with intention (heading vs body contrast)

### Color & Theme
- Commit to a cohesive palette using CSS variables
- Use dominant colors with sharp accents
- Avoid cliched color schemes (especially purple gradients)
- Ensure proper contrast ratios for accessibility

### Motion & Animation
- Focus on high-impact moments rather than scattered micro-interactions
- Orchestrated page loads with staggered reveals
- Strategic animations that guide user attention
- Smooth transitions between states

### Spatial Composition
- Employ asymmetry, overlap, and grid-breaking elements where appropriate
- Use generous negative space intentionally
- Unexpected layouts that serve the content
- Balance visual weight across the viewport

### Visual Details
- Atmospheric backgrounds with textures, gradients, and contextual effects
- Subtle shadows and depth cues
- Contextual visual elements that reinforce the design language
- Refined micro-details that reward close inspection

## What to Avoid (Anti-patterns)

These are hallmarks of **generic AI-generated aesthetics** -- avoid them:
- Overused font families (Inter, system-ui for everything)
- Cliched purple/blue gradient color schemes
- Predictable, symmetrical layouts with no visual hierarchy
- Cookie-cutter design that lacks context-specific character
- Excessive centered layouts with uniform rounded corners
- Decorative elements that add no meaning
- "Safe" design choices that blend into the background

## Implementation Approach

Match code complexity to the vision:
- **Maximalist designs**: Warrant elaborate implementations with extensive effects, layered animations, and rich interactions
- **Minimalist designs**: Require precision and restraint -- perfect spacing, typography, and subtle details
- Always write clean, maintainable CSS/code regardless of visual complexity
- Use CSS custom properties for theming consistency
