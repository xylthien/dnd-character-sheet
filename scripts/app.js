import { calculateAbilityModifiers } from "./rules/abilities.js";

async function loadCharacter() {
    const response = await fetch('data/grug.json');
    const character = await response.json();
    
    const abilityMod = calculateAbilityModifiers(character);

    const abilityList = document.querySelector('#ability-list');

    for (const ability of Object.keys(abilityMod)) {
        const score = abilityMod[ability].score;
        const modifier = abilityMod[ability].modifier;

        const abilityCard = document.createElement('div');
        const heading = document.createElement('h3');
        const scoreText = document.createElement('p');
        const modifierText = document.createElement('p');

        heading.textContent = ability;
        scoreText.textContent = `Score: ${score}`;
        modifierText.textContent = `Modifier: ${modifier >= 0 ? "+" : ""}${modifier}`;

        abilityCard.append(heading, scoreText, modifierText);
        abilityList.append(abilityCard);
    }    
}



loadCharacter();