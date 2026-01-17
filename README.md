# FPT 2026 Conference Website

A modern, responsive website for the **National Conference on Frontiers of Physics and Technology (FPT 2026)** hosted by Panchayat College, Bargarh.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📋 Features

- ✅ Modern, scientific aesthetic with gradient accents
- ✅ Dark mode support
- ✅ Glassmorphism effects for cards
- ✅ Smooth scroll animations and parallax effects
- ✅ Mobile-first responsive design
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Countdown timer to conference start
- ✅ Interactive FAQ section
- ✅ Contact form
- ✅ Registration and payment details
- ✅ Abstract submission guidelines
- ✅ Speaker profiles
- ✅ Timeline of important dates
- ✅ How to reach section with map

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/src
  /app
    page.tsx          # Main page
    layout.tsx        # Root layout
    globals.css       # Global styles
  /components
    Navbar.tsx        # Navigation bar
    Hero.tsx          # Hero section
    About.tsx         # About section
    Speakers.tsx      # Speakers section
    Timeline.tsx      # Important dates timeline
    Registration.tsx # Registration & payment
    Contact.tsx       # Contact form & info
    Footer.tsx        # Footer
    CountdownTimer.tsx
    SubThemes.tsx
    HowToReach.tsx
    FAQ.tsx
  /lib
    data.ts           # Conference data
  /public
    /images
      Panchyat_Logo.jpg
```

## 🎨 Customization

All conference data is centralized in `/src/lib/data.ts`. Update this file to modify:
- Conference details
- Speaker information
- Registration fees
- Contact information
- Timeline events
- FAQ items
- Sub-themes

## 🚢 Deployment to Vercel

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The project includes `vercel.json` with the correct configuration.

## 📝 Environment Variables

No environment variables are required for basic functionality. If you need to add API keys or other secrets, create a `.env.local` file:

```env
# Example (if needed)
NEXT_PUBLIC_API_URL=your_api_url
```

## 🔧 Configuration

- **Tailwind CSS**: Configured in `tailwind.config.js`
- **TypeScript**: Configured in `tsconfig.json`
- **Next.js**: Configured in `next.config.js`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

The website follows WCAG 2.1 AA guidelines:
- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for images
- Color contrast compliance

## 📄 License

© 2026 FPT Conference. All rights reserved.

## 👥 Contact

For questions about the conference, contact:
- **Dr. Lipsa Nanda** - snlipsa@gmail.com
- **Dr. Binaya Kumar Sahu** - binayamsc12@gmail.com
- **Dr. Kishora Nayak** - k.nayak1234@gmail.com

---

Built with ❤️ for FPT 2026 Conference

