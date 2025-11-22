# Ember Eatery

A beautiful, modern restaurant website template built with React, Vite, and TailwindCSS.

**Best for:** Restaurants, cafes, fine dining establishments

## What makes it different:

- **Full-width hero** with reservation CTA
- **Today's specials strip** for highlighting daily offerings
- **Filterable menu sections** (starters, mains, desserts) with print-friendly layout
- **Photo gallery grid** with lightbox functionality
- **Chef/crew section** showcasing your team
- **Hours + location block** with embedded map
- **Warm amber and deep orange accent colors** for CTAs
- **Bold imagery and high-contrast typography**
- **Fully responsive design**
- **Smooth hover interactions** for menu items

**Style:** Bold, modern, high-contrast typographic sections with warm tones

## Features

- ✅ React 18 with Vite for fast development
- ✅ TailwindCSS for styling
- ✅ Fully responsive design
- ✅ Print-friendly menu layout
- ✅ Image lightbox gallery
- ✅ Reservation modal form
- ✅ Smooth animations and transitions
- ✅ Accessible navigation
- ✅ SEO-friendly structure

## Getting Started

### Installation

1. Navigate to the template directory:
```bash
cd ak-template-ember
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Customization

### Colors

The template uses warm amber and deep orange accents. You can customize these in `tailwind.config.js`:

```js
colors: {
  amber: {
    warm: '#F59E0B',
    'warm-dark': '#D97706',
  },
  orange: {
    deep: '#EA580C',
    'deep-dark': '#C2410C',
  },
}
```

### Content

Update the content in `src/data.js`:
- Menu items (starters, mains, desserts)
- Today's specials
- Gallery images
- Crew/team members
- Hours and location information

### Images

Replace placeholder images with your own. The template uses Unsplash images as placeholders. Update the image URLs in:
- `src/data.js` (menu items, gallery, crew)
- `src/components/Hero.jsx` (hero background)

## Deployment

The template is configured for Firebase Hosting. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Make sure you have Firebase CLI installed and are logged in.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See LICENSE file for details.
