# Practice 5: Optimization with `useMemo`, `useCallback`, and `lazy`

The goal of this exercise is to use React hooks to fix performance issues.

---

## useMemo

Use this code in a new application:

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
      <p>Selected item: {selectedItem.id}</p>
    </>
  );
}

export default App;
```

Try clicking the "Increment" button several times—you should notice lag.

Using the `useMemo` hook, fix this performance issue.

---

## `memo` and `useCallback`

Create a new project and insert the following code:

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

Run the code and check the logs in the console. The search component is rendered multiple times, which is not ideal.  
Using `memo` and `useCallback`, ensure that the `Search` component is only rendered once.

---

## Lazy

Create a new application and insert the following code:

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

Complete the following steps:

- Create one file per page.
- Use `lazy` to load each page’s code only when it is needed.
- Use `React.Suspense`.
- Create a separate file for the navigation menu and ensure it only renders once.
