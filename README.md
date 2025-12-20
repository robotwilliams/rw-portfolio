# Rob W Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a markdown-based CMS system that can easily transition to a real CMS like WordPress.

## Project Goals & Vision

This portfolio website serves as a showcase for Rob Williams' work as a creative developer and designer. The project has several key objectives:

1. **Creative Expression**: Demonstrate technical skills through an innovative Windows 98 retro desktop interface with authentic pixel art icons
2. **Interactive Experience**: Create an engaging desktop environment where users can explore projects through draggable windows
3. **Content Management**: Provide an easy-to-use markdown-based CMS for non-technical content updates
4. **CMS Migration Path**: Design the architecture to easily transition to WordPress or other CMS platforms
5. **Performance**: Ensure fast loading times and excellent user experience
6. **Responsive Design**: Work seamlessly across all device sizes
7. **SEO Optimization**: Implement proper meta tags, structured data, and performance optimization

## Technical Architecture

### Core Technologies

- **Next.js 15.3.4**: React framework with App Router for server-side rendering and static generation
- **TypeScript 5**: Type-safe development with strict type checking
- **Tailwind CSS 3.4.17**: Utility-first CSS framework for rapid styling
- **React 18.3.1**: Latest stable React with hooks and modern features
- **Gray-matter**: Frontmatter parsing for markdown files
- **Remark**: Markdown processing and HTML conversion

### Content Management System

The site uses a **markdown-based CMS** with frontmatter for metadata. This approach provides:

- **Easy Content Editing**: Non-technical users can edit content without touching code
- **Version Control**: Content changes are tracked in Git alongside code
- **CMS Migration Path**: Structured data makes it easy to migrate to WordPress, Strapi, or other CMS platforms
- **Performance**: Static content generation for fast loading times

### Retro Desktop Interface

The site features a **Windows 98-inspired desktop interface** that includes:

- **Draggable Windows**: Users can move, resize, minimize, and close content windows
- **Desktop Icons**: Clickable icons for navigation with authentic Windows 98 styling
- **Taskbar**: Bottom taskbar with start menu and running applications
- **Authentic Pixel Art Icons**: Pixel-perfect replicas of classic Windows 98 icons
- **Interactive Work Environment**: Project grid that opens detailed project windows
- **Window Management**: Only one project window open at a time with proper stacking
- **Authentic Styling**: Accurate recreation of Windows 98 visual design and interactions
- **Time-based Backgrounds**: Dynamic gradients that change based on time of day
- **Live Clock**: Authentic digital clock in the taskbar

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Markdown CMS**: Content managed through markdown files with frontmatter
- **Admin Dashboard**: Full-featured admin interface for content management
  - Secure authentication with session cookies
  - Edit pages (About, Contact) directly from the browser
  - Edit portfolio projects with rich metadata
  - Real-time content updates without page refresh
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Easy CMS Migration**: Designed to easily transition to WordPress or other CMS platforms
- **Interactive Portfolio**: Windows 98-style project grid with draggable project windows
- **Authentic Icons**: Pixel-perfect Windows 98 icons throughout the interface
- **Contact Form**: Functional contact form with validation
- **Blog Ready**: Structure in place for future blog functionality
- **Time-based Interface**: Dynamic backgrounds and adaptive styling
- **Comprehensive Testing**: Full test suite with 90%+ coverage goals

## Project Structure

```
rw-portfolio/
├── content/                    # Markdown CMS content
│   ├── pages/                 # Static pages (home, about, contact)
│   └── portfolio/             # Portfolio projects (6 projects)
├── src/
│   ├── app/                   # Next.js app router
│   │   ├── api/               # API routes
│   │   │   └── content/       # Content API endpoints
│   │   ├── globals.css        # 3,436 lines of RobotOS styling
│   │   ├── layout.tsx         # Root layout with fonts
│   │   └── page.tsx           # Home page component
│   ├── components/            # React components
│   │   ├── RetroDesktop.tsx   # Main desktop interface (993 lines)
│   │   ├── WindowContent.tsx  # Dynamic content loader (556 lines)
│   │   ├── ProjectWindow.tsx  # Project detail windows (587 lines)
│   │   ├── PageLayout.tsx     # Reusable layout system (261 lines)
│   │   └── ...                # Additional components
│   └── lib/                   # Utility functions
│       └── markdown.ts        # Content processing (192 lines)
├── tests/                     # Comprehensive test suite
├── public/                    # Static assets and icons
└── package.json
```

## Core Components Architecture

### RetroDesktop.tsx (993 lines)

The main desktop interface providing:

- **Window Management System**: Open, close, minimize, drag, resize windows with cascading positioning
- **Desktop Icons**: Navigation with authentic Windows 98 styling and hover effects
- **Taskbar**: Start menu, running applications, live digital clock
- **Time-based Backgrounds**: Dynamic gradients that change based on time of day (morning/afternoon/evening/night)
- **Responsive Design**: Mobile-first window sizing and positioning
- **Z-Index Management**: Proper window stacking order and activation

### WindowContent.tsx (556 lines)

Dynamic content loader handling:

- **Page-specific Rendering**: Home, about, work, contact pages with consistent layouts
- **Interactive Work Grid**: Project icons that open detailed windows (only one at a time)
- **API Integration**: Content loading from markdown files via API routes
- **Window State Management**: Single project window policy with proper cleanup
- **Error Handling**: Graceful error states with retry functionality

### ProjectWindow.tsx (587 lines)

Individual project detail windows featuring:

- **Draggable Interface**: Move windows around the desktop with mouse event handling
- **Markdown Rendering**: Convert project content to HTML with proper styling
- **Project Metadata**: Client, duration, technologies, live links, GitHub links
- **Responsive Positioning**: Mobile and desktop layouts with proper constraints
- **Portal Rendering**: Windows rendered outside main component tree for proper z-indexing

### PageLayout.tsx (261 lines)

Reusable layout system with:

- **ContentSection**: Organized content areas with icons and headings
- **InfoGrid**: Responsive information cards with hover effects
- **InfoCard**: Styled cards with 3D button effects and hover states
- **LinkButton**: Styled external links with RobotOS aesthetics
- **Error Handling**: Graceful error states and retry mechanisms

## API Architecture

### Content API Routes

- **`/api/content/[page]`**: Dynamic page content (home, about, contact) with markdown processing
- **`/api/content/projects`**: Portfolio project data aggregation from markdown files
- **Markdown Processing**: Server-side markdown-to-HTML conversion using remark
- **Error Handling**: Graceful fallbacks and retry mechanisms

### Data Flow

1. **Markdown Files** → **Gray-matter Parsing** → **Frontmatter + Content**
2. **Content** → **Remark Processing** → **HTML Output**
3. **API Response** → **Client-side Rendering** → **Desktop Windows**

## State Management

### Window Management System

```typescript
interface Window {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}
```

### Key Features

- **Cascading Positioning**: Windows open in staggered positions to avoid overlap
- **Drag & Resize**: Mouse event handling for window manipulation with constraints
- **Z-Index Management**: Proper window stacking order and activation
- **Responsive Sizing**: Mobile-first window dimensions (280-850px width)
- **Single Project Window**: Only one project detail open at a time for performance

## CMS System

### Content Structure

The site uses a markdown-based CMS with frontmatter for metadata. This makes it easy to:

1. **Edit content** without touching code
2. **Version control** content changes
3. **Migrate to a real CMS** later (WordPress, Strapi, etc.)

### Page Content

Pages are stored in `content/pages/` with the following structure:

```markdown
---
title: 'Page Title'
description: 'Page description for SEO'
page_title: 'Display Title'
page_subtitle: 'Display subtitle'
# Additional frontmatter fields
---

# Page Content

Markdown content goes here...
```

### Portfolio Projects

Projects are stored in `content/portfolio/` with rich metadata:

```markdown
---
title: 'Project Name'
description: 'Project description'
slug: 'project-slug'
category: 'Web Development'
client: 'Client Name'
date: '2024-01-15'
duration: '3 months'
technologies: ['React', 'Node.js', 'TypeScript']
image: '/images/project-image.jpg'
gallery: ['/images/gallery1.jpg', '/images/gallery2.jpg']
live_url: 'https://project.com'
github_url: 'https://github.com/user/project'
featured: true
---

# Project Content

Detailed project description...
```

## Performance Optimizations

### Content Loading

- **Static Generation**: Pre-rendered markdown content for fast initial loads
- **API Routes**: Dynamic content loading without page refreshes
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic bundle optimization and lazy loading

### State Management

- **Efficient Re-rendering**: Proper state updates to prevent unnecessary renders
- **Window Position Caching**: Cached calculations to avoid recalculation
- **Event Listener Cleanup**: Proper cleanup to prevent memory leaks
- **Portal Rendering**: Project windows rendered outside main tree for performance

## Responsive Design

### Breakpoint System

- **360px**: Extra small mobile devices
- **480px**: Small mobile devices
- **600px**: Mobile devices
- **768px**: Tablet devices
- **1200px+**: Desktop devices

### Window Sizing Strategy

- **Mobile**: 280-400px width, 400-500px height (more vertical space)
- **Desktop**: 850px width, 550px height (optimal viewing)
- **Tablet**: Proportional scaling based on screen size
- **Touch Interactions**: Mobile-friendly window management

### Typography Scaling

- **Responsive Font Sizes**: Progressive scaling from mobile to desktop
- **Line Height Optimization**: Improved readability on small screens
- **Spacing Adjustments**: Optimized padding and margins for each breakpoint

## Testing Infrastructure

### Comprehensive Test Suite

- **Component Tests**: Individual React component testing with React Testing Library
- **Integration Tests**: End-to-end workflow testing for desktop interactions
- **API Tests**: Content loading and error handling validation
- **Utility Tests**: Markdown processing and helper function testing

### Test Coverage Goals

- **Components**: 90% coverage
- **Utilities**: 95% coverage
- **API Routes**: 85% coverage
- **Integration**: 80% coverage

### Testing Tools

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **Custom Test Utils**: Window management and responsive testing helpers
- **Mock Data**: Consistent test data for reliable testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rw-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Advanced Features

### Time-based Interface

- **Dynamic Backgrounds**: Morning, afternoon, evening, night gradients with smooth transitions
- **Animated Clouds**: Pixel art clouds with parallax movement across the desktop
- **Live Clock**: Authentic digital clock in taskbar with hourglass animation
- **Icon Text Colors**: Adaptive text colors based on time of day for optimal contrast

### Authentic Windows 98 Experience

- **3D Button Effects**: Inset/outset borders for authentic Windows 98 feel
- **Pixel Art Enhancement**: CSS filters for retro appearance and authentic pixelation
- **Window Controls**: Minimize, close, resize handles with proper styling
- **Start Menu**: Dropdown navigation with hover effects and icon animations
- **Taskbar**: Running applications, system tray, and live clock display

### Interactive Elements

- **Hover Effects**: Authentic Windows 98 hover states throughout the interface
- **Click Animations**: Button press effects and visual feedback
- **Window Transitions**: Smooth opening, closing, and minimizing animations
- **Icon Selection**: Visual feedback for selected desktop icons

## Development Workflow

### Content Management

- **Hot Reloading**: Instant content updates during development
- **Frontmatter Validation**: Type-safe content structure with TypeScript
- **Version Control**: Git-tracked content changes for easy rollback
- **CMS Migration Path**: Easy transition to WordPress/Strapi with structured data
- **Admin Dashboard**: Browser-based content editing at `/admin`
  - Secure login with environment variables (`ADMIN_USERNAME`, `ADMIN_PASSWORD`)
  - Edit pages (About, Contact) with live preview
  - Edit portfolio projects with full metadata support
  - GitHub API integration for production (Vercel) - saves via commits
  - File system writes for development - instant local updates
  - Auto-deployment - Vercel redeploys when content is saved
  - No caching - all routes use `force-dynamic` for fresh content

### Code Quality

- **TypeScript**: Strict type checking throughout the application
- **ESLint**: Code quality and consistency enforcement
- **Prettier**: Automatic code formatting for consistent style
- **Git Hooks**: Pre-commit validation to maintain code quality

### Development Tools

- **Next.js Dev Tools**: Built-in development server with hot reloading
- **React DevTools**: Component inspection and state debugging
- **TypeScript IntelliSense**: Enhanced development experience with type hints
- **Tailwind CSS IntelliSense**: Autocomplete for utility classes

## Content Management

### Adding a New Page

1. Create a new markdown file in `content/pages/`
2. Add frontmatter with required metadata
3. Write content in markdown
4. The page will be automatically available

### Adding a Portfolio Project

1. Create a new markdown file in `content/portfolio/`
2. Use the project frontmatter structure above
3. Add project images to `public/images/`
4. The project will appear in the portfolio automatically

### Editing Content

#### Using Admin Dashboard (Recommended)

1. Navigate to `/admin` in your browser
2. Login with credentials from environment variables
3. Select a page or project to edit
4. Make changes in the editor
5. Click "Save Changes" - updates appear immediately on the frontend

#### Manual Editing

- **Pages**: Edit markdown files in `content/pages/`
- **Projects**: Edit markdown files in `content/portfolio/`
- **Styling**: Modify Tailwind classes in component files
- **Layout**: Update components in `src/components/`

#### Environment Variables

**Local Development:**
Create a `.env.local` file with:

```
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
```

**Production (Vercel):**

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `ADMIN_USERNAME` and `ADMIN_PASSWORD`
3. Set them for **Production** environment
4. Redeploy your project

**Security:**

- ✅ Only you can login with your credentials
- ✅ Credentials stored securely in Vercel (not in code)
- ✅ No default passwords - must set environment variables
- ✅ Secure session cookies in production

See `DEPLOYMENT.md` for detailed Vercel setup instructions.

## Deployment & SEO

### Build Optimization

- **Static Site Generation**: Pre-rendered pages for fast loading and SEO
- **Bundle Optimization**: Automatic code splitting and tree shaking
- **Image Compression**: Optimized assets with Next.js Image component
- **CDN Ready**: Static assets optimized for CDN delivery

### SEO Features

- **Meta Tags**: Dynamic meta tag generation for each page
- **Structured Data**: Rich snippets for search engines
- **Performance**: Core Web Vitals optimization for better rankings
- **Accessibility**: WCAG 2.1 AA compliance for broader reach

### Deployment Options

- **Vercel**: Optimized for Next.js with automatic deployments
- **Netlify**: Static site hosting with form handling
- **AWS/GCP**: Custom deployment with full control
- **Docker**: Containerized deployment for consistent environments

## CMS Migration Strategy

This markdown CMS is designed for easy migration to a real CMS:

### WordPress Migration

1. **Content Structure**: Frontmatter maps to WordPress custom fields
2. **Markdown Content**: Can be converted to WordPress blocks or HTML
3. **Images**: Upload to WordPress media library
4. **API Integration**: Use WordPress REST API to fetch content

### Other CMS Options

- **Strapi**: Use the markdown structure as a template for content types
- **Contentful**: Map frontmatter to content model fields
- **Sanity**: Convert to Sanity schema and content structure

### Migration Steps

1. Set up the target CMS
2. Create content models matching the frontmatter structure
3. Import markdown content
4. Update the `lib/markdown.ts` functions to fetch from CMS API
5. Deploy with new CMS integration

## Customization

### Styling

- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Typography**: Modify font settings in `globals.css`
- **Components**: Edit component files in `src/components/`

### Content

- **Site Info**: Update metadata in `src/app/layout.tsx`
- **Navigation**: Modify navigation items in `src/components/RetroDesktop.tsx`
- **Contact Info**: Update contact details in `src/app/contact/page.tsx`

### Features

- **Blog**: Add blog functionality using the existing `content/blog/` structure
- **Search**: Implement search functionality for projects
- **Filtering**: Add category and technology filters to portfolio
- **Analytics**: Add Google Analytics or other tracking

## Performance

The site is optimized for performance through:

- **Static Generation**: Pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting for smaller bundle sizes
- **CSS Optimization**: Tailwind CSS purging for minimal CSS output
- **CDN Ready**: Static assets can be served from CDN

## Browser Support

The site supports modern browsers with the following features:

- **Windows 95/98 Interface**: Works best on desktop browsers
- **Responsive Design**: Mobile-friendly layout for all screen sizes
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: WCAG 2.1 AA compliance for screen readers and keyboard navigation

## Development Notes

### Key Components

- **RetroDesktop**: Main desktop interface with window management
- **PixelIcon**: Custom pixel art icons with isometric styling
- **WindowContent**: Dynamic content loading for different pages
- **Markdown Utilities**: Content parsing and HTML conversion

### State Management

The desktop interface uses React state for:

- Window positions and sizes
- Active window management
- Desktop icon selection
- Start menu visibility
- Drag and resize operations

### Performance Considerations

- **Window Management**: Efficient re-rendering with proper state updates
- **Content Loading**: Lazy loading of page content via API routes
- **Image Optimization**: Next.js Image component for optimal loading
- **CSS Optimization**: Tailwind purging for minimal CSS output

## Future Enhancements

### Planned Features

1. **Blog System**: Full blog functionality with categories and tags
2. **Search & Filtering**: Advanced search for projects and blog posts
3. **Contact Form Integration**: Real email functionality
4. **Analytics Dashboard**: Project performance tracking
5. **Dark Mode**: Alternative color scheme option
6. **Animations**: Enhanced micro-interactions and transitions

### Technical Improvements

1. **Performance**: Further optimization of bundle sizes and loading times
2. **Accessibility**: Enhanced screen reader support and keyboard navigation
3. **SEO**: Structured data and enhanced meta tags
4. **Testing**: Unit and integration tests for components
5. **Documentation**: Enhanced developer documentation

## Contributing

This is a personal portfolio project, but contributions are welcome for:

- Bug fixes and improvements
- Documentation updates
- Performance optimizations
- Accessibility enhancements

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Technical Philosophy

### Why This Stack

Next.js 15: The App Router provides server components, streaming, and built-in optimizations. It handles routing, image optimization, and code splitting automatically.

TypeScript: Type safety catches bugs before production. The learning curve is worth it. You'll write better code and spend less time debugging.

Tailwind CSS: Utility-first CSS might seem verbose at first, but once you get the hang of it, you'll build UIs faster. No more context switching between HTML and CSS files.

Markdown CMS: Simple, version-controlled, and easy to migrate. When you're ready for a real CMS, your content structure is already perfect.

### Code Quality Standards

This project follows a few key principles.

Simplicity first: if there's a simple way and a complex way, choose simple. Complexity should only be added when it solves a real problem.

Accessibility always: every interactive element has ARIA labels. Every image has alt text. Keyboard navigation works everywhere. This isn't optional. It's how the web should work.

Performance matters: fast sites rank better, convert better, and feel better. We optimize images, split code, and pre-render pages.

Type safety: TypeScript isn't just about catching errors. It makes code self-documenting and easier to refactor.

W3C compliant: semantic HTML, proper ARIA usage, keyboard navigation. The web standards exist for good reasons.

## Contact

For questions about this project or to discuss collaboration opportunities:

- **Email**: robwilliamsdeveloper@gmail.com
- **Website**: https://robotwilliams.com
- **GitHub**: https://github.com/robotwilliams

## 🧪 Testing

This project includes a comprehensive test suite built with Jest and React Testing Library. The tests are designed to be reusable, maintainable, and provide excellent coverage of all functionality.

### Quick Start

```bash
# Run all tests
npm test

# Run tests in watch mode (development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

### Test Structure

```
tests/
├── __mocks__/           # Mock data and functions
│   └── markdown.ts      # Mock markdown content
├── utils/               # Test utilities and helpers
│   └── test-utils.tsx   # Custom render functions and helpers
├── components/          # Component tests
│   └── PixelIcon.test.tsx
├── lib/                 # Utility function tests
│   └── markdown.test.ts
├── api/                 # API route tests
│   └── content.test.ts
├── integration/         # Integration tests
│   └── desktop-workflow.test.tsx
└── README.md           # Test documentation
```

### Test Categories

1. **Component Tests**: Test individual React components in isolation
2. **Integration Tests**: Test how components work together
3. **API Tests**: Test API routes and data fetching
4. **Utility Tests**: Test helper functions and utilities

### Example Test

```typescript
import { render, screen } from '@testing-library/react';
import PixelIcon from '@/components/PixelIcon';

describe('PixelIcon', () => {
  it('renders emoji icons correctly', () => {
    render(<PixelIcon icon="👤" size={32} />);
    expect(screen.getByText('👤')).toBeInTheDocument();
  });
});
```

### Coverage Goals

- **Components**: 90% coverage
- **Utilities**: 95% coverage
- **API Routes**: 85% coverage
- **Integration**: 80% coverage

### Adding New Tests

1. **Component Tests**: Use the template in `tests/components/`
2. **Utility Tests**: Use the template in `tests/lib/`
3. **API Tests**: Use the template in `tests/api/`
4. **Integration Tests**: Use the template in `tests/integration/`

For detailed testing documentation, see [tests/README.md](tests/README.md).

## 🚀 Deployment
