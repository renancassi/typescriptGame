// gameMenu.ts
import { Character } from '../Classes/Character'
import { Enemy } from '../Classes/Enemy'
import prompt from 'prompt-sync'
import { printMenu } from '../utils/printMenu'
import { battleLoop } from '../utils/battleLoop'

const input = prompt()

export function gameMenu(char: Character) {
    let option: number = 0

    while (option !== 9) {
        printMenu('Menu do Jogo', [
            '1 - Meus Atributos',
            '2 - Procurar Inimigos',
            '9 - Sair'
        ])
        option = +input('Escolha uma opção: ')

        switch (option) {
            case 1:
                char.mostrarAtributos()
                break

            case 2:
                // cria inimigo de teste
                const enemy = new Enemy({
                    name: "Goblin",
                    life: 30,
                    strength: 20,
                    defense: 2,
                    speed: 3,
                    luck: 10
                })

                console.log(`\nVocê encontrou um ${enemy.name}!\n`)
                // batalha
                battleLoop(char, enemy)
                break

            case 9:
                console.log('Saindo do menu do jogo...')
                break

            default:
                console.log('Opção inválida')
                break
        }
    }
}
