# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from GitHub's clean aesthetic combined with modern developer portfolios like Linear and Vercel team sites. Focus on code-centric professionalism with subtle technical elegance.

## Core Design Principles
1. **Developer-First Clarity**: Clean, readable layouts that developers appreciate
2. **Content Prominence**: Let your work and repositories be the hero
3. **Technical Polish**: Sophisticated but not flashy - confidence through restraint
4. **Scannable Hierarchy**: Quick visual parsing of projects and skills

## Typography System

**Font Stack**: 
- Primary: Inter (Google Fonts) - body text, UI elements
- Monospace: JetBrains Mono (Google Fonts) - code snippets, technical details

**Hierarchy**:
- Hero Name: text-6xl md:text-7xl font-bold tracking-tight
- Section Headings: text-4xl md:text-5xl font-bold
- Card Titles: text-xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Code/Technical: font-mono text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-6 or p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-6 or gap-8

**Container Strategy**:
- Max width: max-w-7xl mx-auto
- Side padding: px-6 md:px-8
- Content sections: max-w-4xl for text-heavy areas

## Page Structure & Sections

### 1. Hero Section (80vh)
- Left-aligned layout with professional headshot (rounded-2xl, w-24 h-24 md:w-32 md:h-32)
- Name, title/tagline, brief one-liner
- Primary CTA: "View Projects" + Secondary: "Download Resume"
- Subtle gradient background treatment (no solid colors specified)
- Social links (GitHub, LinkedIn, Email) with icons

### 2. About Me Section
- Two-column layout (md:grid-cols-2)
- Left: Expanded bio (2-3 paragraphs about background, interests, approach)
- Right: Skills grid showcasing technologies
- Skills displayed as pills/badges with icon + label

### 3. Featured Projects Section
- 2-column grid (md:grid-cols-2) for top 3-4 pinned projects
- Larger cards with project screenshot/preview placeholder
- Prominent description, tech stack tags, live/repo links

### 4. GitHub Repositories Section
- 3-column grid (md:grid-cols-2 lg:grid-cols-3)
- Repository cards showing:
  - Repo name with link
  - Description (truncated if long)
  - Language indicator with colored dot
  - Star count and fork count with icons
  - "Updated X days ago" timestamp
- Sort by: Stars, Recently Updated, Alphabetical (tab navigation)

### 5. Contact/Footer Section
- Centered layout
- "Let's Build Something Together" heading
- Email, social links repeated
- Simple copyright notice

## Component Library

**Repository Cards**:
- Rounded corners: rounded-xl
- Padding: p-6
- Border treatment with subtle shadow
- Hover: Slight lift transform and shadow increase
- Fixed height for grid consistency: min-h-[280px]

**Skill Badges**:
- Inline-flex items with icon + text
- Rounded: rounded-full
- Padding: px-4 py-2
- Font: text-sm font-medium

**Buttons**:
- Primary: Large touch target (px-8 py-3), rounded-lg, font-semibold
- Secondary: Outline variant with same dimensions
- Icon buttons: Circular for social links (w-10 h-10)

**Navigation** (if sticky header):
- Fixed top on scroll
- Logo/Name + Resume/Contact links
- Backdrop blur effect: backdrop-blur-sm

## Icons
**Library**: Heroicons (via CDN)
- Social icons: 24px (w-6 h-6)
- Card metadata icons: 20px (w-5 h-5)
- Skill icons: Use simple-icons or devicon library for technology logos

## Images

**Hero Section**:
- Professional headshot/portrait (recommended: square crop, professional attire or casual-professional)
- Placement: Top-left of hero content area
- Size: 128px × 128px on desktop, 96px × 96px on mobile
- Treatment: rounded-2xl with subtle shadow

**Featured Projects** (if available):
- Project screenshots or mockups
- Aspect ratio: 16:9 or 4:3
- Rounded corners: rounded-lg
- Lazy loading enabled

**No large hero background image** - keep hero clean and content-focused

## Animations
- Minimal, performance-focused
- Fade-in on scroll for section entries (once only)
- Smooth hover states on cards and buttons
- Page load: Subtle fade-in for hero content (300ms delay)
- NO complex scroll-triggered animations

## Responsive Behavior
- Mobile: Single column stacking, increased touch targets
- Tablet: 2-column grids where appropriate
- Desktop: Full 3-column layouts for repository cards
- Breakpoints: Standard Tailwind (sm: 640px, md: 768px, lg: 1024px)

## Accessibility
- Semantic HTML throughout (header, main, section, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation for all interactive elements
- Focus states: ring-2 ring-offset-2 on all focusable elements
- Alt text for headshot image