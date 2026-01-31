"use client";

/**
 * Hero Section - Immersive Cinematic Intro
 *
 * Features (to be fully implemented):
 * - Three.js particle system forming F170 shape
 * - Kinetic typography animation
 * - Background video with parallax layers
 * - Mouse tracking for parallax effect
 * - Morphing scroll indicator
 *
 * Current: Simplified version with gradients and animation
 */
export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0A0E17]">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 animate-fade-slide-up">
          GRZEGORZ NAWROT
        </h1>

        <p
          className="text-xl md:text-2xl text-neutral-300 mb-12 animate-fade-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Precision Engineering meets Additive Manufacturing
        </p>

        <div
          className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#pricing"
            className="px-8 py-4 bg-[#FF6B00] text-white rounded-full font-semibold hover:bg-[#ff7b1a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B00]/50"
          >
            Get Instant Quote
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 glass-card glass-card-hover text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00D4AA] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#00D4AA] rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* TODO: Add Three.js particles */}
      {/* TODO: Add background video */}
      {/* TODO: Add kinetic typography animation */}
      {/* TODO: Add mouse tracking parallax */}
    </section>
  );
}
