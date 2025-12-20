"use client";

import React from 'react';
import VintageButton from '@/components/VintageButton';

export default function VintageButtonsDemo() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Vintage OS Button Demo</h1>

      {/* Teal Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Teal Variant</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton variant="teal" size="sm">
            Small Teal
          </VintageButton>
          <VintageButton variant="teal" size="md">
            Medium Teal
          </VintageButton>
          <VintageButton variant="teal" size="lg">
            Large Teal
          </VintageButton>
          <VintageButton variant="teal" disabled>
            Disabled Teal
          </VintageButton>
        </div>
      </section>

      {/* Purple Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Purple Variant</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton variant="purple" size="sm">
            Small Purple
          </VintageButton>
          <VintageButton variant="purple" size="md">
            Medium Purple
          </VintageButton>
          <VintageButton variant="purple" size="lg">
            Large Purple
          </VintageButton>
          <VintageButton variant="purple" disabled>
            Disabled Purple
          </VintageButton>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton
            variant="teal"
            onClick={() => alert('Teal button clicked!')}
          >
            Click Me (Teal)
          </VintageButton>
          <VintageButton
            variant="purple"
            onClick={() => alert('Purple button clicked!')}
          >
            Click Me (Purple)
          </VintageButton>
          <VintageButton
            variant="teal"
            onMouseEnter={() => {}}
          >
            Hover Me
          </VintageButton>
        </div>
      </section>

      {/* Form Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Examples</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton variant="teal" type="submit">
            Submit Form
          </VintageButton>
          <VintageButton variant="purple" type="reset">
            Reset Form
          </VintageButton>
          <VintageButton variant="teal" type="button">
            Cancel
          </VintageButton>
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Styling</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton
            variant="teal"
            className="w-32"
          >
            Fixed Width
          </VintageButton>
          <VintageButton
            variant="purple"
            className="h-12"
          >
            Fixed Height
          </VintageButton>
          <VintageButton
            variant="teal"
            className="rounded-none border-4"
          >
            Custom Border
          </VintageButton>
        </div>
      </section>

      {/* Accessibility */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accessibility</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <VintageButton
            variant="teal"
            aria-label="Save document"
          >
            Save
          </VintageButton>
          <VintageButton
            variant="purple"
            aria-describedby="help-text"
          >
            Help
          </VintageButton>
          <div id="help-text" className="sr-only">
            Click for help information
          </div>
        </div>
      </section>
    </div>
  );
}
