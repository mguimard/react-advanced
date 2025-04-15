# TP1 : mise en place de l'environnement de développement

Le but de ce TP est de préparer l'outillage nécéssaire pour développer des applications React.

## Installation NodeJS

Récupérer la dernière version LTS de NodeJS https://nodejs.org/

Une fois installé, vérifier les versions, depuis un terminal :

```
node -v
npm -v
```

## Installation VSCode

Récupérer et installer la dernière version de VSCode https://code.visualstudio.com/

Une fois installé, lancer VSCode et installer les extensions suivantes :

- Intellicode
- ESLint
- Prettier
- ReactJS extension pack

## Installation des react dev tools

https://react.dev/learn/react-developer-tools

Installer les react dev tools pour votre navigateur :

- Pour firefox : https://addons.mozilla.org/fr/firefox/addon/react-devtools/
- Pour Google Chrome : https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## Création d'une première app React et lancement

Commande dépréciée :

```
npx create-react-app my-app
```

Méthode conseillée aujourd'hui : vite

Pour du React avec JavaScript :

```
npm create vite@latest my-react-app -- --template react
```

Pour du React avec TypeScript :

```
npm create vite@latest my-react-ts-app -- --template react-ts
```

## Création d'une application counter

Ecrire le code jsx (ou tsx) nécessaire pour afficher 3 boutons + un paragraphe :

- bouton décrémenter
- bouton incrémenter
- bouton reset
- paragraphe affichant la valeur du compteur

## Création d'une application todolist

Ecrire le code jsx (ou tsx) nécessaire pour afficher une liste de todos

Données en dur :

```js
const todos = [
  { title: "Do this", completed: false },
  { title: "Do that", completed: true },
  { title: "Do this again", completed: false },
];
```

Nous souhaitons avoir un sélecteur pour afficher seulement les todos complétés, les non complétés, et tous.

Contrainte technique, créer deux composants, un pour la liste, un pour chaque todo.

Chaque todo peut être marqué comme "complété" à l'aide d'une checkbox

## Découverte des dev tools

Utiliser les dev tools react et l'outil "profiler" pour enregistrer tous les rendus et leur temps d'éxecution.
