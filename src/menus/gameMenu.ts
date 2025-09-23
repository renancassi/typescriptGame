// gameMenu.ts
import { Character } from '../Classes/Character'
import prompt from 'prompt-sync'
import { printMenu } from '../utils/printMenu'

const input = prompt()

export function gameMenu(char: Character) {
    let option: number = 0

    while (option !== 9) {
        printMenu('Menu do Jogo', [
            '1 - Meus Atributos',
            '9 - Sair'
        ])
        option = +input('Escolha uma opção: ')

        switch (option) {
            case 1:
                char.mostrarAtributos()
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