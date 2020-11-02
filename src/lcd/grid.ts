import { LcdChar } from "./chars/char.abstract";
import { LcdCharFactory } from "./chars/char.factory";

/**
 * Classe représentant la grille LCD
 *
 * @global
 */
export class LcdGrid {

    // Hauteur de l'écran LCD
    lcdHeight: number = 3;

    // Un nombre est représenté par une liste de chiffres
    chars: Array<LcdChar>;

    constructor(str: string = '') {
        // On initialise la liste des caractères
        this.chars = [];
        // On transforme str en tableau de char (string)
        for (let i = 0; i < str.length; i++) {
            this.addChar(str[i]);
        }
    }

    /**
     * Ajoute un caractère à la liste
     * courante
     *
     * @param	mixed	char	
     * @return	self
     */
    public addChar(char: string) {
        if (char.length !== 1) {
            throw 'You must provide a string with length equals 1';
        }
        this.chars.push(LcdCharFactory.create(char.charAt(0)));
        return this;
    }

    /**
     * Fait le rendu de la chaine courante
     * en faisant le rendu de chacun de ses caractères
     *
     * @return	string
     */
    public render(): string {
        let w = '';
        // On fait le rendu ligne par ligne
        for (let i = 0; i < this.lcdHeight; i++) {

            w += this.chars.map((char: LcdChar) => {
                return char.renderLine(i);
            }).join('');

            if (i < this.lcdHeight - 1) {
                w += '\n';
            }
        }
        return w;
    }
}