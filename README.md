# Sam Rodriguez — Portfolio & Coaching Website

A cinematic "gold on dark" personal portfolio and coaching website built with Next.js 14, showcasing Sam's philosophy, work, and leadership coaching services.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first with smooth animations
- **Accessible**: WCAG compliant with proper semantic HTML
- **Performance Optimized**: Image optimization, lazy loading, minimal JS
- **Backend Ready**: Structured for easy integration with CMS or API services

## Design System

### Colors
- **Background**: `#0E0E0E` (bg-900), `#151515` (bg-800)
- **Text**: `#FFFFFF` (text-100), `#F4F4F4` (text-80)
- **Gold Accent**: `#E1C85C` (gold-500), `#C0A73B` (gold-600), `#F3E59E` (gold-200)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Pull Quotes**: Cormorant Garamond (italic serif)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sam-rodriguez
```

2. Install dependencies:
```bash
npm install
```

3. Add images to `public/images/`:
   - sam-portrait.jpg (Hero portrait)
   - sam-bw-portrait.jpg (About section)
   - 6 project images (see `/public/images/.gitkeep`)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sam-rodriguez/
├── app/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PhilosophyGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AboutBlock.tsx
│   │   ├── NewsletterCTA.tsx
│   │   ├── PrimaryCTA.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles & design tokens
├── lib/
│   ├── types.ts          # TypeScript types
│   └── data.ts           # Content model (ready for CMS)
├── public/
│   └── images/           # Image assets
└── tailwind.config.ts    # Tailwind configuration
```

## Customization

### Content
Edit content in `lib/data.ts`:
- Site settings (name, social links, booking URL)
- Hero content
- Philosophy items
- Work steps
- Projects
- Testimonials
- About section
- Newsletter and CTA content

### Styling
Modify design tokens in `tailwind.config.ts` and `app/globals.css`

### Backend Integration

#### Newsletter Form
Update `app/components/NewsletterCTA.tsx` to connect to your email service:
```typescript
// Replace the TODO section with your API call
const response = await fetch('/api/newsletter', {
  method: 'POST',
  body: JSON.stringify({ email }),
})
```

#### Contact/Booking
The booking links currently point to placeholder URLs in `lib/data.ts`. Update:
- `siteSettings.bookingLink` → Your Calendly or booking platform
- `siteSettings.social.email` → Your email address

#### Content Management
Replace static data in `lib/data.ts` with API calls to your CMS (Contentful, Sanity, etc.)

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy
Compatible with Vercel, Netlify, or any Node.js hosting platform.

For Vercel:
```bash
vercel deploy
```

## Performance

- Next.js Image component for automatic optimization
- Font optimization with `next/font`
- Lazy loading for off-screen content
- Minimal client-side JavaScript
- CSS-based animations

## Accessibility

- Semantic HTML5 landmarks
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states with gold outline
- 4.5:1 color contrast ratios
- Alt text for all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Contact

For questions or support, contact Sam Rodriguez at hello@samrodriguez.com

