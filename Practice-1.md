# Practice 1: Setting up the Development Environment

The goal of this lab is to prepare the necessary tools to develop React applications.

## Installing NodeJS

Download the latest LTS version of NodeJS: https://nodejs.org/

Once installed, check the versions from a terminal:

```
node -v  
npm -v
```

## Installing VSCode

Download and install the latest version of VSCode: https://code.visualstudio.com/

Once installed, launch VSCode and install the following extensions:

- Intellicode  
- ESLint  
- Prettier  
- ReactJS extension pack

## Installing React Dev Tools

https://react.dev/learn/react-developer-tools

Install React Dev Tools for your browser:

- For Firefox: https://addons.mozilla.org/fr/firefox/addon/react-devtools/  
- For Google Chrome: https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## Creating a First React App and Launching It

**Deprecated command:**

```
npx create-react-app my-app
```

**Recommended method today: Vite**

For React with JavaScript:

```
npm create vite@latest my-react-app -- --template react
```

For React with TypeScript:

```
npm create vite@latest my-react-ts-app -- --template react-ts
```

## Creating a Counter Application

Write the necessary JSX (or TSX) code to display 3 buttons + one paragraph:

- decrement button  
- increment button  
- reset button  
- paragraph displaying the counter value

## Creating a Todo List Application

Write the necessary JSX (or TSX) code to display a list of todos.

Hardcoded data:

```js
const todos = [
  { title: "Do this", completed: false },
  { title: "Do that", completed: true },
  { title: "Do this again", completed: false },
];
```

We want to have a selector to display only completed todos, only uncompleted ones, or all.

**Technical constraint:** create two components – one for the list and one for each individual todo.

Each todo can be marked as "completed" using a checkbox.

## Exploring the Dev Tools

Use the React Dev Tools and the "Profiler" tool to record all renders and their execution time.
