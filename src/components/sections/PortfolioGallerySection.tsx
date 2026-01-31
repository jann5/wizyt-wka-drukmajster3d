"use client";

/**
 * Portfolio Gallery Section - Horizontal Scroll Canvas
 *
 * Features (to be fully implemented):
 * - Horizontal scroll-driven layout
 * - 3D tilt effect on project cards
 * - Synchronized background gradient changes
 * - Interactive filter tags
 * - Parallax text effects
 */
export default function PortfolioGallerySection() {
  const projects = [
    {
      title: "Medical Device Prototype",
      client: "MedTech Innovations",
      material: "PC-ABS",
      time: "48 hours",
      category: "Medical",
    },
    {
      title: "Aerospace Bracket",
      client: "Aerospace Engineering Lab",
      material: "Nylon 12",
      time: "72 hours",
      category: "Aerospace",
    },
    {
      title: "Custom Tooling Jig",
      client: "Automotive Manufacturing",
      material: "ABS-M30",
      time: "24 hours",
      category: "Tooling",
    },
    {
      title: "Consumer Product Mock-up",
      client: "Consumer Electronics Startup",
      material: "ASA",
      time: "36 hours",
      category: "Prototyping",
    },
    {
      title: "Architectural Model",
      client: "Architecture Firm",
      material: "ABS-M30",
      time: "60 hours",
      category: "Architectural",
    },
    {
      title: "Industrial Component",
      client: "Industrial HVAC Systems",
      material: "PC-ABS",
      time: "48 hours",
      category: "Industrial",
    },
  ];

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#1A1F2C] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-4">
          Portfolio
        </h2>
        <p className="text-center text-neutral-300 mb-16">
          From concept to functional part - see the process
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover p-6 animate-fade-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-[#00D4AA]/20 to-[#FF6B00]/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-neutral-400">Project Image</span>
              </div>

              <div className="mb-2">
                <span className="text-xs text-[#FF6B00] font-semibold uppercase">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-300 mb-4">{project.client}</p>

              <div className="flex justify-between text-sm border-t border-white/10 pt-4">
                <div>
                  <span className="text-neutral-500">Material:</span>
                  <span className="text-[#00D4AA] ml-2 font-mono">
                    {project.material}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500">Time:</span>
                  <span className="text-white ml-2">{project.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TODO: Implement horizontal scroll mechanics */}
      {/* TODO: Add 3D tilt effect on hover */}
      {/* TODO: Add synchronized background gradients */}
    </section>
  );
}
