import { Warrior } from "./Warrior";
import { Wizard } from "./Wizard";
import { Character } from "../Character";

export const classes: Record<string, new (name: string) => Character> = {
    Warrior,
    Wizard,
};