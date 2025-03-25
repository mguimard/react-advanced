import React, { memo, useCallback, useEffect, useState } from "react"

const Blog = memo(({ blogId, onClick }) => {
  console.log('Blog')
  return <p onClick={() => onClick(blogId)}>Lorem ipsum....</p>
})


function App() {
  console.log('App')
  let [s, setS] = useState(0)

  const handleClick = useCallback((str) => {
    console.log(typeof str)
    console.log(str)
  }, [])
  /*
    useEffect(() => {
      console.log('Use effect')
  
      return () => { }
    }, [handleClick])
  */
  return (
    <>
      <button onClick={() => setS(s - 1)}>-</button>
      <span>{s}</span>
      <button onClick={() => setS(s + 1)}>+</button>

      <Blog blogId="blog1" onClick={handleClick} />
      <Blog blogId="blog2" onClick={handleClick} />

    </>
  )
}

export default App
