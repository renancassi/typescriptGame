import { Character } from "../Character"

export class Warrior extends Character {
    constructor(name: string) {
        super(name, 100, 120, 15, 10, 5, 0.05)
    }
}