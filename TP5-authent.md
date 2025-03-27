# TP5 : Authentification

Le but de ce TP est d'utiliser useContext et une requête HTTP pour gérer une authentification.

## Reprise du TP précédent

Notre application de LEDs est pour l'instant non protégée.

Seul un administrateur authentifié doit pour définir le statut des employé. Si on n'est pas authentifié, un accès en lecture seule est possible.

## Utilisation d'un serveur pour s'authentifier

Créer un fichier server.js avec ce code :

```json
{
  "name": "auth-server",
  "version": "0.0.0",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "express-jwt": "^8.5.1",
    "jsonwebtoken": "^9.0.2"
  }
}
```

```js
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { expressjwt } = require("express-jwt");

const app = express();
app.use(cors());

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/login", function (req, res) {
  console.log(req);
  var token = jwt.sign({ foo: "bar" }, "secret");
  res.send(token);
});

app.post("/logout", function (req, res) { 
  res.send('successfuly logged out');
});

app.get("/protected", expressjwt({ secret: "secret", algorithms: ["HS256"] }), function (req, res) {
  res.send(["alice", "bob"]);
});
```

Pour lancer le serveur :

```
npm install
node server.js
```

Ce serveur écoute sur localhost:3001 et vous renvoie un token si vous faites un POST sur /login, peut importe les valeurs envoyées. Il vous renvoie aussi un code 200 si vous faites un POST sur /logout

## Modifications coté client

- Créer un contexte pour avoir accès à une variable "isAuthed" et une méthode setAuthToken.
- Ajouter un bouton "login" dans le menu de gauche. Lors d'un click sur le bouton, récupérer un token depuis le serveur. Appeler setAuthToken(tokenRecupéré) lors de la récupération du token.
- Ajouter un bouton "logout" dans le menu de gauche. Lors d'un click sur le bouton, récupérer un token depuis le serveur. Appeler setAuthToken(null).
- Utiliser isAuthed pour afficher ou cacher les controles des LEDs et employés.

## Stockage du token

Stocker le token dans le localStorage pour s'authentifier automatiquement au prochain rechargement de page.
