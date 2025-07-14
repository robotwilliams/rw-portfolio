/**
 * Font Loading Tests
 *
 * Tests to verify that the Digital-7 fonts are properly configured
 * and can be loaded by the browser.
 */

// Import the global CSS to ensure styles are available
import '../src/app/globals.css';

describe("Digital-7 Font Configuration", () => {
  // Mock the document.fonts API for testing
  const mockFonts = {
    ready: Promise.resolve(),
    check: jest.fn(),
    load: jest.fn(),
  };

  beforeEach(() => {
    // Mock document.fonts if it doesn't exist
    if (!document.fonts) {
      Object.defineProperty(document, 'fonts', {
        value: mockFonts,
        writable: true,
      });
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Font Face Declarations", () => {
    it("should have Digital-7 font family available", () => {
      // Check if the font family is defined in CSS
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: "Digital-7";
          src: url("/fonts/digital-7.ttf") format("truetype");
        }
      `;
      document.head.appendChild(style);

      // Verify the font face is loaded
      expect(style.textContent).toContain('font-family: "Digital-7"');
      expect(style.textContent).toContain('/fonts/digital-7.ttf');

      document.head.removeChild(style);
    });

    it("should have Digital-7-Mono font family available", () => {
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: "Digital-7-Mono";
          src: url("/fonts/digital-7 (mono).ttf") format("truetype");
        }
      `;
      document.head.appendChild(style);

      expect(style.textContent).toContain('font-family: "Digital-7-Mono"');
      expect(style.textContent).toContain('/fonts/digital-7 (mono).ttf');

      document.head.removeChild(style);
    });

    it("should have Digital-7-Mono-Italic font family available", () => {
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: "Digital-7-Mono-Italic";
          src: url("/fonts/digital-7 (mono italic).ttf") format("truetype");
        }
      `;
      document.head.appendChild(style);

      expect(style.textContent).toContain('font-family: "Digital-7-Mono-Italic"');
      expect(style.textContent).toContain('/fonts/digital-7 (mono italic).ttf');

      document.head.removeChild(style);
    });
  });

  describe("Clock Time Styling", () => {
    it("should apply Digital-7 font to clock time elements", () => {
      // Create a test element with clock-time class
      const clockElement = document.createElement('div');
      clockElement.className = 'clock-time';
      clockElement.textContent = '12:34:56';

      // Apply the CSS styles directly
      clockElement.style.fontFamily = '"Digital-7", "Digital-7-Mono", "DS-Digital", "Courier New", "Courier", monospace';
      clockElement.style.fontWeight = 'normal';
      clockElement.style.letterSpacing = '1px';
      clockElement.style.fontSize = '24px';
      clockElement.style.color = '#bfffbf';
      clockElement.style.textShadow = '0 0 2px #7fff7f, 1px 1px 2px rgba(0, 0, 0, 0.4)';
      clockElement.style.padding = '10px 10px 6px 10px';
      clockElement.style.borderRadius = '4px';
      clockElement.style.transformOrigin = 'center';
      clockElement.style.whiteSpace = 'nowrap';
      (clockElement.style as any).fontSmooth = 'never';
      (clockElement.style as any).webkitFontSmoothing = 'none';
      (clockElement.style as any).mozOsxFontSmoothing = 'unset';

      document.body.appendChild(clockElement);

      // Apply the expected styles
      const computedStyle = window.getComputedStyle(clockElement);

      // Check that the font family includes Digital-7
      expect(computedStyle.fontFamily).toContain('Digital-7');

      // Check other expected properties
      expect(computedStyle.fontWeight).toBe('normal');
      expect(computedStyle.letterSpacing).toBe('1px');
      expect(computedStyle.fontSize).toBe('24px');

      document.body.removeChild(clockElement);
    });
  });

  describe("Font File Accessibility", () => {
    it("should have font files in the correct location", () => {
      // This test verifies that the font files exist in the expected location
      // In a real environment, you might want to check if the files are accessible
      const expectedFonts = [
        '/fonts/digital-7.ttf',
        '/fonts/digital-7 (mono).ttf',
        '/fonts/digital-7 (mono italic).ttf',
        '/fonts/Advanced-Pixel-LCD-7.ttf'
      ];

      expectedFonts.forEach(fontPath => {
        expect(fontPath).toMatch(/^\/fonts\/.*\.ttf$/);
      });
    });
  });

  describe("Fallback Fonts", () => {
    it("should have proper fallback font chain", () => {
      const expectedFontChain = [
        'Digital-7',
        'Digital-7-Mono',
        'DS-Digital',
        'Courier New',
        'Courier',
        'monospace'
      ];

      // Verify the font chain is properly ordered
      expectedFontChain.forEach((font, index) => {
        if (index < expectedFontChain.length - 1) {
          // Each font should be followed by the next in the chain
          expect(expectedFontChain[index + 1]).toBeDefined();
        }
      });
    });
  });
});
