/**
 * Representa um lutador em batalha, seja personagem ou inimigo.
 */
export interface Fighter {
    /** Nome do personagem ou inimigo */
    name: string;

    /** Pontos de vida do personagem ou inimigo */
    life: number;

    /** Defesa do personagem ou inimigo, reduz o dano recebido */
    defense: number;

    /**
     * Aplica dano ao lutador.
     * @param damage Quantidade de dano que deve ser subtraida da vida.
     */
    takeDamage(damage: number): void;

    /**
     * Executa um ataque contra outro lutador.
     * @param target O alvo que sofrerá o ataque.
     */
    attack(target: Fighter): void;
}