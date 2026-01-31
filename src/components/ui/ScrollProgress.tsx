"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress - Visual scroll progress indicator
 *
 * Shows user's scroll position with changing colors.
 * Desktop: Colorful vertical bar on right edge
 * Mobile: Thin line at top
 *
 * Color progression:
 * - 0%: Deep Space Blue
 * - 50%: Quantum Teal
 * - 100%: Stratasys Orange
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate color based on scroll progress
  const getProgressColor = (progress: number) => {
    if (progress < 50) {
      // Transition from Deep Space Blue to Quantum Teal
      const factor = progress / 50;
      return `rgb(${Math.round(10 + (0 - 10) * factor)}, ${Math.round(
        14 + (212 - 14) * factor
      )}, ${Math.round(23 + (170 - 23) * factor)})`;
    } else {
      // Transition from Quantum Teal to Stratasys Orange
      const factor = (progress - 50) / 50;
      return `rgb(${Math.round(0 + (255 - 0) * factor)}, ${Math.round(
        212 + (107 - 212) * factor
      )}, ${Math.round(170 + (0 - 170) * factor)})`;
    }
  };

  const progressColor = getProgressColor(scrollProgress);

  return (
    <>
      {/* Desktop: Vertical bar on right */}
      <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <div className="relative w-1 h-64 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 transition-all duration-150 ease-out rounded-full"
            style={{
              height: `${scrollProgress}%`,
              backgroundColor: progressColor,
              boxShadow: `0 0 20px ${progressColor}`,
            }}
          />
        </div>

        {/* Percentage tooltip on hover */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="text-xs font-mono text-white/80">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal bar at top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}`,
          }}
        />
      </div>
    </>
  );
}
