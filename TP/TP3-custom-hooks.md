# TP3 : custom hooks

Le but de ce TP est d'utiliser useState et useEffect afin de créer des hooks personnalisés.

Ecrire tous les hooks suivants, et les tester dans une application simple.

Chaque hook doit être dans son propre fichier.

## UseCycler

Ecrire un custom hook nommé useCycler, qui prend en paramètre une liste de valeurs, et expose 3 sorties :

- la liste
- une fonction "next"
- une fonction "previous"

## UseRandom

Ecrire un custom hook nommé UseRandom, sans paramètres, qui renvoie deux sorties

- randomValue
- nextRandom

## UseOnlineState

Ecrire un custom hook nommé useOnlineState, sans paramètres qui renvoie une sortie :

- onlineState

Utiliser la variable navigator.online dans le custom hook.

## UseTimer

Ecrire un custom hook nommé useTimer, qui prend une entrée (timeout), et qui renvoie 3 sorties

- count
- stop
- start

## useMousePosition

Ecrire un custom hook nommé useMousePosition qui ne prend pas d'entrée, et qui renvoie 2 sorties :

- x: la position x du curseur
- y: la position y du curseur

## useArray

Ecrire un custom hook nommé useArray qui prend en paramètre un tableau de valeur et renvoie 3 sorties :

- array : le tableau
- push : méthode pour pousser dans le tableau
- clear : méthode pour vider le tableau
