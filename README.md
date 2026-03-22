# MedRCMx Solutions — Next.js Website

A modern, professional medical billing company website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Syne (Display), DM Sans (Body), Space Mono (Mono)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Canvas API

## Color Palette

| Name | Hex |
|------|-----|
| Navy | `#0F2D4D` |
| Emerald | `#27D083` |
| Cyan | `#38F8FF` |
| White | `#FFFFFF` |

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero with 3D particle canvas + globe, stats, services, why us, testimonials |
| `/about` | About — Mission, journey timeline, values, team |
| `/services` | Services — Interactive service explorer, FAQ |
| `/reviews` | Reviews — Ratings, featured success stories, filterable reviews |
| `/contact` | Contact — Form with validation, contact info, hours |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Features

- ✅ Fully responsive (mobile-first)
- ✅ 3D particle canvas animation on hero
- ✅ CSS 3D rotating globe with floating cards
- ✅ Animated counters on scroll
- ✅ Glassmorphism cards with hover effects
- ✅ Interactive service explorer
- ✅ Filterable reviews by specialty
- ✅ Contact form with success state
- ✅ Custom scrollbar
- ✅ Sticky animated navbar
- ✅ Gradient text & border effects
- ✅ Neon glow effects
- ✅ HIPAA compliance mention

## Customization

1. **Company Info**: Update contact details in `components/Footer.tsx` and `app/contact/page.tsx`
2. **Colors**: Edit CSS variables in `app/globals.css`
3. **Content**: Update copy in each page file
4. **Logo**: Replace the "M" icon in `components/Navbar.tsx` with your actual logo
5. **Form**: Connect the contact form to your backend or a service like Formspree/Resend

## Environment Variables

Create a `.env.local` file for form submissions:

```env
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
