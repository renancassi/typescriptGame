import { Fighter } from "../Interfaces/Fighter"
import { Stats } from "../Interfaces/Stats"

export class Character implements Fighter, Stats {
    constructor(public stats: Stats & { energy?: number }) { }

    get name(): string { return this.stats.name; }
    get life(): number { return this.stats.life; }
    set life(value: number) { this.stats.life = value; } // necessário para takeDamage
    get strength(): number { return this.stats.strength; }
    get defense(): number { return this.stats.defense; }
    get speed(): number { return this.stats.speed; }
    get luck(): number { return this.stats.luck; }
    get energy(): number { return this.stats.energy ?? 0; }
    set energy(value: number) { this.stats.energy = value; }

    mostrarAtributos(): void {
        const header = `\n==== ${this.name} ====`;
        console.log(header);
        console.log(`Vida: ${this.life}`);
        console.log(`Energia: ${this.energy}`);
        console.log(`Força: ${this.strength}`);
        console.log(`Defesa: ${this.defense}`);
        console.log(`Velocidade: ${this.speed}`);
        console.log(`Sorte: ${this.luck}`);
        console.log("=".repeat(header.length), '\n');
    }

    isAlive(): boolean { return this.life > 0; }

    takeDamage(damage: number): void {
        this.life = Math.max(this.life - damage, 0);
        if (!this.isAlive()) console.log(`${this.name} foi derrotado!`);
    }

    /**
     * Ataca um alvo, causando dano baseado na força do atacante e na defesa do alvo.
     * @param target Alvo do ataque
     */
    attack(target: Fighter): void {
        let damage = this.strength - target.defense;
        const isCrit = this.criticalHit();
        if (isCrit) damage = (this.strength * 2) - target.defense;

        damage = Math.max(damage, 0);
        console.log(`${this.name} ataca ${target.name} e causa ${damage} de dano${isCrit ? " CRÍTICO!" : ""}`);
        target.takeDamage(damage);
        this.amountEnergy(20);
    }

    /**
     * Ataque especial que causa dano aumentado, consumindo toda a energia do personagem.
     * @param target alvo do ataque especial
     */
    specialAttack(target: Fighter): void {
        if (this.energy === 100) {
            const damage = Math.max((this.strength * 2.5) - target.defense, 0);
            console.log(`${this.name} usa Ataque Especial em ${target.name} e causa ${damage} de dano.`);
            target.takeDamage(damage);
            this.resetEnergy();
        } else {
            console.log(`${this.name} não tem energia suficiente para Ataque Especial!`);
        }
    }

    /**
     * Ataque crítico baseado na sorte do personagem.
     * @returns true se o ataque for critico.
     */
    criticalHit(): boolean {
        return Math.random() * 100 < this.luck;
    }

    amountEnergy(amount: number): void {
        this.energy = Math.min((this.energy ?? 0) + amount, 100);
    }

    resetEnergy(): void {
        this.energy = 0;
    }

    havesEnergy(): boolean {
        return (this.energy ?? 0) === 100;
    }
}
