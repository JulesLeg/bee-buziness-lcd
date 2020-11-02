import { LcdChar } from '../lcd/chars/char.abstract';
import { LcdGrid } from '../lcd/grid';

describe("Teste de la grille LCD", () => {

  test("Taille grille LCD", () => {
    const grid = new LcdGrid();
    expect(grid).toBeInstanceOf(LcdGrid);
    expect(grid.lcdHeight).toBe(3);
  });

  test("Liste des chars créés", () => {
    const input = '0123456789';
    const grid = new LcdGrid(input);
    // On vérifie que la liste des caractères est
    // en accord avec l'input
    expect(grid.chars.length).toBe(input.length);
    grid.chars.forEach((char, index) => {
      // On vérifie le type des chars
      expect(char).toBeInstanceOf(LcdChar);
      // On vérifie la valeur stockée
      expect(char.value).toBe(index.toString());
    });

  });

  test("Teste fonction render de la grille LCD", () => {
    const input = '0123456789';
    const grid = new LcdGrid(input);

    const render = grid.render();
    // On vérifie le type de retour du rendu
    expect(typeof render).toBe('string');
    // La hauteur de la grille doit correspondre au nombre
    // de ligne du rendu de la grille
    expect(render.split('\n').length).toBe(grid.lcdHeight);
  });

  test("Teste la méthode addChar de la grille LCD", () => {
    const grid = new LcdGrid();

    // On l'appel avec une chaine vide
    expect(() => {
      grid.addChar('');
    }).toThrow('You must provide a string with length equals 1');
    
    // On l'appel avec une chaine de longueur > 1
    expect(() => {
      grid.addChar('abc');
    }).toThrow('You must provide a string with length equals 1');
  });

});