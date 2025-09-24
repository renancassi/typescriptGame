import { Character } from "../Character"

export class Warrior extends Character {
    constructor(name: string) {
        super(
            {
                name: name,
                life: 80,
                strength: 30,
                defense: 15,
                speed: 25,
                luck: 20
            }
        )
    }
}