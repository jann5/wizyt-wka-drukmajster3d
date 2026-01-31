"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor - Context-aware morphing cursor
 *
 * Features:
 * - Default: 24px circle with trail effect
 * - Hover links/buttons: Expands to 40px with text
 * - Hover draggable: Shows drag hint
 * - Trail effect: 3 lagging circles
 * - Hidden on touch devices
 * - Respects prefers-reduced-motion
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);
  const trail3Ref = useRef<HTMLDivElement>(null);

  const [cursorState, setCursorState] = useState<
    "default" | "hover" | "drag" | "text"
  >("default");

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trail1Pos = useRef({ x: 0, y: 0 });
  const trail2Pos = useRef({ x: 0, y: 0 });
  const trail3Pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Handle hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorState("hover");
      } else if (target.dataset.draggable === "true") {
        setCursorState("drag");
      } else if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    // Animation loop with lerp
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      // Main cursor - fastest
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

      // Trail 1 - medium speed
      trail1Pos.current.x = lerp(
        trail1Pos.current.x,
        cursorPos.current.x,
        0.1
      );
      trail1Pos.current.y = lerp(
        trail1Pos.current.y,
        cursorPos.current.y,
        0.1
      );

      // Trail 2 - slower
      trail2Pos.current.x = lerp(
        trail2Pos.current.x,
        trail1Pos.current.x,
        0.08
      );
      trail2Pos.current.y = lerp(
        trail2Pos.current.y,
        trail1Pos.current.y,
        0.08
      );

      // Trail 3 - slowest
      trail3Pos.current.x = lerp(
        trail3Pos.current.x,
        trail2Pos.current.x,
        0.05
      );
      trail3Pos.current.y = lerp(
        trail3Pos.current.y,
        trail2Pos.current.y,
        0.05
      );

      // Update DOM
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      if (trail1Ref.current) {
        trail1Ref.current.style.transform = `translate(${trail1Pos.current.x}px, ${trail1Pos.current.y}px)`;
      }
      if (trail2Ref.current) {
        trail2Ref.current.style.transform = `translate(${trail2Pos.current.x}px, ${trail2Pos.current.y}px)`;
      }
      if (trail3Ref.current) {
        trail3Ref.current.style.transform = `translate(${trail3Pos.current.x}px, ${trail3Pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    // Start listeners and animation
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Hidden on touch devices
  if (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  ) {
    return null;
  }

  // Hidden if reduced motion
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  const getCursorSize = () => {
    switch (cursorState) {
      case "hover":
        return 40;
      case "drag":
        return 36;
      case "text":
        return 20;
      default:
        return 24;
    }
  };

  const cursorSize = getCursorSize();

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          marginLeft: `-${cursorSize / 2}px`,
          marginTop: `-${cursorSize / 2}px`,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-200"
          style={{
            borderColor: "#00D4AA",
            backgroundColor:
              cursorState === "hover" ? "#00D4AA" : "transparent",
            color: cursorState === "hover" ? "#0A0E17" : "transparent",
          }}
        >
          {cursorState === "hover" && "→"}
          {cursorState === "drag" && "✥"}
        </div>
      </div>

      {/* Trail 1 */}
      <div
        ref={trail1Ref}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-4 h-4 -ml-2 -mt-2 rounded-full border border-[#00D4AA] opacity-60 mix-blend-difference"
      />

      {/* Trail 2 */}
      <div
        ref={trail2Ref}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full border border-[#00D4AA] opacity-40 mix-blend-difference"
      />

      {/* Trail 3 */}
      <div
        ref={trail3Ref}
        className="fixed top-0 left-0 pointer-events-none z-[9997] w-2 h-2 -ml-1 -mt-1 rounded-full border border-[#00D4AA] opacity-20 mix-blend-difference"
      />
    </>
  );
}
