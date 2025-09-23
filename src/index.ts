import { Character } from './Classes/Character'
import { classes } from './Classes/CharClasses/index'

import prompt from 'prompt-sync'



const input = prompt()
let option: number = 0;

let name = 'Sem nome'
let char: Character | null = null

while (option !== 9) {
    console.log('1 - Criar Personagem')
    console.log('2 - Meus Atributos')
    console.log('9 - Sair')

    option = +input('Escolha uma opção: ')

    switch (option) {
        case 1:
            const name = input('Nome: ')
            let selected: string | undefined
            let classOption: number

            // loop até escolher uma classe válida
            while (!selected) {
                console.log('Escolha sua classe:')
                const keys = Object.keys(classes)
                keys.forEach((cls, i) => console.log(`${i + 1} - ${cls}`))

                classOption = +input('Opção: ')
                selected = keys[classOption - 1]

                if (!selected) {
                    console.log(`Classe inválida, selecione uma entre 1 e ${keys.length} \n`)
                }
            }

            const ClassRef = classes[selected]
            char = new ClassRef(name)
            console.log(`Você criou um ${selected}!`)
            break
        case 2:
            if (!char) {
                console.log('Crie um personagem primeiro!')
                break
            }
            console.log('Meus Atributos:')
            const header = `==== ${char.name} ====`
            console.log(header)
            console.log(`Vida: ${char.life}`)
            console.log(`Energia: ${char.energy}`)
            console.log(`Força: ${char.strength}`)
            console.log(`Defesa: ${char.defense}`)
            console.log(`Velocidade: ${char.speed}`)
            console.log(`Sorte: ${char.luck}`)
            console.log("=".repeat(header.length))
            break;
        case 9:
            console.log('Saindo...')
            break;
        default:
            console.log('Opção inválida')
            break;
    }
}