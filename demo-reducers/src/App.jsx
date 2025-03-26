import React, { useReducer, useRef } from 'react'

function countReducer(state, action) {
  console.log('Action:', action)

  let constraint = (i) => Math.min(Math.max(i, -10), 10)

  if (action === 'decrement') return constraint(state - 1)
  else if (action === 'increment') return constraint(state + 1)
  else if (action === 'reset') return 0

  throw new Error('Unknonw action')
}

function todoReducer(state, action) {
  console.log('todo reducer')
  console.log(action)

  switch (action.type) {
    case 'add':
      if (!action.payload.trim()) throw new Error('Titre vide')
      return [...state, { title: action.payload.toUpperCase(), id: Date.now() }]
    case 'reset':
      return []
  }

  return [...state]
}

function userAndPizzaReducer(state, action) {

  if (action.type === 'user/change') {
    let user = action.payload;
    return { ...state, user }
  }
  else if (action.type === 'pizza/add') {
    if (!state.pizzas.includes(action.payload))
      return { ...state, pizzas: [...state.pizzas, action.payload] }
    return { ...state }
  }

  return { ...state }
}

function App() {
  let [count, dispatch] = useReducer(countReducer, 0)
  let [todos, dispatchTodos] = useReducer(todoReducer, [])

  let newTodo = useRef('')

  let [userAndPizza, dispatchUserAndPizza] = useReducer(userAndPizzaReducer, {
    user: 'alice',
    pizzas: ['reine', 'chorizo']
  })



  return (
    <>
      <button onClick={() => dispatch('decrement')}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch('increment')}>+</button>

      <br />

      <input type="text" onChange={(e) => newTodo.current = e.target.value} />
      <button onClick={() => dispatchTodos({ type: 'reset' })}>Reset todos</button>
      <button onClick={() => dispatchTodos({ type: 'add', payload: newTodo.current })}>Add todo</button>
      {todos.map(todo => <p key={todo.id}>{todo.title}</p>)}

      <hr />
      <p>{userAndPizza.user}</p>
      {userAndPizza.pizzas.map((pizza, index) => <p key={index}>{pizza}</p>)}
      <button onClick={() => dispatchUserAndPizza({ type: 'user/change', payload: 'bob' })}>Change user</button>
      <button onClick={() => dispatchUserAndPizza({ type: 'pizza/add', payload: 'saumon' })}>Add pizza</button>

    </>
  )
}

export default App
