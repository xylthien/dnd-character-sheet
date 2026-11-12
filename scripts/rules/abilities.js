const abilities = [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma'
    ];

function calculateModifier(score) {
    return Math.floor((score - 10) / 2);
}

function calculateAbilityModifiers(character) {
    const abilityMod = {};

    for (const ability of abilities) {
        let adjustedScore = character.abilityScores[ability].base;

        for (const adjustments of character.abilityScores[ability].adjustments) {
           adjustedScore += adjustments.amount;
        }

        abilityMod[ability] = {
            score: adjustedScore,
            modifier: calculateModifier(adjustedScore)
        };
    }
    return abilityMod;
}

export { calculateAbilityModifiers };