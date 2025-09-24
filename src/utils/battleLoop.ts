import { Character } from "../Classes/Character"
import { Enemy } from "../Classes/Enemy"
import prompt from "prompt-sync"
import { printMenu } from "./printMenu"

const input = prompt()

export function battleLoop(char: Character, enemy: Enemy) {
    while (char.isAlive() && enemy.isAlive()) {
        let action: number = 0
        let validAction = false

        // turno do jogador
        while (!validAction) {
            printMenu(`Turno do Jogador`, [
                '1 - Atacar',
                '2 - Ataque Especial'
            ])
            action = +input("Escolha sua ação: ")

            switch (action) {
                case 1:
                    char.attack(enemy)
                    validAction = true
                    break
                case 2:
                    char.specialAttack(enemy)
                    validAction = true
                    break
                default:
                    console.log("Ação inválida, tente novamente!")
            }
        }

        if (!enemy.isAlive()) break

        // turno do inimigo
        console.log("\n--- Turno do Inimigo ---")
        enemy.attack(char)
    }

    if (char.isAlive()) {
        console.log(`\nVocê derrotou o ${enemy.name}!\n`)
    } else {
        console.log(`\nVocê foi derrotado pelo ${enemy.name}...\n`)
    }
}
