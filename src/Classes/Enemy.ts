// src/Classes/Enemy.ts
import { Fighter } from "../Interfaces/Fighter";
import { Stats } from "../Interfaces/Stats";

export class Enemy implements Fighter, Stats {
    constructor(public stats: Stats) { }

    get name(): string { return this.stats.name; }
    get life(): number { return this.stats.life; }
    get strength(): number { return this.stats.strength; }
    get defense(): number { return this.stats.defense; }
    get speed(): number { return this.stats.speed; }
    get luck(): number { return this.stats.luck; }

    isAlive(): boolean {
        return this.life > 0;
    }

    takeDamage(damage: number): void {
        this.stats.life -= damage;
        if (this.stats.life < 0) this.stats.life = 0;

        if (!this.isAlive()) {
            console.log(`${this.name} foi derrotado!`);
        }
    }

    attack(target: Fighter): void {
        let damage = this.strength - target.defense;
        const isCrit = this.criticalHit();
        if (isCrit) damage = (this.strength * 2) - target.defense;

        damage = Math.max(damage, 0); // nunca negativo
        console.log(`${this.name} ataca ${target.name} e causa ${damage} de dano${isCrit ? " CRÍTICO!" : ""}`);
        target.takeDamage(damage);
    }

    criticalHit(): boolean {
        return Math.random() * 100 < this.luck;
    }
}
