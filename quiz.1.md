# Quiz 1

Attention, il peut y avoir zero, une ou plusieurs bonne réponse par question, et peut-être des pièges.

## Quelle syntaxe est correcte pour déclarer un élément de type button ?

```
let toggle-button = <button>Click me</button>
let toggle-button = '<button>Click me</button>'
let toggleButton = <button>Click me</button>
let ToggleButton = '<button>Click me</button>'
```

## Transpile ou transpile pas ?

```jsx
import React from 'react';

function MyComponent(){

    return (
        <h1>Hello react</h1>
        <p>This is my first app</p>
    );

}
```

## Quel est le problème ?

```jsx
import React from 'react';

const mybutton = () => <button>Click me</button>;

function App(){
    return <mybutton></mybutton>;
}
```

## Résultat du console.log ?

```jsx
import React from 'react';

function App(){

    let [users, setUsers] = useState([]);        

    setUsers(['alice','bob']);

    console.log(users.length);

    return <p>Users</p>;

}
```

## UseState nécessaire ?

```jsx

import React from 'react';

function App(){
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
```

## Quel est la convention de nommage des composants ?

- Camel
- Pascal
- Snake
- Kebab

## Quel est la convention de nommage des props ?

- Camel
- Pascal
- Snake
- Pizza

## Quelle est la bonne syntaxe pour afficher une variable ?

```
<p>{{ message }}</p>
<p>{% message %}</p>
<p>{ message }</p>
<p>[ message ]</p>
```

## Quel type de variable peut être utilisé dans useState ?

- strings
- numbers
- objects
- booleans

## Combien de useState au maximum peut-on avoir dans un composant ?

- 1
- 10
- 42
- Autre










