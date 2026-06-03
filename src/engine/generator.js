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
 *
 * Output layout (per requirements):
 *   [TOP]    Randomly selected ASCII art block
 *   [MIDDLE] Visual separator line
 *   [BOTTOM] Fully assembled 3-part fortune message
 */

import { PERSONAS, THREATS, PROTOCOLS, ASCII_ART } from "../data/messages.js";
import { getRandomElement }                         from "../utils/random.js";

// ─────────────────────────────────────────────────────────────────────────────
// SEPARATOR — the visual divider between the art header and the fortune body.
// Defined once here so it is never hard-coded in multiple places (DRY).
// ─────────────────────────────────────────────────────────────────────────────
const SEPARATOR = "\n────────────────────────────────────────────────────────────────────\n";

// ─────────────────────────────────────────────────────────────────────────────
// generateMixedMessage
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Draws one random element from each of the four data pools and assembles
 * them into a fully formatted cyberpunk fortune transmission.
 *
 * Output structure:
 *   1. ASCII art block (randomly selected from ASCII_ART pool)
 *   2. Separator line
 *   3. Fortune body (PERSONA + THREAT + PROTOCOL)
 *
 * The function is deliberately kept as a pure function — it has no side
 * effects (no console.log, no global state mutations). Printing is the
 * responsibility of the I/O layer (index.js).
 *
 * The function also returns a structured object so that the browser UI
 * can consume individual fields directly, without needing to regex-parse
 * the formatted string.
 *
 * @returns {{ art: string, persona: string, threat: string, protocol: string, formatted: string }}
 *   art       — the raw ASCII art string
 *   persona   — the selected persona text
 *   threat    — the selected threat text
 *   protocol  — the selected protocol text
 *   formatted — the complete CLI-ready formatted string (art + separator + fortune)
 */
export function generateMixedMessage() {
  // ── Step 1: Random selection across ALL four pools ────────────────────────
  // Each call to getRandomElement is fully independent. The existing
  // Math.floor(Math.random() * array.length) algorithm inside getRandomElement
  // is reused identically for the new ASCII_ART pool — no new logic required.
  const art      = getRandomElement(ASCII_ART);
  const persona  = getRandomElement(PERSONAS);
  const threat   = getRandomElement(THREATS);
  const protocol = getRandomElement(PROTOCOLS);

  // ── Step 2: Compose the fortune body via ES6 template literals ────────────
  const fortuneBody = `
╔══════════════════════════════════════════════════════════════════╗
║            ◈  NET TRANSMISSION — FORTUNE PROTOCOL v2.0  ◈       ║
╚══════════════════════════════════════════════════════════════════╝

  ◉ IDENTITY SCAN     » You are a ${persona}.

  ◉ THREAT ASSESSMENT » The Net has determined that ${threat}.

  ◉ RECOMMENDED ACTION » ${protocol}

──────────────────────────────────────────────────────────────────
  [ This transmission will self-corrupt in 10 seconds. Stay ghost. ]
══════════════════════════════════════════════════════════════════`;

  // ── Step 3: Assemble the full output — Art → Separator → Fortune ──────────
  // Layout hierarchy (per spec):
  //   TOP    : ASCII art
  //   MIDDLE : separator
  //   BOTTOM : fortune body
  const formatted = `${art}${SEPARATOR}${fortuneBody}`;

  // ── Step 4: Return both the structured data AND the formatted string ───────
  // The structured fields let the browser UI render without string-parsing.
  // The formatted string serves the CLI entry point directly.
  return { art, persona, threat, protocol, formatted };
}
