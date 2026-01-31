"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider - Cinematic smooth scroll using Lenis
 *
 * Provides butter-smooth scroll experience throughout the site.
 * Integrates with GSAP ScrollTrigger for scroll-driven animations.
 *
 * Features:
 * - Smooth scrolling with customizable lerp
 * - Disabled on mobile (performance)
 * - Respects prefers-reduced-motion
 * - Auto-cleanup on unmount
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if mobile device (touch support)
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Skip smooth scroll on mobile or if reduced motion preferred
    if (isMobile || prefersReducedMotion) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness (0-1, lower = smoother)
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: Integrate with GSAP ScrollTrigger if available
    if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
      lenis.on("scroll", (window as any).ScrollTrigger.update);
    }

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
