export class Character {

    /**
     * Constructor of Character class
     * @param name 
     * @param energy 
     * @param life 
     * @param strength 
     * @param defense 
     * @param speed 
     * @param luck 
     */

    constructor(
        public name: string,
        public energy: number,
        public life: number,
        public strength: number,
        public defense: number,
        public speed: number,
        public luck: number,
    ) { }

    public mostrarAtributos(): void {
        const header = `\n==== ${this.name} ====`
        console.log(header)
        console.log(`Vida: ${this.life}`)
        console.log(`Energia: ${this.energy}`)
        console.log(`Força: ${this.strength}`)
        console.log(`Defesa: ${this.defense}`)
        console.log(`Velocidade: ${this.speed}`)
        console.log(`Sorte: ${this.luck}`)
        console.log("=".repeat(header.length), '\n')
    }

}