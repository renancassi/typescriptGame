import { Enemy } from "../Enemy";

export class Slime extends Enemy {
    constructor() {
        super(
            { name: "Slime", life: 50, strength: 10, defense: 20, speed: 10, luck: 10 });
    }
}