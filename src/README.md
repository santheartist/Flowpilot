# FlowPilot - SaaS Landing Page

A premium, pixel-perfect landing page for a modern SaaS project management platform built with React and Tailwind CSS.

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd flowpilot-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be available in the `dist` folder.

## 🚀 Deploying to Vercel

### Prerequisites for Deployment

Make sure all these files are committed to your GitHub repository:
- `index.html`
- `src/main.tsx`
- `package.json`
- `vite.config.js`
- `vercel.json`
- `tsconfig.json`
- All component files in `/components`
- All style files in `/styles`

### Deployment Steps

1. **Commit all files to GitHub:**
```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

2. **Deploy on Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect the settings from `vercel.json`
   - Click "Deploy"

### Manual Vercel Configuration (if needed)

If auto-detection fails, set these in Vercel dashboard:

**Framework Preset:** Vite

**Build & Development Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Root Directory:** `./` (leave as default)

### Troubleshooting

If you still see "No Output Directory" error:

1. Check the build logs in Vercel dashboard
2. Ensure all files listed in Prerequisites are in your repo
3. Try deleting the Vercel project and re-importing
4. Make sure `package.json` has correct build script: `"build": "vite build"`

## 🛠️ Tech Stack Used

### Core Technologies

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development (if applicable)
- **Tailwind CSS v4.0** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Libraries & Dependencies

- **lucide-react** - Icon library for clean, consistent icons
- **React Hooks** - useState, useEffect for state management and side effects

### Design System

- **Color Palette**:
  - Light Mode: Neutral background (#F8F9FB), Indigo primary (#4F46E5), Slate gray secondary (#64748B)
  - Dark Mode: Deep navy background (#0f1117), Lighter indigo primary (#6366f1), Adjusted secondary colors
- **Spacing System**: Strict 8px grid system
- **Border Radius**: 8-12px for modern, rounded aesthetics
- **Typography**: Inter/SF Pro font family
- **Shadows**: Soft, layered shadows for depth

## ✨ Key Features Implemented

### 1. **Complete Landing Page Structure**

- ✅ Sticky Navigation Bar with smooth scroll effects
- ✅ Hero Section with compelling CTA and social proof
- ✅ Custom Dashboard Mockup component
- ✅ Features Section (4 feature cards)
- ✅ Informational Section with timeline visualization
- ✅ Testimonials Section (3 customer reviews)
- ✅ Pricing Section (3-tier pricing)
- ✅ CTA Section with gradient background
- ✅ Footer with links and social media

### 2. **Dark Mode Implementation**

- ✅ Toggle button with Moon/Sun icons
- ✅ Persistent theme preference (localStorage)
- ✅ System preference detection
- ✅ Smooth transitions between themes
- ✅ Optimized color palette for both modes
- ✅ Maintained 4.5:1 contrast ratio for accessibility

### 3. **Interactive Components**

- ✅ Hover animations on all interactive elements
- ✅ Smooth transitions and transforms
- ✅ Gradient effects and backdrop blur
- ✅ Shadow elevation on hover states
- ✅ Responsive button states

### 4. **Dashboard Mockup Features**

- ✅ Live statistics cards with trend indicators
- ✅ Animated progress bars
- ✅ Activity chart visualization
- ✅ Task list with priority indicators
- ✅ Team member avatars

### 5. **Design Excellence**

- ✅ Pixel-perfect implementation
- ✅ Professional, premium aesthetic
- ✅ Consistent spacing using 8px grid
- ✅ Cohesive color system
- ✅ Modern gradient overlays
- ✅ Smooth scroll behavior

### 6. **Accessibility**

- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader friendly

### 7. **Performance Optimizations**

- ✅ Component-based architecture
- ✅ Efficient re-renders with React hooks
- ✅ Optimized CSS with Tailwind
- ✅ Fast page load with Vite

## 📋 Assumptions Made

1. **Desktop-First Approach**: The design is optimized for desktop viewing (1280px+). While the components use responsive Tailwind classes, a full mobile-responsive implementation would require additional breakpoints and layout adjustments.

2. **Mock Data**: All content, statistics, testimonials, and pricing information are placeholder/mock data for demonstration purposes.

3. **External Services**: No external API integrations or backend services are implemented. This is a static frontend application.

4. **Browser Support**: Modern browsers with CSS Grid, Flexbox, and CSS Custom Properties support (Chrome, Firefox, Safari, Edge - latest versions).

5. **Image Assets**: Using Unsplash for avatar images in testimonials. For a production app, these would be replaced with actual user images.

6. **Navigation Links**: All navigation links are anchor tags with hash routes (#product, #features, etc.) and don't navigate to actual pages.

7. **Forms**: The "Get Started" and "Start Free Trial" buttons are non-functional and would need backend integration for actual signup flows.

8. **Theme Persistence**: Dark mode preference is stored in browser localStorage and persists across sessions.

9. **Design Inspiration**: The design takes inspiration from modern SaaS platforms (Notion, Linear, Slack, Asana) but creates a unique brand identity for FlowPilot.

## ⏱️ Time Spent on Assignment

**Total Time**: Approximately 4-5 hours

### Breakdown:

- **Planning & Design System Setup** (45 mins)
  - Color palette definition
  - Spacing system
  - Component structure planning
- **Core Components Development** (2 hours)
  - Navigation, Hero, Features sections
  - Dashboard mockup creation
  - Informational and Testimonials sections
- **Pricing & Footer Components** (45 mins)
  - Pricing cards with highlighted plan
  - CTA section
  - Footer with links
- **Dark Mode Implementation** (1 hour)
  - Theme toggle component
  - CSS variables for dark mode
  - All component updates for theme support
- **Polish & Refinement** (30 mins)
  - Hover states and animations
  - Accessibility improvements
  - Final visual consistency check

## 📁 Project Structure

```
/
├── components/
│   ├── Navigation.tsx          # Sticky nav with dark mode toggle
│   ├── HeroSection.tsx         # Hero with CTA and social proof
│   ├── DashboardMockup.tsx     # Interactive dashboard preview
│   ├── FeaturesSection.tsx     # 4 feature cards grid
│   ├── InformationalSection.tsx # Timeline and benefits
│   ├── TestimonialsSection.tsx # Customer reviews
│   ├── PricingSection.tsx      # 3-tier pricing
│   ├── CTASection.tsx          # Final call-to-action
│   ├── Footer.tsx              # Footer with links
│   └── DarkModeToggle.tsx      # Theme switcher
├── styles/
│   └── globals.css             # Global styles and theme variables
├── App.tsx                     # Main app component
└── README.md                   # This file
```

## 🎨 Design Highlights

- **Color System**: Carefully crafted light/dark mode palettes with optimal contrast
- **Spacing**: Consistent 8px grid system throughout
- **Typography**: Clean, professional Inter font family
- **Animations**: Subtle hover effects and smooth transitions
- **Shadows**: Layered shadows for depth and elevation
- **Gradients**: Strategic use of gradients for visual interest

## 🚧 Future Enhancements

- Full mobile responsive design with breakpoints
- Animated scroll reveals for sections
- Video demo integration
- Live chat widget
- Newsletter signup with email validation
- Multi-language support (i18n)
- Backend integration for contact forms
- Analytics integration
- Performance monitoring

## 📄 License

This project is created for educational/assignment purposes.

---

**Built with ❤️ using React + Tailwind CSS**