/**
 * QuizEngine - Core quiz logic module
 * Extracted from kuis-ledakan.js for better maintainability
 *
 * Handles: quiz start, answer submission, scoring, timing
 */

export class QuizEngine {
  constructor(host) {
    this._host = host;
    this._questionStartTime = null;
  }

  getAnswerTime() {
    if (!this._host._questionStartTime) return 0;
    return Date.now() - this._host._questionStartTime;
  }

  resetQuestionTimer() {
    this._questionStartTime = Date.now();
  }

  isSuspiciousTiming(answerTime, minTime = 3000) {
    return answerTime > 0 && answerTime < minTime;
  }

  getTimingData() {
    return {
      questionStartTime: this._questionStartTime,
      currentTime: Date.now(),
    };
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
