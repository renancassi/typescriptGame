import { Character } from "../Character"

export class Wizard extends Character {
    constructor(name: string) {
        super(name, 100, 50, 30, 5, 7, 0.05)
    }
}