/**
 * Mock Markdown Data for Testing
 *
 * This file contains mock data that simulates the markdown content
 * used throughout the application. It includes sample pages, projects,
 * and content structures for comprehensive testing.
 */

export const mockPageData = {
  home: {
    title: "Robot Williams 🤖",
    description: "Online portfolio of Rob Williams. Frontend Maker.",
    hero_title: "Robot Williams 🤖",
    hero_subtitle: "Online portfolio of Rob Williams. Frontend Maker.",
    cta_text: "View My Work",
    cta_link: "/work",
  },
  about: {
    title: "About Robot Williams",
    description:
      "Learn more about Rob Williams, Frontend Maker and creative developer.",
  },
  contact: {
    title: "Contact Robot Williams",
    description: "Get in touch with Rob Williams for project inquiries.",
  },
};

export const mockProjects = [
  {
    slug: "evron",
    title: "Evron",
    description: "E-commerce platform and brand identity design",
    client: "Evron",
    duration: "3 months",
    date: "2021-03-15",
    category: "Web Development",
    technologies: ["Shopify", "Liquid", "CSS3", "JavaScript", "Figma"],
    live_url: "https://evron.com",
    github_url: "",
    gallery: [],
    content: "# Evron\n\nA complete e-commerce platform redesign...",
    featured: true,
  },
  {
    slug: "brand-design",
    title: "Edgewater Landscapes LLC",
    description: "Landscape design and development company website",
    client: "Edgewater Landscapes LLC",
    duration: "3 months",
    date: "2022-01-15",
    category: "Web Development",
    technologies: ["React", "Next.js", "Tailwind CSS", "Contentful CMS"],
    live_url: "https://edgewaterlandscapes.com",
    github_url: "",
    gallery: [],
    content:
      "# Edgewater Landscapes LLC\n\nA comprehensive website redesign...",
    featured: true,
  },
];

export const mockMarkdownContent = {
  home: `
# Robot Williams 🤖

Online portfolio of Rob Williams. Frontend Maker.

## Recent Work

Things I have worked on...

## Skills

My areas of focus...

### 1. Perspective

My past experiences have given me the ability to deliver a final execution that is intuitive and natural to the end user.

### 2. Future-Proofing

With so much of today's media being viewed beyond standard device size, it is crucial to design for media that literally cannot not be seen, but is always being experienced.

### 3. Process-Oriented

Interaction design is a complex mix of UX, UI, IA and unique use cases. Every new client project is a collection problems just waiting to be solved!

### 4. Results-Focused

I love to jump into a new system and improve it. Contact me for refactoring projects and CMS Maintenance.
  `,
  about: `
# About Robot Williams

I'm a passionate creative developer and designer with over 5 years of experience crafting digital experiences that make a difference.

## My Approach

I specialize in modern web development, UI/UX design, and creating solutions that bridge the gap between creativity and functionality.
  `,
  contact: `
# Get In Touch

I'm always excited to hear about new projects and opportunities. Whether you have a specific project in mind or just want to chat about digital experiences, I'd love to connect.

## Contact Information

- **Email**: hello@robw.dev
- **Location**: San Francisco, CA
- **Availability**: Available for new projects
  `,
};
