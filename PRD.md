# Jade Compass Landing Page - Product Requirements Document

## Project Overview

A retro 2D pixel-art adventure franchise landing page built with Next.js 15, TypeScript, and Tailwind CSS v4. Optimized for modern web standards with React Server Components and enhanced performance.

## Technical Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Styling**: Tailwind CSS v4 with Lightning CSS
- **Language**: TypeScript 5.3+
- **Bundler**: Turbopack (development) / Webpack (production)
- **Animations**: Framer Motion 11+ with React Server Components support
- **Icons**: Custom pixel art icons with SVG optimization
- **Fonts**: Next.js Font Optimization with local fonts
- **Images**: Next.js Image Component with AVIF/WebP support
- **State Management**: React 19 Server Components + Client Components
- **Build Tools**: SWC compiler, ESLint 9, Prettier 3

## Design System

- **Titles**: Press Start 2P (pixel arcade) with font-display: swap
- **Subtitles**: Cinzel (fantasy serif) with variable font support
- **Body**: Inter (clean sans-serif) with OpenType features

### Layout Structure

```
Header (fixed)
├── Logo with floating animation
├── Navigation (minimal)

Hero Section
├── Main compass logo (center, animated)
├── Floating particles/stars

Game Selection
├── Game cards in pixel frames
├── Relic Expedition (active)
|-- Astral Codex (developing)
├── Coming Soon slots (3)

About Section
├── RPG dialogue window
├── Pixel icons (map, chest, lantern)

Footer (minimal)
```

## Component Architecture (React 19 + Server Components)

### Server Components (RSC)

- `Header` - Static navigation with streaming
- `HeroSection` - Server-rendered hero with client hydration
- `AboutSection` - Static content with pixel styling
- `Footer` - Server-rendered minimal footer

### Client Components (Interactive)

- `GameCard` - Interactive cards with hover effects
- `FloatingAnimation` - Animation wrapper with `'use client'`
- `PixelFrame` - Reusable border with CSS animations
- `ParticleSystem` - Canvas-based particle effects
- `ScrollProgress` - Reading progress indicator

### Shared Components

- `PixelButton` - Reusable button with retro styling
- `PixelIcon` - SVG icon system with variants
- `LoadingSpinner` - Pixel-art loading states

### Animation Specifications

- **Logo**: Continuous float + tilt (2s cycle, 5px amplitude)
- **Cards**: Hover scale (1.05x) with glow effect
- **Particles**: Slow drift animation
- **Text**: Subtle breathing effect

## Technical Requirements (Next.js 15 Standards)

### Modern Web Standards

- **Responsive Design**: Container queries + mobile-first approach
- **TypeScript**: Strict mode with satisfies operator
- **Component Size**: <200 lines per component (improved modularity)
- **Bundle Splitting**: Automatic with Turbopack
- **Image Optimization**: AVIF → WebP → JPEG fallback
- **Font Loading**: Preload critical fonts with `font-display: swap`

### SEO & Performance

- **Metadata API**: Next.js 15 generateMetadata with OpenGraph
- **Structured Data**: JSON-LD for gaming/entertainment
- **Sitemap**: Dynamic generation with app router
- **Analytics**: Web Vitals tracking with Vercel Analytics
- **Accessibility**: WCAG 2.1 AA compliance

### Security & Best Practices

- **Content Security Policy**: Strict CSP headers
- **HTTPS**: Force HTTPS with security headers
- **Sanitization**: XSS protection for dynamic content
- **Environment**: Proper env variable validation

## Performance Targets (Core Web Vitals)

### Lighthouse Scores (Target: 95+)

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals

- **Largest Contentful Paint (LCP)**: <1.2s
- **First Input Delay (FID)**: <100ms
- **Interaction to Next Paint (INP)**: <200ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **First Contentful Paint (FCP)**: <1.0s

### Bundle & Resource Optimization

- **Initial Bundle**: <300KB (compressed)
- **Total JavaScript**: <500KB
- **Critical CSS**: <14KB (inline)
- **Images**: AVIF format, responsive loading
- **Fonts**: <50KB total with preload
