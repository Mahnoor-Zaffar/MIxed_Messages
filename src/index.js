/**
 * @module index
 * @description
 * Application entry point — the I/O layer.
 *
 * This file has exactly ONE responsibility: run the generator and print
 * the result. It contains zero business logic, zero data, and zero utility
 * code — those all live in their own dedicated modules.
 *
 * To run:
 *   node src/index.js
 *   — or —
 *   npm start
 */

import { generateMixedMessage } from "./engine/generator.js";

// ─────────────────────────────────────────────────────────────────────────────
// Auto-execution: runs immediately when the script is invoked.
// ─────────────────────────────────────────────────────────────────────────────
(function run() {
  // Generate one unique fortune per execution.
  const message = generateMixedMessage();

  // Print to stdout — the only console.log in the entire codebase.
  console.log(message);
})();
