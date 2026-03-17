// backend/src/utils/scoring.js

function calculateEncoreScore(criticScore, userRating) {
    // Edge case: Ensure scores are within valid 0-100 range
    if (criticScore < 0 || criticScore > 100 || userRating < 0 || userRating > 100) {
        throw new Error("Scores must be between 0 and 100");
    }

    // Apply the mathematical weights (70% critic, 30% user)
    const weightedCritic = criticScore * 0.70;
    const weightedUser = userRating * 0.30;
    
    // Return the rounded final score
    return Math.round(weightedCritic + weightedUser);
}

// Export it so our testing file can see it
module.exports = { calculateEncoreScore };