"use client";

/**
 * F170 Showcase Section - Interactive Device Display
 *
 * Features (to be fully implemented):
 * - Interactive 3D model with drag-to-rotate
 * - Clickable hotspots with specifications
 * - Data visualizations and comparisons
 * - Material showcase with 3D previews
 */
export default function F170ShowcaseSection() {
  const specs = [
    { label: "Build Volume", value: "254 × 254 × 254 mm" },
    { label: "Layer Resolution", value: "0.178 - 0.33 mm" },
    { label: "Technology", value: "Fused Deposition Modeling" },
    { label: "Heated Chamber", value: "Up to 80°C" },
  ];

  const materials = ["ABS-M30", "ASA", "PC-ABS", "Nylon 12"];

  return (
    <section id="f170" className="relative w-full min-h-screen bg-[#0A0E17] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-16 animate-fade-slide-up">
          Stratasys F170
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Model Placeholder */}
          <div className="glass-card glass-card-hover p-8 h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#00D4AA] to-[#FF6B00] rounded-lg mx-auto mb-6 animate-pulse" />
              <p className="text-neutral-300">
                Interactive 3D model coming soon
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                Drag to rotate • Click hotspots for details
              </p>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Technical Specifications
            </h3>

            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className="glass-card p-6 animate-fade-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">{spec.label}</span>
                  <span className="text-[#00D4AA] font-mono font-semibold">
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Available Materials
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {materials.map((material, i) => (
                  <div
                    key={material}
                    className="glass-card glass-card-hover p-4 text-center animate-fade-slide-up"
                    style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                  >
                    <span className="text-white font-semibold">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
