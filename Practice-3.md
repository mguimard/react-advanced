# Practice 3: Custom Hooks and Reducers

The goal of this lab is to use `useState`, `useEffect`, and `useReducer` to create custom hooks and reducers.

## Custom Hooks

Write each of the following hooks, and test them in a simple application.

Each hook should be in its own file.

### useCycler

Write a custom hook named `useCycler`, which takes a list of values as a parameter and exposes 3 outputs:

- the current value  
- a `"next"` function  
- a `"previous"` function

### useRandom

Write a custom hook named `useRandom`, with no parameters, which returns two outputs:

- `randomValue`  
- `nextRandom`

### useOnlineState

Write a custom hook named `useOnlineState`, with no parameters, which returns one output:

- `onlineState`

Use the `navigator.onLine` variable inside the custom hook.

### useTimer

Write a custom hook named `useTimer`, which takes an input (`timeout`), and returns 3 outputs:

- `count`  
- `stop`  
- `start`

### useMousePosition

Write a custom hook named `useMousePosition`, which takes no inputs and returns 2 outputs:

- `x`: the x-position of the cursor  
- `y`: the y-position of the cursor

### useArray

Write a custom hook named `useArray`, which takes an array of values as input and returns 3 outputs:

- `array`: the array  
- `push`: method to push to the array  
- `clear`: method to clear the array

## Custom Reducer

Write the following reducer:

### capitalizeReducer

The user has a text input displayed on screen, and what they type is shown in real time.

Transform the following code to use `useReducer`, and write the reducer that automatically capitalizes the first letter of each word.

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
