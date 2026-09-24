/**
 * QuizEngine - Core quiz logic module
 * Extracted from kuis-ledakan.js for better maintainability
 *
 * Handles: quiz start, answer submission, scoring, timing
 */

export class QuizEngine {
  constructor(host) {
    this._host = host;
  }

  /**
   * Calculate score based on answer correctness
   * @param {boolean} isCorrect - Whether answer is correct
   * @param {number} points - Points for this question
   * @returns {number} Score to add
   */
  calculateScore(isCorrect, points = 1) {
    return isCorrect ? points : 0;
  }
}
