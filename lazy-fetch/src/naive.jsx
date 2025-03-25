import { Suspense, useEffect, useState } from 'react'

let delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

function App() {

  let [isLoading, setLoading] = useState(true)
  let [data, setData] = useState([])

  useEffect(() => {
    (async function () {
      await delay()
      let res = await fetch('https://jsonplaceholder.typicode.com/todos')
      let json = await res.json()
      setData(json)
      setLoading(false)
    })()
    return () => { }
  }, [])

  return (
    <>
      {isLoading ?
        <p>En chargement</p> :
        data.map(todo => <p key={todo.id}>{todo.title}</p>)}
    </>
  )
}

export default App
