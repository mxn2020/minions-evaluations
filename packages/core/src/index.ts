/**
 * Minions Evaluations SDK
 *
 * Benchmarks, test cases, and prompt scoring for continuous agent improvement
 *
 * @module @minions-evaluations/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Evaluations.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
