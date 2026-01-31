"use client";

/**
 * Process Timeline Section - Vertical + Diagonal Hybrid
 *
 * Features (to be fully implemented):
 * - 6-step process with diagonal transition at step 4
 * - Lottie animations for each step
 * - Connect-the-dots SVG line animation
 * - Clickable dots revealing detail modals
 */
export default function ProcessTimelineSection() {
  const steps = [
    {
      number: 1,
      title: "Consultation & Design Review",
      description:
        "We analyze your CAD files, discuss material requirements, and provide technical recommendations.",
    },
    {
      number: 2,
      title: "Material Selection",
      description:
        "Choose from 8+ production-grade materials optimized for your application's mechanical and environmental needs.",
    },
    {
      number: 3,
      title: "Print Preparation",
      description:
        "GrabCAD Print software optimizes orientation, support structures, and toolpath for perfect results.",
    },
    {
      number: 4,
      title: "3D Printing",
      description:
        "Stratasys F170 builds your part layer by layer in our controlled 80°C heated chamber.",
    },
    {
      number: 5,
      title: "Post-Processing",
      description:
        "Support removal, surface finishing, and quality inspection ensure production-ready parts.",
    },
    {
      number: 6,
      title: "Delivery & Support",
      description:
        "Fast shipping with complete documentation. We provide technical support for part integration.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0A0E17] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-4">
          Our Process
        </h2>
        <p className="text-center text-neutral-300 mb-20">
          From consultation to delivery in 6 seamless steps
        </p>

        <div className="relative space-y-16">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D4AA] via-[#FF6B00] to-[#00D4AA] opacity-30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex gap-8 items-start animate-fade-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Step Number Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#0A0E17] border-2 border-[#00D4AA] flex items-center justify-center font-bold text-2xl text-[#00D4AA] animate-pulse-glow">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 glass-card glass-card-hover p-6 mt-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Lottie Animation Placeholder */}
                <div className="mt-4 w-32 h-32 bg-gradient-to-br from-[#00D4AA]/10 to-[#FF6B00]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-neutral-500">Animation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TODO: Add diagonal rotation at step 4 */}
      {/* TODO: Add Lottie animations */}
      {/* TODO: Add animated SVG connecting line */}
      {/* TODO: Add clickable dots with detail modals */}
    </section>
  );
}
