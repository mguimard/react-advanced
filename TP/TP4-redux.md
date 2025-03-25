# TP4 : Redux

Le but de ce TP est d'utiliser redux pour gérer un état global.

Vous avez le choix d'utiliser différentes librairies (redux code, thunk, saga, etc..)

## Données

Nous souhaitons stocker dans un store redux, deux types d'éléments :

- Des LEDs (20 entrées)
- Des employés (20 entrées)
- un état (enabled/disabled)

Chaque employé a :

- un numéro (id) de LED attribué.
- un prénom
- un statut (online, busy, offline)

Chaque led a :

- un numéro (id)
- une couleur (hexa décimal ou rgb)

## Spécification

Nous souhaitons une application avec 3 vues principales

- Menu de gauche : Liste des employés, avec possibilité de définir leur statut (online/busy/offline).
- Menu de droite : Liste des LEDs avec possibilité de les activer/désactiver (enabled/disabled)
- Contenu du centre : Les LEDS sous forme de carrés, coloriées selon l'état de l'employé associé.

Une LED est de couleur :

- grise si désactivée (disabled)
- verte si le statut de l'employé est "online"
- rouge si le statut de l'employé est "busy"
- noire si le statut de l'employé est "offline"

## Réalisation :

- Créer les valeurs initiales en dur.
- Créer le store et les reducers.
- Créer les composants.
- Tester l'application.
