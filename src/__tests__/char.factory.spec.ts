import { LcdChar } from "../lcd/chars/char.abstract";
import { LcdCharFactory } from "../lcd/chars/char.factory";

describe("Teste de la classe LcdCharFactory", () => {

  test("Teste méthode create", () => {
    // On autorise que les chiffres pour le moment
    expect(() => {
      LcdCharFactory.create('A')
    }).toThrow('You must provide a digit as entry');
    
    // On vérifie le type de retour
    expect(LcdCharFactory.create('1')).toBeInstanceOf(LcdChar);
  });

});