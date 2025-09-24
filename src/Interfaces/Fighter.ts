export interface Fighter {
    name: string;
    life: number;
    defense: number;
    takeDamage(damage: number): void;
    attack(target: Fighter): void;
}