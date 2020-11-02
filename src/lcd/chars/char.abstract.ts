export abstract class LcdChar {
    
    /**
     * @var string value: Le caractère d'origine
     */
    value: string = '';

    /**
     * Fait le rendu d'une ligne
     *
     * @param	number	n: le numérod e la ligne
     * 	
     * @return	void
     */
    abstract renderLine(n: number): string;
}
