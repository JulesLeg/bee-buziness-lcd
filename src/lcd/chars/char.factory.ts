import { Zero } from "./zero";
import { One } from "./one";
import { Two } from "./two";
import { Three } from "./three";
import { Four } from "./four";
import { Five } from "./five";
import { Six } from "./six";
import { Seven } from "./seven";
import { Eight } from "./eight";
import { Nine } from "./nine";

/**
 * Factory chargée d'instancier
 * les caractères de type LcdChar
 *
 * @global
 */
export class LcdCharFactory {
    /**
     * Créer des instances de LcdChar
     * 
     * @param	mixed	char: string	
     * @return	void
     */
    public static create(char: string) {
        switch (char) {
            case '0': return new Zero();
            case '1': return new One();
            case '2': return new Two();
            case '3': return new Three();
            case '4': return new Four();
            case '5': return new Five();
            case '6': return new Six();
            case '7': return new Seven();
            case '8': return new Eight();
            case '9': return new Nine();
            default: 
                // On throw une erreur si ce n'est pas un nombre, car on ne prévoit
                // pas (encore) les autres caractères 
                throw 'You must provide a digit as entry';
        }
    }
}