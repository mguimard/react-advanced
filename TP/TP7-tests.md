# TP7 : Tests 

Le but de ce TP est d'écrire des tests unitaires avec Jest et testing-library, et un test end to end avec cypress

## Tests unitaires

Installer le nécéssaire :

```
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
```

Ajouter dans les scripts du fichier package.json :

```
"test": "jest"
```

Créer un fichier de configuration pour Jest (jest.config.js) à la racine du projet

```js
/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom",
};

module.exports = config;
```

Créer un fichier de configuration pour Babel (babel.config.js) à la racine du projet

```js
module.exports = {
  presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
};
```

Créer un fichier de test "my.test.js" pour valider l'installation et lancer la commande 

```js
import "@testing-library/jest-dom";

describe("Some dummy test suite", () => {
    it("should pass", () => {
        expect(true).toBe(true);
    });
});
```

```
npm test
```

Ecrire un fichier de test par composant


## Reprise du TP précédent

Ecrire le test fonctionnel suivants :

- Ouverture de l'application
- Assertion lecture seule
- Login
- Assertion boutons d'édition
- Vérification du nombre de leds
- Click sur un statut d'un employé
- Assertion de la couleur de la led
- Click sur désactiver une LED
- Assertion de la couleur de la LED
