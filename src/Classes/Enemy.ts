export class Enemy {
    /**
     * Constructor of Enemy class
     * @param name 
     * @param life 
     * @param strength 
     * @param defense 
     * @param speed 
     * @param luck 
     */
    constructor(
        public name: string,
        public life: number,
        public strength: number,
        public defense: number,
        public speed: number,
        public luck: number,
    ) { }
}