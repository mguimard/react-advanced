# TP2 : optimisation avec useMemo, useCallback et lazy

Le but de ce TP est d'utiliser des hooks React pour corriger des problèmes de performances

## Use memo

Utiliser ce code dans une nouvelle application :

```jsx
// App.jsx
import React, { useState } from "react";

const initialItems = new Array(30_000_000).fill(0).map((i, index) => {
  return {
    id: index,
    isSelected: index === 29_999_999,
  };
});

function App() {
  let [count, setCount] = useState(0);
  let [items] = useState(initialItems);

  let selectedItem = items.find((i) => i.isSelected);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <p>Selected item : {selectedItem.id}</p>
    </>
  );
}

export default App;
```

Essayer de cliquer plusieurs fois sur le bouton "icrement", vous devriez voir du lag.

A l'aide du hook useMemo, corriger le problème de performances.

## memo et useCallback

Créer un nouveau projet et insérer ce code

```jsx
// App.jsx
import React, { useState } from "react";
import Search from "./Search";

const initialUsers = ["alice", "bob", "joe", "kitty", "meh"];

function App() {
  let [users, setUsers] = useState(initialUsers);

  let handleChange = (event) => {
    const filteredUsers = initialUsers.filter((u) => u.includes(event.target.value));
    setUsers(filteredUsers);
  };

  return (
    <>
      <Search onChange={handleChange} />
      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
```

```jsx
// Search.jsx
import React from "react";

const Search = ({ onChange }) => {
  console.log("Rendering search");
  return (
    <>
      <input type="text" onChange={onChange} />
    </>
  );
};

export default Search;
```

Lancer ce code et vérifier les traces dans la console. Le composant recherche est rendu plusieurs fois, cela n'est pas souhaité. A l'aide de memo et useCallback, faire en sorte que le composant search ne soit rendu qu'une seule fois?.

## Lazy

Créer une nouvelle application et insérer le code suivant:

```jsx
// App.jsx
import { useState } from "react";

export const Home = () => <div>Hello Home page</div>;
export const Contact = () => <div>Hello Contact page</div>;
export const About = () => <div>Hello About page</div>;

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      default:
        return <p>404</p>;
    }
  };

  return (
    <>
      <select onChange={(e) => setPage(e.target.value)}>
        <option value="home">Home</option>
        <option value="contact">Contact</option>
        <option value="about">About</option>
      </select>
      {renderPage()}
    </>
  );
}

export default App;
```

Réaliser les opérations suivantes :

- Créer un fichier par page
- Utiliser lazy pour charger le code de chaque page seulement quand cela est nécessaire
- Utiliser React.suspense
- Créer un fichier pour le menu de navigation, s'assurer que le rendu n'est fait qu'une seule fois.
