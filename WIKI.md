# Rob W Portfolio - Project Wiki

## Overview

My modern portfolio website featuring a Windows 98-inspired retro desktop interface. Built with Next.js 15, TypeScript, and Tailwind CSS, this project showcases creative development skills through an interactive desktop environment where users can explore projects in draggable, resizable windows.

**The Philosophy**: This isn't just a portfolio - it's a love letter to the era when computing was tactile, when every click felt intentional, and when interfaces had personality. We've taken the best of modern web development (React, TypeScript, Next.js) and wrapped it in the warm, nostalgic embrace of Windows 98. The result? A portfolio that's both cutting-edge and delightfully retro.

**Why This Approach Works**: The retro aesthetic isn't just for show - it creates a memorable experience that stands out in a sea of minimalist portfolios. Users remember the site because it's different, and they engage with it because it's fun. Plus, the technical implementation demonstrates serious skills: complex state management, responsive design, accessibility compliance, and performance optimization - all while maintaining that authentic Windows 98 feel.

## Key Features

### Retro Desktop Interface

- **Draggable Windows**: Move, resize, minimize, and close windows just like Windows 98
- **Desktop Icons**: Clickable navigation icons with authentic pixel art styling
- **Taskbar**: Bottom taskbar with start menu, running applications, and live clock
- **Window Management**: Cascading window positioning, z-index management, and responsive sizing
- **Time-based Backgrounds**: Dynamic gradients that change based on time of day
- **Animated Clouds**: Pixel art clouds that drift across the desktop background

### Content Management

- **Markdown-based CMS**: Easy content editing through markdown files
- **Frontmatter Metadata**: Structured data for projects and pages
- **API Routes**: Dynamic content loading without page refreshes
- **CMS Migration Ready**: Architecture designed for easy transition to WordPress or other CMS

### Responsive Design

- **Mobile-first**: Optimized for all screen sizes (360px to 1400px+)
- **Adaptive Windows**: Window sizes adjust based on device
- **Touch-friendly**: Mobile-optimized interactions
- **Responsive Typography**: Font sizes scale appropriately

### Performance & Quality

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic bundle optimization
- **W3C Compliant**: Semantic HTML, ARIA attributes, keyboard navigation
- **TypeScript**: Full type safety throughout

## Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **React**: 18.3.1
- **Content Processing**: Gray-matter, Remark
- **Testing**: Jest, React Testing Library

## Project Structure

```
rw-portfolio/
├── content/                    # Markdown CMS content
│   ├── pages/                 # Static pages (home, about, contact)
│   └── portfolio/             # Portfolio projects
├── src/
│   ├── app/                   # Next.js app router
│   │   ├── api/               # API routes for content
│   │   ├── globals.css        # Global styles (4000+ lines)
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── RetroDesktop.tsx   # Main desktop interface
│   │   ├── WindowContent.tsx  # Dynamic content loader
│   │   ├── ProjectWindow.tsx  # Project detail windows
│   │   └── ...
│   └── lib/                   # Utilities
│       └── markdown.ts        # Content processing
├── public/                    # Static assets
└── tests/                     # Test suite
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/robotwilliams/rw-portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## Architecture

### Window Management System

The desktop interface uses a sophisticated window management system:

- **State Management**: React hooks (useState, useCallback, useMemo)
- **Window Operations**: Open, close, minimize, drag, resize
- **Cascading Positioning**: Windows open in staggered positions
- **Z-Index Management**: Proper window stacking order
- **Responsive Sizing**: Dynamic window dimensions based on screen size

### Content Loading

- **Static Pages**: Pre-rendered at build time
- **Dynamic Content**: Loaded via API routes
- **Markdown Processing**: Converted to HTML with proper sanitization
- **Image Optimization**: Automatic Next.js image optimization

### Responsive Breakpoints

- **360px**: Extra small mobile
- **480px**: Small mobile
- **600px**: Mobile
- **768px**: Tablet
- **1024px**: Tablet landscape
- **1200px+**: Desktop
- **1400px+**: Large desktop

## Content Management

### Adding a New Page

1. Create a markdown file in `content/pages/`
2. Add frontmatter with metadata
3. Write content in markdown
4. The page will automatically be available

### Adding a New Project

1. Create a markdown file in `content/portfolio/`
2. Include required frontmatter:
   - `title`, `description`, `slug`
   - `category`, `client`, `date`
   - `technologies`, `image`
   - Optional: `gallery`, `live_url`, `github_url`
3. Write project content in markdown
4. Project appears in the work page automatically

## Styling System

### CSS Architecture

- **Global Styles**: `globals.css` with 4000+ lines of custom CSS
- **Tailwind CSS**: Utility classes for rapid development
- **CSS Variables**: Custom properties for theming
- **Responsive Design**: Mobile-first media queries

### Retro Aesthetic

- **Pixel Art**: Authentic Windows 98 styling
- **3D Effects**: Outset/inset borders for buttons and windows
- **Scanlines**: CRT monitor effect
- **Pixelation Filters**: Retro image rendering

## Performance

### Optimizations

- **Static Generation**: Most pages pre-rendered
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic by Next.js
- **CSS Purging**: Tailwind removes unused styles
- **Lazy Loading**: Components loaded on demand

### Build Output

- **First Load JS**: ~101 KB shared
- **Page Sizes**: 172 B - 3.26 KB per page
- **Static Assets**: Optimized and cached

## Accessibility

### W3C Compliance

- **Semantic HTML**: Proper use of `<nav>`, `<button>`, `<header>`
- **ARIA Attributes**: 23+ ARIA labels and roles
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper alt text and descriptions
- **Focus Management**: Visible focus indicators

## Testing

### Test Coverage Goals

- **Components**: 90% coverage
- **Utilities**: 95% coverage
- **API Routes**: 85% coverage
- **Integration**: 80% coverage

### Running Tests

```bash
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage report
npm run test:ci         # CI mode
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, ES6+

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

Private project - All rights reserved

## Admin Dashboard

### Overview

The admin dashboard is a full-featured content management system built right into the portfolio. No need for external CMS tools or complex setups - just log in and edit your content directly in the browser.

### Features

- **Secure Authentication**: Session-based auth with environment variables (no default passwords!)
- **Real-time Updates**: Changes appear immediately on the frontend (no caching delays)
- **Page Editing**: Edit About and Contact pages with live markdown preview
- **Project Management**: Edit all portfolio projects with full metadata support
- **Simple Interface**: Clean, intuitive UI that doesn't get in your way

### How It Works

The admin system uses a clever architecture:
1. **Client-side**: React components handle the UI and user interactions
2. **API Routes**: Next.js API routes handle authentication and content saving
3. **File System**: Content is saved directly to markdown files (version controlled!)
4. **Dynamic Rendering**: All routes use `force-dynamic` to ensure fresh content

### Security

- Credentials stored in environment variables (never in code)
- Session cookies are `httpOnly` and `secure` in production
- No default credentials - must be explicitly set
- Server-side validation on all admin routes

### Access

Navigate to `/admin` on your live site, enter your credentials, and start editing. It's that simple.

## Technical Deep Dive

### Why Next.js App Router?

The App Router gives us server components, which means we can fetch data on the server and send HTML directly to the client. This is perfect for our markdown CMS - we can read files on the server, process them, and send rendered HTML. No client-side markdown parsing needed for initial loads.

### State Management Philosophy

We use React's built-in state management (useState, useCallback, useMemo) rather than external libraries. Why? Because the state is relatively simple - windows, UI interactions, and content loading. No need for Redux or Zustand when React hooks handle everything elegantly.

### Performance Strategy

1. **Static Generation**: Most pages are pre-rendered at build time
2. **Dynamic Routes**: Admin routes and API endpoints are server-rendered on demand
3. **Image Optimization**: Next.js Image component handles all the heavy lifting
4. **Code Splitting**: Automatic - Next.js splits code by route automatically
5. **CSS Optimization**: Tailwind purges unused styles automatically

### Accessibility First

Every interactive element has proper ARIA labels. Every image has alt text. Keyboard navigation works throughout. Screen readers can understand the interface. This isn't just good practice - it's the right thing to do, and it makes the site better for everyone.

## Contact

- **Email**: robwilliamsdeveloper@gmail.com
- **Portfolio**: https://robotwilliams.com
- **GitHub**: [@robotwilliams](https://github.com/robotwilliams)

---

_Built with ❤️ using Next.js, TypeScript, and a whole lot of nostalgia for Windows 98_

**Last Updated**: December 2025
