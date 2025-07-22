import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VintageButton from '@/components/VintageButton';

describe('VintageButton', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<VintageButton>Test Button</VintageButton>);
      const button = screen.getByRole('button', { name: 'Test Button' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('vintage-button', 'vintage-button-teal');
    });

    it('renders teal variant', () => {
      render(<VintageButton variant="teal">Teal Button</VintageButton>);
      const button = screen.getByRole('button', { name: 'Teal Button' });
      expect(button).toHaveClass('vintage-button-teal');
    });

    it('renders purple variant', () => {
      render(<VintageButton variant="purple">Purple Button</VintageButton>);
      const button = screen.getByRole('button', { name: 'Purple Button' });
      expect(button).toHaveClass('vintage-button-purple');
    });

    it('renders different sizes', () => {
      const { rerender } = render(<VintageButton size="sm">Small</VintageButton>);
      expect(screen.getByRole('button')).toHaveClass('px-2');

      rerender(<VintageButton size="md">Medium</VintageButton>);
      expect(screen.getByRole('button')).toHaveClass('px-4');

      rerender(<VintageButton size="lg">Large</VintageButton>);
      expect(screen.getByRole('button')).toHaveClass('px-6');
    });

    it('applies custom className', () => {
      render(<VintageButton className="custom-class">Custom</VintageButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Interactive States', () => {
    it('handles click events', () => {
      const handleClick = jest.fn();
      render(<VintageButton onClick={handleClick}>Click Me</VintageButton>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles disabled state', () => {
      const handleClick = jest.fn();
      render(<VintageButton disabled onClick={handleClick}>Disabled</VintageButton>);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:cursor-not-allowed');

      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles hover events', () => {
      const handleMouseEnter = jest.fn();
      render(<VintageButton onMouseEnter={handleMouseEnter}>Hover Me</VintageButton>);

      const button = screen.getByRole('button');
      fireEvent.mouseEnter(button);

      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    });
  });

  describe('Form Integration', () => {
    it('renders as submit button', () => {
      render(<VintageButton type="submit">Submit</VintageButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('renders as reset button', () => {
      render(<VintageButton type="reset">Reset</VintageButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });

    it('renders as button type', () => {
      render(<VintageButton type="button">Button</VintageButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Accessibility', () => {
    it('supports aria-label', () => {
      render(<VintageButton aria-label="Save document">Save</VintageButton>);
      const button = screen.getByRole('button', { name: 'Save document' });
      expect(button).toBeInTheDocument();
    });

    it('supports aria-describedby', () => {
      render(
        <div>
          <VintageButton aria-describedby="help-text">Help</VintageButton>
          <div id="help-text">Help information</div>
        </div>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('has proper focus handling', () => {
      render(<VintageButton>Focusable</VintageButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus:outline-none');
    });
  });

  describe('Content', () => {
    it('renders text content', () => {
      render(<VintageButton>Button Text</VintageButton>);
      expect(screen.getByText('Button Text')).toBeInTheDocument();
    });

    it('renders HTML content', () => {
      render(
        <VintageButton>
          <span>HTML</span> <strong>Content</strong>
        </VintageButton>
      );
      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders emoji content', () => {
      render(<VintageButton>🚀 Launch</VintageButton>);
      expect(screen.getByText('🚀 Launch')).toBeInTheDocument();
    });
  });
}); 