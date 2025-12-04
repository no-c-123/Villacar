# 🚗 Villacar Autos LLC. - Modern Car Dealership Website

A professional, feature-rich car dealership website built with Astro, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 Core Features
- **Dynamic Vehicle Inventory** - Browse 12+ vehicles with detailed specifications
- **Advanced Search & Filters** - Filter by make, type, year, and price with real-time results
- **Vehicle Comparison Tool** - Compare up to 3 vehicles side-by-side
- **Wishlist/Favorites** - Save favorite vehicles with localStorage
- **Recently Viewed** - Track and display recently viewed vehicles
- **Finance Calculator** - Interactive monthly payment estimator on vehicle pages

### 💬 Communication
- **WhatsApp Integration** - Floating WhatsApp button for instant contact
- **Contact Form** - Full-featured contact form with validation and email API
- **Phone Integration** - Click-to-call functionality throughout the site

### 🔍 Search & Discovery
- **Global Search** - Navbar search with live autocomplete results
- **Smart Filters** - Real-time filtering with vehicle count updates
- **Sort Options** - Sort by price, year, mileage
- **Featured Vehicles** - Curated selection on homepage

### 🎨 User Experience
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Image Galleries** - 4 images per vehicle with thumbnail navigation
- **Social Sharing** - Share vehicles on Facebook, Twitter, email, or copy link
- **Back to Top Button** - Smooth scroll to top on long pages
- **Loading Animations** - Smooth transitions and animations throughout
- **Print Support** - Print-friendly comparison and detail pages

### 📄 Pages
- **Homepage** - Hero section, featured vehicles, testimonials, stats
- **Inventory** - Full vehicle listing with filters and sorting
- **Vehicle Details** - Comprehensive vehicle information with calculator
- **Compare** - Side-by-side vehicle comparison
- **Wishlist** - Saved favorite vehicles
- **About** - Company history and values
- **Contact** - Contact form with map and information
- **Financing** - Coming soon page with preview
- **404** - Custom error page

### 🛠️ Technical Features
- **TypeScript** - Type-safe code throughout
- **Tailwind CSS** - Utility-first CSS with custom configuration
- **localStorage** - Client-side data persistence
- **API Routes** - Backend contact form processing
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd Villacar2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
Villacar2/
├── public/              # Static assets
│   └── robots.txt       # SEO robots file
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable components
│   │   ├── FinanceCalculator.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── Welcome.astro
│   ├── data/           # Data files
│   │   └── cars.ts     # Vehicle inventory data
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Route pages
│   │   ├── api/        # API endpoints
│   │   │   └── contact.ts
│   │   ├── cars/       # Dynamic vehicle pages
│   │   │   └── [id].astro
│   │   ├── about.astro
│   │   ├── compare.astro
│   │   ├── contact.astro
│   │   ├── financing.astro
│   │   ├── index.astro
│   │   ├── inventory.astro
│   │   ├── wishlist.astro
│   │   └── 404.astro
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.ts` to change the custom red color:
```typescript
colors: {
  'custom-red': 'rgb(37, 87, 161)', // Change this
}
```

### Business Information
Update business details in:
- `src/components/Footer.astro`
- `src/components/Navbar.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`

### Vehicle Inventory
Add/edit vehicles in `src/data/cars.ts`

### Email Configuration
Configure email sending in `src/pages/api/contact.ts`

## 🌟 Key Features Explained

### Finance Calculator
- Automatic monthly payment calculation
- Down payment slider
- Interest rate customization
- Loan term selection (36, 48, 60, 72 months)
- Total cost breakdown

### Wishlist System
- Heart icon on all vehicle cards
- Persistent storage using localStorage
- Count badge in navbar
- Dedicated wishlist page
- Remove from wishlist functionality

### Search Functionality
- Global search from navbar
- Live results as you type
- Search by make, model, year
- Quick vehicle preview in results
- Navigate directly to vehicle pages

### Comparison Tool
- Select up to 3 vehicles
- Side-by-side specifications
- Print functionality
- Direct links to view details

## 📱 WhatsApp Integration
Click-to-chat button with pre-filled message:
```
Phone: +1 (956) 566-6618
Message: "Hi, I'm interested in learning more about your vehicles"
```

## 🔧 Technologies Used

- **Framework**: Astro 3.5.3
- **Styling**: Tailwind CSS 3.4.18
- **Language**: TypeScript
- **Image CDN**: Unsplash
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📊 Performance

- **Fast Load Times** - Static site generation
- **Optimized Images** - Modern image formats
- **Minimal JavaScript** - Only where needed
- **SEO Optimized** - Meta tags and semantic HTML

## 🎯 Business Information

**Villacar Autos LLC.**
- **Address**: 4208 S 23rd St, McAllen, TX 78503
- **Phone**: (956) 566-6618
- **Email**: info@villacar.com
- **Established**: 2001
- **Hours**: Mon-Fri 9AM-6PM, Sat 10AM-4PM

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 License

© 2024 Villacar Autos LLC. All rights reserved.

---

**Made with ❤️ for Villacar Autos LLC.**
