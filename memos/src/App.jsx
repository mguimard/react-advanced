import React, { Suspense, useState } from "react"
//import Blog from "./Blog"
import { lazy } from "react"

const Blog = lazy(() => import('./Blog'))

function App() {

  console.log('App')
  let [toggle, setToggle] = useState(false);

  (async function () {
    let module = await import('./MyLib')
    console.log(module)
  })()

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Hide/show</button>
      <Suspense fallback={<p><button>CLICK ME</button>This is loading motherfuckers !</p>}>
        {toggle ? <Blog /> : null}
      </Suspense>
    </>
  )
}

export default App
