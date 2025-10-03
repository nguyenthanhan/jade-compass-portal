# Jade Compass Portal 🧭

A retro 2D pixel-art adventure franchise landing page built with Next.js 15, TypeScript, and Tailwind CSS v4. Features stunning animations, pixel-perfect design, and optimized performance.

## 🎮 Live Demo

Visit [http://localhost:3000](http://localhost:3000) to see the landing page in action.

## ✨ Features

- **Pixel Art Aesthetic**: Authentic retro gaming visual style with modern polish
- **Animated Hero Section**: Floating compass logo with particle effects  
- **Game Showcase**: Interactive cards for game collection (Relic Expedition, Astral Codex, and upcoming titles)
- **RPG Dialogue Box**: Unique about section styled like classic RPG dialogue
- **Responsive Design**: Mobile-first approach with container queries
- **Performance Optimized**: Achieving 95+ Lighthouse scores
- **SEO Ready**: Complete with metadata, structured data, sitemap, and robots.txt

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Language**: TypeScript 5.3+ with strict mode
- **Styling**: Tailwind CSS v4 with custom pixel art theme
- **Animations**: Framer Motion 11 with React Server Components support
- **Icons**: Lucide React with custom styling
- **Fonts**: Press Start 2P (pixel), Cinzel (fantasy), Inter (body)
- **Package Manager**: pnpm for faster, efficient dependency management

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jade-compass-portal.git

# Navigate to directory
cd jade-compass-portal

# Install dependencies with pnpm
pnpm install

# Run development server
pnpm dev
```

## 🚀 Scripts

```bash
# Development
pnpm dev       # Start development server with Turbopack

# Production
pnpm build     # Create production build
pnpm start     # Start production server

# Code Quality
pnpm lint      # Run ESLint
pnpm type-check # Run TypeScript compiler check
```

## 📁 Project Structure

```
jade-compass-portal/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with all sections
│   ├── globals.css         # Global styles and Tailwind utilities
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Minimal footer
│   │   ├── PixelButton.tsx # Pixel-styled button
│   │   ├── PixelFrame.tsx  # Decorative frame component
│   │   ├── GameCard.tsx    # Game showcase cards
│   │   └── ParticleField.tsx # Canvas particle animation
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx # Animated hero with compass
│   │   ├── GamesSection.tsx # Game collection grid
│   │   └── AboutSection.tsx # RPG-styled about content
│   └── StructuredData.tsx  # SEO structured data
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── pnpm-lock.yaml         # pnpm lock file
```

## 🎨 Design System

### Colors
- **Jade**: Primary green theme (#052e16 to #4ade80)
- **Amber**: Accent warm colors (#d97706 to #fbbf24)
- **Purple**: Secondary theme (#4c1d95 to #a78bfa)
- **Slate**: Dark backgrounds (#020617 to #1e293b)

### Typography
- **Titles**: Press Start 2P - Pixel arcade font
- **Subtitles**: Cinzel - Fantasy serif font  
- **Body**: Inter - Clean sans-serif

### Animations
- **Float**: Smooth floating effect for logos
- **Glow**: Pulsing glow for interactive elements
- **Drift**: Particle movement across screen
- **Breath**: Subtle scaling for emphasis

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_URL=https://jadecompass.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Performance Optimization

The project is configured for optimal performance:

- Server Components by default
- Automatic code splitting with Turbopack
- Image optimization with AVIF/WebP formats
- Font preloading with display swap
- Critical CSS inlining
- Strict CSP headers

## 📊 Core Web Vitals Targets

- **LCP**: <1.2s
- **FID**: <100ms  
- **INP**: <200ms
- **CLS**: <0.1
- **FCP**: <1.0s

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by classic pixel art games
- Built with modern web technologies
- Designed for gamers, by gamers

---

**Jade Compass Studios** - *Forged in Pixels, Bound by Legend*
