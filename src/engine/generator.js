/**
 * @module engine/generator
 * @description
 * The composition engine — the heart of the Mixed Messages application.
 *
 * This module is the only place in the codebase that knows about BOTH the
 * data layer (what the message pieces are) and the utility layer (how to
 * pick them). It exposes a single factory function that wires them together.
 *
 * Separation of concerns achieved:
 *   • Data  → src/data/messages.js    (what)
 *   • Logic → src/utils/random.js     (how to pick)
 *   • Glue  → src/engine/generator.js (how to compose) ← YOU ARE HERE
 *   • I/O   → src/index.js            (how to output)
 */

import { PERSONAS, THREATS, PROTOCOLS } from "../data/messages.js";
import { getRandomElement }             from "../utils/random.js";

// ─────────────────────────────────────────────────────────────────────────────
// generateMixedMessage
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Draws one random element from each of the three data pools and weaves them
 * into a fully formatted cyberpunk fortune transmission.
 *
 * The function is deliberately kept as a pure function — it has no side
 * effects (no console.log, no global state mutations). Printing is the
 * responsibility of the I/O layer (index.js).
 *
 * @returns {string} A unique, formatted fortune string assembled from three
 *                   independently randomized message components.
 */
export function generateMixedMessage() {
  // ── Step 1: Random selection ──────────────────────────────────────────────
  // Each call to getRandomElement is fully independent; changing the order
  // of these lines would have zero effect on output distribution.
  const persona  = getRandomElement(PERSONAS);
  const threat   = getRandomElement(THREATS);
  const protocol = getRandomElement(PROTOCOLS);

  // ── Step 2: Composition via ES6 template literals ─────────────────────────
  // The backtick syntax makes the structure of the fortune immediately
  // legible — no string concatenation noise, full multi-line support.
  const fortune = `
╔══════════════════════════════════════════════════════════════════╗
║            ◈  NET TRANSMISSION — FORTUNE PROTOCOL v2.0  ◈       ║
╚══════════════════════════════════════════════════════════════════╝

  ◉ IDENTITY SCAN     » You are a ${persona}.

  ◉ THREAT ASSESSMENT » The Net has determined that ${threat}.

  ◉ RECOMMENDED ACTION » ${protocol}

──────────────────────────────────────────────────────────────────
  [ This transmission will self-corrupt in 10 seconds. Stay ghost. ]
══════════════════════════════════════════════════════════════════`;

  return fortune;
}
