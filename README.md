# Companion — Lead Generation & Growth Systems for Online Coaches

A premium, high-converting agency website built with Next.js 15+, TypeScript, TailwindCSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod Validation
- **Form Handling**: Web3Forms API
- **Theme**: next-themes (Dark/Light)
- **Toasts**: Sonner

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Get your access key from [Web3Forms](https://web3forms.com/).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, SEO, providers
│   ├── page.tsx            # Landing page (/)
│   ├── apply/page.tsx      # Onboarding form (/apply)
│   └── globals.css         # Global styles + Tailwind theme
├── components/
│   ├── layout/             # Navbar, Footer, ScrollProgress
│   ├── sections/           # Landing page sections
│   ├── forms/              # Multi-step onboarding form
│   ├── animated-background.tsx
│   ├── floating-cta.tsx
│   ├── section-wrapper.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                    # Utilities and constants
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── public/                 # Static assets, robots.txt, sitemap
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
4. Deploy

## Web3Forms Setup

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter your email to get an access key
3. Add the key to `.env.local`
4. Form submissions will be sent to your email

## Features

- ✅ Dark/Light theme
- ✅ Responsive design (mobile-first)
- ✅ Multi-step onboarding form with validation
- ✅ Scroll-triggered animations
- ✅ Sticky navbar with scroll detection
- ✅ Floating CTA on mobile
- ✅ Scroll progress indicator
- ✅ SEO optimized (metadata, OpenGraph, sitemap)
- ✅ Performance optimized
- ✅ Scalable architecture

## License

Private — All rights reserved.
