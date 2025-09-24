/**
 * Representa os atributos básicos de um personagem ou inimigo.
 */
export interface Stats {
    /** Nome do personagem ou inimigo */
    name: string;

    /** Pontos de vida do personagem */
    life: number;

    /** Força do personagem, usada para calcular dano */
    strength: number;

    /** Defesa do personagem, reduz o dano recebido */
    defense: number;

    /** Velocidade do personagem, pode influenciar a ordem de ação em batalhas */
    speed: number;

    /** Sorte do personagem, usada para acertos críticos ou eventos aleatórios */
    luck: number;

    /** Energia do personagem, usada para habilidades especiais */
    energy?: number;
}
