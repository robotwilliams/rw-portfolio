# VintageButton Component

A comprehensive vintage OS button component that matches the Windows 98 aesthetic with authentic 3D effects, gleam, and shadow styling.

## Features

- **Authentic Windows 98 Design**: 3D button styling with proper outset/inset borders
- **Two Color Variants**: Teal and purple themes matching the site's color scheme
- **Multiple Sizes**: Small, medium, and large button sizes
- **Interactive States**: Hover, active, and disabled states with smooth animations
- **Full Button Functionality**: Supports all standard button props and events
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA support and keyboard navigation

## Usage

### Basic Usage

```tsx
import VintageButton from '@/components/VintageButton';

// Teal variant (default)
<VintageButton variant="teal">
  Click Me
</VintageButton>

// Purple variant
<VintageButton variant="purple">
  Click Me
</VintageButton>
```

### Size Variants

```tsx
<VintageButton size="sm">Small Button</VintageButton>
<VintageButton size="md">Medium Button</VintageButton>
<VintageButton size="lg">Large Button</VintageButton>
```

### Interactive Examples

```tsx
// With click handler
<VintageButton
  variant="teal"
  onClick={() => console.log('Button clicked!')}
>
  Click Me
</VintageButton>

// Disabled state
<VintageButton variant="purple" disabled>
  Disabled Button
</VintageButton>

// Form buttons
<VintageButton type="submit" variant="teal">
  Submit
</VintageButton>
<VintageButton type="reset" variant="purple">
  Reset
</VintageButton>
```

### Custom Styling

```tsx
<VintageButton variant="teal" className="w-32 h-12">
  Custom Size
</VintageButton>
```

## Props

| Prop        | Type                   | Default  | Description               |
| ----------- | ---------------------- | -------- | ------------------------- |
| `variant`   | `'teal' \| 'purple'`   | `'teal'` | Color theme variant       |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`   | Button size               |
| `disabled`  | `boolean`              | `false`  | Disabled state            |
| `children`  | `React.ReactNode`      | -        | Button content            |
| `className` | `string`               | -        | Additional CSS classes    |
| `...props`  | `ButtonHTMLAttributes` | -        | All standard button props |

## Styling Details

### Color Schemes

**Teal Variant:**

- Background: `linear-gradient(135deg, #00a0a0 0%, #008080 50%, #006060 100%)`
- Border: `#00c0c0 #004040 #004040 #00c0c0` (outset effect)
- Text: `#ffffff`

**Purple Variant:**

- Background: `linear-gradient(135deg, #a078d8 0%, #9368d8 50%, #7a58b8 100%)`
- Border: `#b088e8 #6a48a8 #6a48a8 #b088e8` (outset effect)
- Text: `#ffffff`

### 3D Effects

- **Default State**: `border-style: outset` with light top/left, dark bottom/right
- **Hover State**: Lighter background, enhanced gleam effect, slight upward movement
- **Active State**: `border-style: inset` with reversed border colors, pressed appearance

### Animations

- **Transition**: `all 0.1s ease` for smooth state changes
- **Hover**: `translateY(-1px)` for subtle lift effect
- **Active**: `translateY(0px)` to return to original position
- **Filter Effects**: Contrast and saturation adjustments for enhanced retro look

## Implementation Notes

### CSS Classes

The component uses the following CSS classes:

- `.vintage-button`: Base button styling
- `.vintage-button-teal`: Teal variant styling
- `.vintage-button-purple`: Purple variant styling
- Size classes: `.px-2`, `.px-4`, `.px-6` for different sizes

### Dependencies

- `clsx`: For conditional class name handling
- `tailwind-merge`: For proper Tailwind CSS class merging
- Custom CSS in `globals.css` for vintage styling

### Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Pixel-perfect rendering with `image-rendering: pixelated`

## Migration Guide

### Replacing Old Buttons

**Before:**

```tsx
<button className="retro-button">Old Button</button>
```

**After:**

```tsx
<VintageButton variant="teal">New Button</VintageButton>
```

### Form Buttons

**Before:**

```tsx
<button type="submit" className="retro-button w-full">
  Submit
</button>
```

**After:**

```tsx
<VintageButton type="submit" variant="teal" className="w-full">
  Submit
</VintageButton>
```

## Examples in the Codebase

- **Contact Page**: Form submit and reset buttons
- **Demo Page**: `/vintage-buttons` - Comprehensive showcase
- **Future Integration**: Can replace all existing `.retro-button` instances

## Accessibility Features

- Proper focus states with `outline: none`
- ARIA label support
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios for both variants
- Disabled state properly handled

## Performance Considerations

- CSS-only animations (no JavaScript required)
- Minimal bundle size impact
- Efficient re-renders with React.memo (if needed)
- No external dependencies for styling
