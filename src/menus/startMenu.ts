import { Character } from '../Classes/Character'
import { classes } from '../Classes/CharClasses/index'
import { printMenu } from '../utils/print'
import { loadGame, saveGame } from '../utils/saveGame'
import { charCreate } from './charCreate'
import { gameMenu } from './gameMenu'
import prompt from 'prompt-sync'

const input = prompt()

export function startMenu() {
    let option: number = 0;
    let char: Character | null = null
    const warnPersonagem = '\nCrie um personagem primeiro!\n'
    // Carrega jogo salvo, se existir
    const savedGame = loadGame()
    if (savedGame) {
        char = savedGame.character
        console.log(`Bem-vindo de volta, ${char.name}!\n`)
    }

    while (option !== 9) {
        const header = (texto: string) => `\n==== ${texto} ====`
        if (!char) {
            printMenu('Menu Inicial', [
                '1 - Criar Personagem',
                '2 - Meus Atributos',
                '3 - Iniciar Jogo',
                '9 - Sair'
            ])
        } else {

            printMenu('Menu Inicial', [
                '1 - Editar Personagem',
                '2 - Meus Atributos',
                '3 - Iniciar Jogo',
                '9 - Sair'
            ])
        }

        option = +input('Escolha uma opção: ')

        switch (option) {
            case 1:
                char = charCreate(char ?? undefined);
                break
            case 2:
                if (!char) {
                    console.log(warnPersonagem)
                    break
                }
                char.mostrarAtributos()
                break;
            case 3:
                if (!char) {
                    console.log(warnPersonagem)
                    break
                }
                gameMenu(char)
                break
            case 9:
                if (!char) {
                    console.log('Saindo...')
                    break
                }
                console.log('Saindo...')
                saveGame(char)
                break;
            default:
                console.log('Opção inválida')
                break;
        }
    }
}