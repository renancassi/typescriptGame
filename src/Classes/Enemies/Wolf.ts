import { Enemy } from "../Enemy";

export class Wolf extends Enemy {
    constructor() {
        super(
            { name: "Wolf", life: 80, strength: 30, defense: 15, speed: 25, luck: 10 }
        );
    }
}