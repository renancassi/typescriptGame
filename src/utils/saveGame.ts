// Salvar o estado do jogo
import fs from 'fs';
import path from 'path';
import { Character } from '../Classes/Character';

// Cria pasta Data se não existir

// TODO: vou melhorar isso aqui depois
const dataDir = path.join(__dirname, '../../Data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const saveFilePath = path.join(__dirname, '../../Data/savegame.json');


export function saveGame(character: Character): void {
    const gameState = {
        character: {
            name: character.name,
            life: character.life,
            strength: character.strength,
            defense: character.defense,
            luck: character.luck,
            energy: character.energy,
            speed: character.speed,
        },
    };

    fs.writeFileSync(saveFilePath, JSON.stringify(gameState, null, 2));
    console.log('Jogo salvo com sucesso!');
}

export function loadGame(): { character: Character } | null {
    if (!fs.existsSync(saveFilePath)) {
        console.log('Nenhum jogo salvo encontrado.');
        return null;
    }

    const data = fs.readFileSync(saveFilePath, 'utf-8');
    const gameState = JSON.parse(data);

    const character = new Character({
        name: gameState.character.name,
        life: gameState.character.life,
        strength: gameState.character.strength,
        defense: gameState.character.defense,
        luck: gameState.character.luck,
        energy: gameState.character.energy,
        speed: gameState.character.speed,
    });


    console.log('Jogo carregado com sucesso!');
    return { character };
}