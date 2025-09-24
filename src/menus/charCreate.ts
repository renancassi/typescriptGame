// charCreate.ts

import { Character } from "../Classes/Character"
import { classes } from "../Classes/CharClasses/index"
import { printTittle } from "../utils/print"
import prompt from 'prompt-sync'
import { saveGame } from "../utils/saveGame"

export function charCreate(char?: Character) {
    const input = prompt()
    let selected: string | undefined
    let classOption: number
    if (!char) {
        printTittle('Criar Personagem')
    } else {

        printTittle('Editar Personagem')
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
    if (char) saveGame(char)
    return char
}