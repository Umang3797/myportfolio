---
name: web-artifacts-builder
description: Suite of tools for creating elaborate, multi-component HTML artifacts using React, Tailwind CSS, shadcn/ui. Use for complex UI components requiring state management or rich interactions.
source: https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder
---

# Web Artifacts Builder

Build powerful frontend artifacts with: React 18 + TypeScript + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

IMPORTANT: To avoid "AI slop", avoid:
- Excessive centered layouts
- Purple gradients
- Uniform rounded corners
- Inter font everywhere

## Stack
- React 18 + TypeScript
- Vite (dev server)
- Tailwind CSS 3.4.1 with shadcn/ui theming
- Path aliases (`@/`) configured
- 40+ shadcn/ui components pre-installed
- All Radix UI dependencies included

## Workflow

1. **Initialize** project with React + TypeScript + Tailwind + shadcn/ui
2. **Develop** the artifact by editing generated code
3. **Bundle** all code into a single HTML file if needed
4. **Test** the artifact (optional, after presenting)

## Component Reference
- shadcn/ui components: https://ui.shadcn.com/docs/components
