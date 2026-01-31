/**
 * PRICING CONFIGURATION
 *
 * All pricing parameters in one place for easy updates.
 * User requirements: 500 PLN/kg material, 50 PLN/hour machine rate
 *
 * To update pricing:
 * 1. Modify values below
 * 2. Save file
 * 3. No code changes needed
 */

export const PRICING = {
  // Material costs per kg (in PLN)
  materialCostPerKg: 500,

  // Machine hourly rate (in PLN)
  machineHourlyRate: 50,

  // Setup fee (flat, in PLN)
  setupFee: 100,

  // Material densities (g/cm³) - for volume to weight conversion
  materialDensities: {
    'ABS-M30': 1.04,
    'ASA': 1.07,
    'PC-ABS': 1.15,
    'Nylon-12': 1.01
  },

  // Material multipliers (relative to base ABS-M30)
  materialMultipliers: {
    'ABS-M30': 1.0,
    'ASA': 1.2,
    'PC-ABS': 1.4,
    'Nylon-12': 1.6
  },

  // Print speed estimates (cm³/hour) by layer height
  printSpeed: {
    fine: 15,      // 0.178mm
    standard: 25,  // 0.254mm
    draft: 35      // 0.33mm
  },

  // Quantity discounts
  quantityDiscounts: [
    { min: 1, max: 5, discount: 0 },
    { min: 6, max: 20, discount: 0.10 },
    { min: 21, max: 50, discount: 0.20 },
    { min: 51, max: 999, discount: 0.30 }
  ]
} as const;

// Material type definition
export type MaterialType = keyof typeof PRICING.materialDensities;

// Layer height type definition
export type LayerHeight = 'fine' | 'standard' | 'draft';

/**
 * Calculate total price for a 3D print job
 *
 * @param length - Part length in mm
 * @param width - Part width in mm
 * @param height - Part height in mm
 * @param material - Material type
 * @param infillPercent - Infill density (0-100)
 * @param layerHeight - Layer height preset
 * @param quantity - Number of parts
 * @returns Object with detailed cost breakdown
 */
export function calculatePrintPrice(
  length: number,
  width: number,
  height: number,
  material: MaterialType,
  infillPercent: number,
  layerHeight: LayerHeight,
  quantity: number
) {
  // Convert mm to cm and calculate volume
  const volumeCm3 = (length / 10) * (width / 10) * (height / 10);

  // Calculate weight in kg
  const density = PRICING.materialDensities[material];
  const weightKg = (volumeCm3 * density) / 1000;

  // Calculate material cost
  const infillFactor = infillPercent / 100;
  const materialMultiplier = PRICING.materialMultipliers[material];
  const materialCost = weightKg * PRICING.materialCostPerKg * materialMultiplier * infillFactor;

  // Estimate print time in hours
  const printSpeed = PRICING.printSpeed[layerHeight];
  const printTimeHours = volumeCm3 / printSpeed;

  // Calculate machine cost
  const machineCost = printTimeHours * PRICING.machineHourlyRate;

  // Per-part subtotal
  const perPartSubtotal = materialCost + machineCost + PRICING.setupFee;

  // Total before discount
  const totalBeforeDiscount = perPartSubtotal * quantity;

  // Find applicable discount
  const discountTier = PRICING.quantityDiscounts.find(
    tier => quantity >= tier.min && quantity <= tier.max
  );
  const discountPercent = discountTier ? discountTier.discount : 0;
  const discountAmount = totalBeforeDiscount * discountPercent;

  // Final total
  const total = totalBeforeDiscount - discountAmount;

  return {
    volumeCm3: Math.round(volumeCm3 * 100) / 100,
    weightKg: Math.round(weightKg * 1000) / 1000,
    materialCost: Math.round(materialCost * 100) / 100,
    printTimeHours: Math.round(printTimeHours * 10) / 10,
    machineCost: Math.round(machineCost * 100) / 100,
    setupFee: PRICING.setupFee,
    perPartSubtotal: Math.round(perPartSubtotal * 100) / 100,
    quantity,
    totalBeforeDiscount: Math.round(totalBeforeDiscount * 100) / 100,
    discountPercent: discountPercent * 100,
    discountAmount: Math.round(discountAmount * 100) / 100,
    total: Math.round(total * 100) / 100
  };
}

/**
 * Format price in PLN with proper currency symbol
 */
export function formatPrice(amount: number): string {
  return `${amount.toFixed(2)} PLN`;
}

/**
 * Format print time in human-readable format
 */
export function formatPrintTime(hours: number): string {
  if (hours < 1) {
    return `${Math.round(hours * 60)} min`;
  } else if (hours < 24) {
    return `${Math.round(hours * 10) / 10} hours`;
  } else {
    const days = Math.floor(hours / 24);
    const remainingHours = Math.round((hours % 24) * 10) / 10;
    return `${days}d ${remainingHours}h`;
  }
}
