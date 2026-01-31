"use client";

import { useState } from "react";
import {
  calculatePrintPrice,
  formatPrice,
  formatPrintTime,
  type MaterialType,
  type LayerHeight,
} from "@/lib/pricingConfig";

/**
 * Pricing Calculator Section - Real-time Cost Estimation
 *
 * Features:
 * - Live 3D preview (to be enhanced)
 * - Real-time price calculations
 * - Material selector with previews
 * - Animated cost breakdown
 * - Custom slider controls
 */
export default function PricingCalculatorSection() {
  const [length, setLength] = useState(100);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [material, setMaterial] = useState<MaterialType>("ABS-M30");
  const [infill, setInfill] = useState(50);
  const [layerHeight, setLayerHeight] = useState<LayerHeight>("standard");
  const [quantity, setQuantity] = useState(1);

  // Calculate price
  const pricing = calculatePrintPrice(
    length,
    width,
    height,
    material,
    infill,
    layerHeight,
    quantity
  );

  return (
    <section id="pricing" className="relative w-full min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0A0E17] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-4">
          Instant Quote
        </h2>
        <p className="text-center text-neutral-300 mb-16">
          Get real-time pricing for your 3D printing project
        </p>

        <div className="glass-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Controls */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Part Configuration
              </h3>

              {/* Dimensions */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Length (mm): {length}
                </label>
                <input
                  type="range"
                  min="10"
                  max="254"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-[#00D4AA]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Width (mm): {width}
                </label>
                <input
                  type="range"
                  min="10"
                  max="254"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-[#00D4AA]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Height (mm): {height}
                </label>
                <input
                  type="range"
                  min="10"
                  max="254"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#00D4AA]"
                />
              </div>

              {/* Material */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value as MaterialType)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none"
                >
                  <option value="ABS-M30">ABS-M30 (Base)</option>
                  <option value="ASA">ASA (UV-stable)</option>
                  <option value="PC-ABS">PC-ABS (High strength)</option>
                  <option value="Nylon-12">Nylon 12 (Chemical resistant)</option>
                </select>
              </div>

              {/* Infill */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Infill Density: {infill}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={infill}
                  onChange={(e) => setInfill(Number(e.target.value))}
                  className="w-full accent-[#00D4AA]"
                />
              </div>

              {/* Layer Height */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Layer Height
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["fine", "standard", "draft"] as LayerHeight[]).map((lh) => (
                    <button
                      key={lh}
                      onClick={() => setLayerHeight(lh)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                        layerHeight === lh
                          ? "bg-[#00D4AA] text-[#0A0E17]"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {lh.charAt(0).toUpperCase() + lh.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Quantity: {quantity}
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4AA] focus:outline-none"
                />
              </div>
            </div>

            {/* Right: Preview & Breakdown */}
            <div className="space-y-8">
              {/* 3D Preview Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#00D4AA]/20 to-[#FF6B00]/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-32 h-32 bg-[#00D4AA]/30 mx-auto mb-4 rounded-lg"
                    style={{
                      transform: `scale(${Math.min(length, width, height) / 150})`,
                      transition: "transform 0.3s",
                    }}
                  />
                  <p className="text-neutral-400 text-sm">
                    {length} × {width} × {height} mm
                  </p>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Cost Breakdown
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-300">Material Cost:</span>
                    <span className="text-white font-mono">
                      {formatPrice(pricing.materialCost)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-300">
                      Machine Time ({formatPrintTime(pricing.printTimeHours)}):
                    </span>
                    <span className="text-white font-mono">
                      {formatPrice(pricing.machineCost)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-300">Setup Fee:</span>
                    <span className="text-white font-mono">
                      {formatPrice(pricing.setupFee)}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 border-t border-white/10">
                    <span className="text-neutral-300">
                      Subtotal ({quantity} {quantity === 1 ? "part" : "parts"}):
                    </span>
                    <span className="text-white font-mono">
                      {formatPrice(pricing.totalBeforeDiscount)}
                    </span>
                  </div>

                  {pricing.discountPercent > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({pricing.discountPercent}%):</span>
                      <span className="font-mono">
                        -{formatPrice(pricing.discountAmount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between pt-3 border-t border-white/10 text-lg">
                    <span className="text-white font-bold">Total:</span>
                    <span className="text-[#00D4AA] font-bold font-mono">
                      {formatPrice(pricing.total)}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 px-8 py-4 bg-[#FF6B00] text-white rounded-full font-semibold hover:bg-[#ff7b1a] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B00]/50">
                  Request Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
