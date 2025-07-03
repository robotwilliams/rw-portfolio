"use client";

import { useState } from "react";

/**
 * Contact Page Component
 *
 * This page provides multiple ways for visitors to get in touch:
 * - Contact form for project inquiries
 * - Contact information display
 * - Social media links
 * - Location and availability information
 *
 * The contact form includes:
 * - Form validation
 * - Loading states
 * - Success/error feedback
 * - Responsive design
 *
 * Note: This is a client component because it uses React state
 * for form management and user interactions.
 */
export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // UI state management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  /**
   * Handle Form Submission
   *
   * Processes the contact form submission.
   * Currently simulates a submission with a delay.
   * In a real implementation, this would send the data
   * to an API endpoint or email service.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just show success message
    // TODO: Implement actual form submission to API or email service
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  /**
   * Handle Input Changes
   *
   * Updates the form state when users type in form fields.
   * Uses a generic handler that works for both input and textarea elements.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      {/* 
        Page Header
        Main title and description that introduces the contact page
        and encourages visitors to get in touch.
      */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h1>
        <p className="text-lg mb-6">
          Ready to start your next project? I&apos;d love to hear from you.
        </p>
      </div>

      {/* 
        Main Content Area
        Two-column layout with contact form and contact information.
        Responsive design that stacks on mobile devices.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 
          Contact Form Section
          Form for project inquiries with validation and feedback.
          Uses retro styling to match the Windows 95/98 theme.
        */}
        <div>
          <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-600 text-white">
              <p>Thank you for your message! I&apos;ll get back to you soon.</p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="retro-input w-full"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="retro-input w-full"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="retro-input w-full"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="retro-textarea w-full"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="retro-button w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* 
          Contact Information Section
          Displays contact details, location, availability, and social links.
          Provides multiple ways for visitors to connect.
        */}
        <div className="space-y-6">
          {/* Introduction */}
          <div>
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4">
              I&apos;m always excited to hear about new projects and
              opportunities. Whether you have a specific project in mind or just
              want to chat about digital experiences, I&apos;d love to connect.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Email Contact */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">📧</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Email</h3>
                <a href="mailto:hello@robw.dev" className="retro-link">
                  hello@robw.dev
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Availability</h3>
                <p>Available for new projects</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/robw"
                className="retro-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/robw"
                className="retro-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/robw"
                className="retro-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* 
            Additional Information
            Provides context about typical projects and response times.
            Helps set expectations for visitors.
          */}
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold mb-2">What to Expect</h4>
            <ul className="text-sm space-y-1">
              <li>• Response within 24 hours</li>
              <li>• Free initial consultation</li>
              <li>• Detailed project proposals</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
