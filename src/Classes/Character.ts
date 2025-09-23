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
}