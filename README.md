# Installation sans docker
## Pré requis
* NodeJs (La version 12 à été utilisée)
* npm
* git
* typescript

## Installation
* On clone le repository:
  * ```git clone https://github.com/JulesLeg/bee-buziness-lcd.git```
* On rentre dans le dossier
  * ```cd bee-buziness-lcd/```
* On lancer l'installation des dépendances
  * ```npm i```
* Build l'application
  * ```npm run build``` va créer un dossier ./build et y mettre les fichiers JS compilés

# Installation avec docker
## Pré requis
* docker

## Installation avec docker
* On clone le repository:
  * ```git clone https://github.com/JulesLeg/bee-buziness-lcd.git```
* On rentre dans le dossier
  * ```cd bee-buziness-lcd/```
* On build l'image docker
  * ```docker build -t lcd-app .```
* On lance le container pour pouvoir utiliser le logiciel
  * ```docker run -d -it --name lcd_app_container lcd-app bash```
* Ensuite pour entrer à dans le container il suffit de faire
  * ```docker exec -it lcd_app_container bash```

# Utilisation
* Lancer l'application
  * ```node ./build/app.js {chaine}``` ou chaine est une chaine de caractères composée de chiffres
* Lancer les tests
  * ```npm run test```
