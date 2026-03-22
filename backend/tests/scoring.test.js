// backend/tests/scoring.test.js
const { calculateEncoreScore } = require('../src/utils/scoring');

// Test 1: The Happy Path
test('calculateEncoreScore_withValidScores_returnsCorrectWeightedAverage', () => {
    // ARRANGE
    const critic = 80;
    const user = 90;

    // ACT
    const result = calculateEncoreScore(critic, user);

    // ASSERT: (80 * 0.7) + (90 * 0.3) = 56 + 27 = 83
    expect(result).toBe(83);
});

// Test 2: Edge Case (Maximum Values)
test('calculateEncoreScore_withPerfectScores_returns100', () => {
    // ARRANGE
    const critic = 100;
    const user = 100;

    // ACT
    const result = calculateEncoreScore(critic, user);

    // ASSERT
    expect(result).toBe(100);
});

// Test 3: Edge Case (Invalid Input)
test('calculateEncoreScore_withScoreOver100_raisesError', () => {
    // ARRANGE
    const badCriticScore = 105;
    const validUserScore = 80;

    // ACT & ASSERT 
    expect(() => {
        calculateEncoreScore(badCriticScore, validUserScore);
    }).toThrow("Scores must be between 0 and 100");
});