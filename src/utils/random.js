/**
 * @module utils/random
 * @description
 * Pure, stateless utility functions used across the application.
 *
 * Keeping these isolated from domain logic means they can be unit-tested
 * independently and reused by any future module without coupling concerns.
 */

// ─────────────────────────────────────────────────────────────────────────────
// getRandomElement
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns a single, uniformly-distributed random element from the given array.
 *
 * Algorithm:
 *   Math.random() produces a float in [0, 1).
 *   Multiplying by array.length scales it to [0, length).
 *   Math.floor() converts it to a valid integer index in [0, length - 1].
 *   This guarantees every element has an equal 1/n probability of selection.
 *
 * @template T
 * @param   {T[]}  pool  A non-empty array of any type.
 * @returns {T}          One randomly selected element from the array.
 * @throws  {Error}      If the provided argument is not a non-empty array.
 */
export function getRandomElement(pool) {
  if (!Array.isArray(pool) || pool.length === 0) {
    throw new Error(
      `[random.getRandomElement] Expected a non-empty array, received: ${JSON.stringify(pool)}`
    );
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
