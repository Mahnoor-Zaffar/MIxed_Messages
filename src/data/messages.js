/**
 * @module data/messages
 * @description
 * The sole source of truth for all message data pools.
 *
 * Cyberpunk/Tech Fortune Theme — three distinct data arrays that form
 * the three pillars of every generated fortune:
 *
 *   1. PERSONAS  — Who you are in the Net (User Persona / Role)
 *   2. THREATS   — What danger lurks in the Matrix (Network Vulnerability)
 *   3. PROTOCOLS — What you must do about it (Netrunner Action Item)
 *
 * Adding new fortunes is as simple as pushing a new string into any array.
 * All arrays are frozen to prevent accidental mutation at runtime.
 */

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR 1 — User Persona / Role
// Who is receiving this transmission from the Net?
// ─────────────────────────────────────────────────────────────────────────────
export const PERSONAS = Object.freeze([
  "Ghost-in-the-Shell operative codenamed WRAITH",
  "Rogue AI fragment escaped from a Megacorp datacenter",
  "Street-level data broker with a chrome-plated neural jack",
  "Corporate sleeper agent running on a compromised bio-OS",
  "Black-market sysadmin wanted in seven server jurisdictions",
  "Augmented courier hauling encrypted payloads through the Sprawl",
  "Burned intelligence analyst living off-grid in a Faraday-cage apartment",
  "Zero-day hunter whose reputation travels faster than their alias",
]);

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR 2 — Matrix / Network Vulnerability
// What threat has the Net just detected around you?
// ─────────────────────────────────────────────────────────────────────────────
export const THREATS = Object.freeze([
  "your encryption handshake is bleeding entropy into the public subnet",
  "a polymorphic worm has nested inside your memory stack and is slowly rewriting your base instincts",
  "three ghost packets have been tailing your data-trail for the last 47 hops",
  "an unpatched zero-day in your neural firmware is broadcasting your location to the highest bidder",
  "your identity layer has forked — a doppelganger process is spending your reputation tokens",
  "the ICE surrounding your core wallet has been silently downgraded to pre-2047 legacy encryption",
  "a rootkit disguised as a firmware update has opened a back-door to your synaptic bus",
  "quantum-entangled surveillance nodes have triangulated your ghost signature across six data-havens",
]);

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR 3 — Netrunner Action Item
// What must you do to survive the current cycle?
// ─────────────────────────────────────────────────────────────────────────────
export const PROTOCOLS = Object.freeze([
  "Initiate a full memory wipe and re-flash your persona from the last clean backup — no survivors.",
  "Inject a honey-token payload into the intruder's thread and trace it back to the source node.",
  "Go dark: kill all outbound sockets, spoof your MAC address, and reroute through the Onion Mesh.",
  "Execute Protocol NIGHTFALL — burn the compromised layer and exfiltrate your core identity via analog dead-drop.",
  "Deploy a recursive counter-ICE script, then invoice the attacker's employer for consulting fees.",
  "Overclock your threat-response daemon, hot-patch the vulnerability, and file an incident report in under 60 seconds.",
  "Sever the compromised neural link, brew synthcaff, and reboot your threat model from first principles.",
  "Fork your active session into a decoy process, let the hunters chase the ghost, and slip out through Port 0.",
]);
