import React from 'react'
import { useInView } from 'react-intersection-observer';

let initialData = new Array(1000).fill(0).map((e, index) => {
  return {
    id: index,
    e: Math.random()
  }
})

let Child = () => {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return <p ref={ref}> I'm {inView ? 'visible' : 'invisible'}</p>
}

function App() {

  return (
    <>
      <p>Hello</p>
      {initialData.map((d) => {
        return <Child key={d.id} />
      })}

    </>
  )

}

export default App
