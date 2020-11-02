// On import la factory de notre module de gestion de nombres
import { LcdGrid } from './lcd/grid';
// On utilise commander pour gérer la ligne de commande
import commander from 'commander';

// On attend un argument, la chaine à afficher
commander
  .arguments('<chaine>')
  .action(function (str: any) {
    try {
      let grid = new LcdGrid(str);
      console.log(grid.render() + '\n');
    } catch (error) {
      // Grid throw une erreur si la chaine contient autre chose
      // que des chiffres, car on ne prévoit pas les autres cas
      // pour le moment
      console.log('Erreur: ', error);
    }
  })
  .parse(process.argv);