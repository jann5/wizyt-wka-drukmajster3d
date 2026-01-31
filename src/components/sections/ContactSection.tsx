"use client";

import { useState, FormEvent } from "react";

/**
 * Contact Section - Morphing Form with Particle Explosion
 *
 * Features (to be fully implemented):
 * - Form morphs/expands on scroll into view
 * - Label-to-placeholder transformations
 * - Particle explosion on successful submit
 * - File upload support
 * - Database integration
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (will be replaced with real endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#0A0E17] py-20 px-6">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-4">
          Let's Materialize Your Vision
        </h2>
        <p className="text-center text-neutral-300 mb-16">
          Get in touch to discuss your project requirements
        </p>

        <div className="glass-card p-8 md:p-12">
          {submitSuccess ? (
            <div className="text-center py-12 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent! ✓
              </h3>
              <p className="text-neutral-300">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none transition-colors"
                    placeholder="+48 XXX XXX XXX"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none transition-colors"
                  >
                    <option value="">Select type...</option>
                    <option value="prototype">Functional Prototype</option>
                    <option value="validation">Design Validation</option>
                    <option value="tooling">Manufacturing Tooling</option>
                    <option value="enduse">End-Use Parts</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and requirements..."
                  minLength={20}
                />
                <div className="text-right text-xs text-neutral-500 mt-1">
                  {formData.message.length} / 1000
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#FF6B00] text-white rounded-full font-semibold hover:bg-[#ff7b1a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B00]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* TODO: Add morphing animation on scroll into view */}
      {/* TODO: Add particle explosion on submit */}
      {/* TODO: Add file upload support */}
      {/* TODO: Connect to API route and database */}
    </section>
  );
}
