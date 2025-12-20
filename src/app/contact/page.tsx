import { getPageContent, markdownToHtml } from "@/lib/markdown";
import { Metadata } from "next";

// Force dynamic rendering to ensure admin updates are immediately visible
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Contact Page Metadata
 */
export const metadata: Metadata = {
  title: "Contact Robot Williams",
  description: "Get in touch with Rob Williams for your next project.",
};

/**
 * Contact Page Component
 *
 * This page displays contact information and form from markdown content.
 * Content is loaded from the markdown CMS system, making it easy
 * to update without touching code.
 */
export default async function ContactPage() {
  // Load page content from markdown CMS
  const content = getPageContent("contact");
  const htmlContent = await markdownToHtml(content);
  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header - Windows 98 Style */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-5">
          <h1 className="text-2xl font-bold">Contact Robot Williams</h1>
          <p className="text-sm" style={{ color: '#2F4F4F' }}>
            Get in touch with Rob Williams for your next project.
          </p>
        </div>

        {/* Google Map - Seattle Space Needle - Windows 98 Style */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-5">
          <h2 className="text-lg font-bold mb-4">📍 Location</h2>
          <div className="bg-[#ffffff] border border-[#808080] p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d-122.3493!3d47.6205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154f4f66dd1d%3A0x385b22aac5770c0!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&q=Space+Needle+Seattle+WA"
              width="100%"
              height="450"
              style={{ border: "2px solid #808080", minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seattle Space Needle Location"
            />
          </div>
          <p className="text-sm mt-3" style={{ color: '#2F4F4F' }}>
            Located in Seattle, Washington - near the Space Needle
          </p>
        </div>

        {/* Main Content - Windows 98 Style */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
          <h2 className="text-lg font-bold mb-4">📄 Contact Information</h2>
          <div
            className="prose prose-sm max-w-none"
            style={
              {
                "--tw-prose-body": "#0077AA",
                "--tw-prose-headings": "#000080",
                "--tw-prose-links": "#000080",
              } as React.CSSProperties
            }
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
}
