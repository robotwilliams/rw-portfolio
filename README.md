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
- **TypeScript**: Type-safe development with strict type checking
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **React 19**: Latest React with concurrent features and improved performance

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

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Markdown CMS**: Content managed through markdown files with frontmatter
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Easy CMS Migration**: Designed to easily transition to WordPress or other CMS platforms
- **Interactive Portfolio**: Windows 98-style project grid with draggable project windows
- **Authentic Icons**: Pixel-perfect Windows 98 icons throughout the interface
- **Contact Form**: Functional contact form with validation
- **Blog Ready**: Structure in place for future blog functionality

## Project Structure

```
rw-portfolio/
├── content/                    # Markdown CMS content
│   ├── pages/                 # Static pages (home, about, contact)
│   ├── portfolio/             # Portfolio projects
│   └── blog/                  # Future blog posts
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── work/              # Work/portfolio pages
│   │   │   └── [slug]/        # Individual project pages
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   └── Layout.tsx         # Main layout with navigation
│   └── lib/                   # Utility functions
│       └── markdown.ts        # Markdown parsing utilities
├── public/                    # Static assets
└── package.json
```

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
title: "Page Title"
description: "Page description for SEO"
page_title: "Display Title"
page_subtitle: "Display subtitle"
# Additional frontmatter fields
---

# Page Content

Markdown content goes here...
```

### Portfolio Projects

Projects are stored in `content/portfolio/` with rich metadata:

```markdown
---
title: "Project Name"
description: "Project description"
slug: "project-slug"
category: "Web Development"
client: "Client Name"
date: "2024-01-15"
duration: "3 months"
technologies: ["React", "Node.js", "TypeScript"]
image: "/images/project-image.jpg"
gallery: ["/images/gallery1.jpg", "/images/gallery2.jpg"]
live_url: "https://project.com"
github_url: "https://github.com/user/project"
featured: true
---

# Project Content

Detailed project description...
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

- **Pages**: Edit markdown files in `content/pages/`
- **Projects**: Edit markdown files in `content/portfolio/`
- **Styling**: Modify Tailwind classes in component files
- **Layout**: Update components in `src/components/`

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

## Contact

For questions about this project or to discuss collaboration opportunities:

- **Email**: hello@robw.dev
- **Website**: https://robw.dev
- **GitHub**: https://github.com/robw

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
import { render, screen } from "@testing-library/react";
import PixelIcon from "@/components/PixelIcon";

describe("PixelIcon", () => {
  it("renders emoji icons correctly", () => {
    render(<PixelIcon icon="👤" size={32} />);
    expect(screen.getByText("👤")).toBeInTheDocument();
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
