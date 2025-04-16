# TP4 : Redux

Le but de ce TP est d'utiliser redux pour gérer un état global.

Vous avez le choix d'utiliser différentes librairies (redux core, thunk, saga, etc..), 
redux-core suffit largement si c'est la question que vous vous posez !

## Données

Nous souhaitons stocker dans un store redux, deux types d'éléments :

- Des LEDs (10 entrées)
- Des employés (10 entrées)

Chaque employé a :

- un numéro (ledId) de LED attribué.
- un prénom
- un statut (online, absent, busy, offline)

Chaque led a :

- un numéro (id)
- un état (on/off)

Exemple de données :

```js
const users = [
    { ledId: 0 name: 'alice', status: 'online'},
    { ledId: 1 name: 'bob', status: 'busy'},
    { ledId: 2 name: 'jean-kevin', status: 'absent'},
    { ledId: 3 name: 'joe', status: 'offline'},
    ...
]

const leds = [
    {id: 0, state: true},
    {id: 1, state: false},
    {id: 2, state: true},
    {id: 3, state: false},
    ...
]
```

## Spécification

Nous souhaitons une application avec 3 vues principales

- Menu de gauche : Liste des employés, avec possibilité de définir leur statut (online/absent/busy/offline).
- Menu de droite : Liste des LEDs avec possibilité de les activer/désactiver (enabled/disabled)
- Contenu du centre : Les LEDS sous forme de carrés, coloriées selon l'état de l'employé associé.

Une LED est de couleur :

- noire si désactivée (disabled)
- verte si le statut de l'employé est "online"
- jaune si le statut de l'employé est "absent"
- rouge si le statut de l'employé est "busy"
- grise si le statut de l'employé est "offline"

## Etapes de réalisation conseillée :

- Créer les valeurs initiales en dur.
- Créer le store et les reducers.
- Créer les composants (pas besoin de respecter gauche/centre/droite pour l'instant).
- Injecter le store dans les composants.
- Implémenter les composants.

## Optimisations

- Eviter tout re-rendu inutile avec memo
- Eliminer tout useState et useEffect qui aurait été ajouté dans vos composants, et les remplacer par des custom hooks.
