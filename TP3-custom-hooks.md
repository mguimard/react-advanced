# TP3 : custom hooks et reducers

Le but de ce TP est d'utiliser useState, useEffect et useReducer afin de créer des hooks et reducers personnalisés.

## Custom hooks

Ecrire tous les hooks suivants, et les tester dans une application simple.

Chaque hook doit être dans son propre fichier.

### UseCycler

Ecrire un custom hook nommé useCycler, qui prend en paramètre une liste de valeurs, et expose 3 sorties :

- la valeur courante
- une fonction "next"
- une fonction "previous"

### UseRandom

Ecrire un custom hook nommé UseRandom, sans paramètres, qui renvoie deux sorties

- randomValue
- nextRandom

### UseOnlineState

Ecrire un custom hook nommé useOnlineState, sans paramètres qui renvoie une sortie :

- onlineState

Utiliser la variable navigator.online dans le custom hook.

### UseTimer

Ecrire un custom hook nommé useTimer, qui prend une entrée (timeout), et qui renvoie 3 sorties

- count
- stop
- start

### useMousePosition

Ecrire un custom hook nommé useMousePosition qui ne prend pas d'entrée, et qui renvoie 2 sorties :

- x: la position x du curseur
- y: la position y du curseur

### useArray

Ecrire un custom hook nommé useArray qui prend en paramètre un tableau de valeur et renvoie 3 sorties :

- array : le tableau
- push : méthode pour pousser dans le tableau
- clear : méthode pour vider le tableau

### Custom reducer

Ecrire les reducer suivant

### capitalizeReducer

L'utilisateur a un champ de texte affiché à l'écran et on affiche ce qu'il tape en temps réel.

Transofmer ce code pour utiliser useReducer et écrire le reducer qui permet de mettre automatiquement une majuscule en début de mot.

```jsx
function App() {

  const [text, setText] = useState('')

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  )
}

export default App
```