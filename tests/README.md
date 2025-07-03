# Test Suite Documentation

This directory contains a comprehensive test suite for the Rob Williams Portfolio project. The tests are designed to be reusable, maintainable, and provide excellent coverage of all functionality.

## 🚀 Quick Start

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

### Test Structure

```
tests/
├── __mocks__/           # Mock data and functions
│   └── markdown.ts      # Mock markdown content
├── utils/               # Test utilities and helpers
│   └── test-utils.tsx   # Custom render functions and helpers
├── components/          # Component tests
│   ├── PixelIcon.test.tsx
│   ├── RetroDesktop.test.tsx
│   ├── ProjectWindow.test.tsx
│   └── WindowContent.test.tsx
├── lib/                 # Utility function tests
│   └── markdown.test.ts
├── api/                 # API route tests
│   └── content.test.ts
└── pages/               # Page component tests
    ├── home.test.tsx
    ├── about.test.tsx
    ├── contact.test.tsx
    └── work.test.tsx
```

## 📋 Test Categories

### 1. Component Tests

Test individual React components in isolation.

**Example:**

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

### 2. Integration Tests

Test how components work together.

**Example:**

```typescript
import { render, screen } from "@testing-library/react";
import RetroDesktop from "@/components/RetroDesktop";

describe("RetroDesktop Integration", () => {
  it("opens windows when desktop icons are clicked", () => {
    render(<RetroDesktop />);
    const aboutIcon = screen.getByText("About");
    aboutIcon.click();
    expect(screen.getByText("About Robot Williams")).toBeInTheDocument();
  });
});
```

### 3. API Tests

Test API routes and data fetching.

**Example:**

```typescript
import { mockFetch } from "../utils/test-utils";
import { getAllPortfolioProjects } from "@/lib/markdown";

describe("Portfolio API", () => {
  it("fetches all projects successfully", async () => {
    const mockProjects = [{ title: "Test Project" }];
    global.fetch = mockFetch({ success: true, data: mockProjects });

    const projects = await getAllPortfolioProjects();
    expect(projects).toHaveLength(1);
    expect(projects[0].title).toBe("Test Project");
  });
});
```

### 4. Utility Tests

Test helper functions and utilities.

**Example:**

```typescript
import { markdownToHtml } from "@/lib/markdown";

describe("Markdown Utilities", () => {
  it("converts markdown to HTML", async () => {
    const markdown = "# Test\n\nThis is a test.";
    const html = await markdownToHtml(markdown);
    expect(html).toContain("<h1>Test</h1>");
    expect(html).toContain("<p>This is a test.</p>");
  });
});
```

## 🛠️ Test Utilities

### Custom Render Function

Use the custom render function for components that need context providers:

```typescript
import { render } from "../utils/test-utils";

// This automatically includes ProjectWindowContextProvider
render(<ComponentThatNeedsContext />);
```

### Mock Data

Use predefined mock data for consistent testing:

```typescript
import { mockProjects, mockPageData } from "../__mocks__/markdown";

// Use mock data in tests
const testProject = mockProjects[0];
```

### Window Dimension Testing

Test responsive behavior:

```typescript
import { setWindowDimensions } from "../utils/test-utils";

// Test mobile layout
setWindowDimensions(375, 667);
render(<ResponsiveComponent />);

// Test desktop layout
setWindowDimensions(1920, 1080);
render(<ResponsiveComponent />);
```

### User Interaction Testing

Test user interactions:

```typescript
import { userInteractions } from "../utils/test-utils";

const element = screen.getByRole("button");
userInteractions.click(element);
userInteractions.mouseMove(element, 100, 200);
```

## 📊 Coverage Goals

- **Components**: 90% coverage
- **Utilities**: 95% coverage
- **API Routes**: 85% coverage
- **Integration**: 80% coverage

## 🧪 Test Patterns

### 1. Component Testing Pattern

```typescript
describe("ComponentName", () => {
  describe("Rendering", () => {
    it("renders correctly with required props", () => {
      // Test basic rendering
    });

    it("renders correctly with optional props", () => {
      // Test with optional props
    });
  });

  describe("Interactions", () => {
    it("handles user interactions correctly", () => {
      // Test clicks, hovers, etc.
    });
  });

  describe("Edge Cases", () => {
    it("handles edge cases gracefully", () => {
      // Test error states, empty data, etc.
    });
  });
});
```

### 2. API Testing Pattern

```typescript
describe("API Endpoint", () => {
  beforeEach(() => {
    // Setup mocks
  });

  afterEach(() => {
    // Cleanup
  });

  it("returns correct data for valid requests", async () => {
    // Test success case
  });

  it("handles errors gracefully", async () => {
    // Test error case
  });
});
```

### 3. Integration Testing Pattern

```typescript
describe("Feature Integration", () => {
  it("completes full user workflow", async () => {
    // 1. Setup initial state
    // 2. Perform user actions
    // 3. Verify final state
  });
});
```

## 🔧 Adding New Tests

### 1. Component Test Template

```typescript
/**
 * ComponentName Tests
 *
 * Tests for the ComponentName component that [brief description].
 * Covers [list of key functionality].
 */

import { render, screen } from "@testing-library/react";
import ComponentName from "@/components/ComponentName";

describe("ComponentName", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<ComponentName />);
      expect(screen.getByText("Expected Text")).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    it("accepts and uses props correctly", () => {
      render(<ComponentName prop="value" />);
      // Test prop usage
    });
  });

  describe("Interactions", () => {
    it("responds to user interactions", () => {
      render(<ComponentName />);
      const button = screen.getByRole("button");
      button.click();
      // Verify interaction result
    });
  });
});
```

### 2. Utility Test Template

```typescript
/**
 * Utility Function Tests
 *
 * Tests for utility functions that [brief description].
 */

import { utilityFunction } from "@/lib/utility";

describe("utilityFunction", () => {
  it("processes input correctly", () => {
    const input = "test input";
    const result = utilityFunction(input);
    expect(result).toBe("expected output");
  });

  it("handles edge cases", () => {
    const result = utilityFunction("");
    expect(result).toBe("default output");
  });
});
```

## 🐛 Debugging Tests

### Common Issues

1. **Component not rendering**: Check if component needs context providers
2. **Async operations**: Use `waitFor` or `findBy` queries
3. **Mock data issues**: Verify mock data structure matches expected format
4. **Path resolution**: Ensure `@/` paths are correctly mapped in Jest config

### Debug Commands

```bash
# Run specific test file
npm test -- tests/components/PixelIcon.test.tsx

# Run tests with verbose output
npm test -- --verbose

# Run tests and show console output
npm test -- --silent=false

# Debug specific test
npm test -- --testNamePattern="renders correctly"
```

## 📈 Performance Testing

### Component Performance

```typescript
import { render } from "@testing-library/react";
import { performance } from "perf_hooks";

it("renders within performance budget", () => {
  const start = performance.now();
  render(<HeavyComponent />);
  const end = performance.now();

  expect(end - start).toBeLessThan(100); // 100ms budget
});
```

### Bundle Size Testing

```typescript
import { getBundleSize } from "../utils/bundle-analyzer";

it("maintains acceptable bundle size", () => {
  const size = getBundleSize("ComponentName");
  expect(size).toBeLessThan(50); // 50KB budget
});
```

## 🔄 Continuous Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run test:ci
      - run: npm run lint
```

## 📚 Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Descriptive Test Names**: Test names should describe the expected behavior
3. **Keep Tests Simple**: Each test should verify one specific thing
4. **Use Setup and Teardown**: Use `beforeEach` and `afterEach` for common setup
5. **Mock External Dependencies**: Don't test third-party libraries
6. **Test Error States**: Always test how components handle errors
7. **Use Accessibility Queries**: Prefer `getByRole` over `getByText` when possible
8. **Maintain Test Data**: Keep mock data up to date with real data structures

## 🎯 Test Checklist

Before committing new tests:

- [ ] Tests cover all major functionality
- [ ] Tests include error cases and edge cases
- [ ] Tests use descriptive names
- [ ] Tests are independent and don't rely on each other
- [ ] Tests clean up after themselves
- [ ] Tests run quickly (< 5 seconds for component tests)
- [ ] Tests provide good error messages when they fail
- [ ] Tests follow the established patterns
- [ ] Coverage meets the defined thresholds

This test suite provides a solid foundation for maintaining code quality and catching regressions as the project evolves.
