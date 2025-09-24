import { Character } from '../Classes/Character'
import { classes } from '../Classes/CharClasses/index'
import { printMenu } from '../utils/print'
import { gameMenu } from './gameMenu'

import prompt from 'prompt-sync'

const input = prompt()

export function startMenu() {
    let option: number = 0;
    let char: Character | null = null
    const warnPersonagem = '\nCrie um personagem primeiro!\n'

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
                let selected: string | undefined
                let classOption: number
                if (!char) {
                    console.log(header('Criar Personagem'))
                } else {
                    console.log(header('Editar Personagem'))
                }
                // loop até escolher uma classe válida
                while (!selected) {
                    console.log('Escolha sua classe:')
                    const keys = Object.keys(classes)
                    keys.forEach((cls, i) => console.log(`${i + 1} - ${cls}`))

                    classOption = +input('Opção: ')
                    selected = keys[classOption - 1]

                    if (!selected) {
                        console.log(`\nClasse inválida, selecione uma entre 1 e ${keys.length} \n`)
                    }
                }

                const name = input('Nome: ')
                const ClassRef = classes[selected]
                char = new ClassRef(name)
                console.log(`\nVocê criou: ${selected}! - ${name}\n`)
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
                console.log('Saindo...')
                break;
            default:
                console.log('Opção inválida')
                break;
        }
    }
}