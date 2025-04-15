# Practice 2: Module federation

Setup a module federation based app.

## Application creation and dependencies

Let's create an empty directory and 3 apps

```
mkdir my-mfp-app
cd my-mfp-app
npm create vite@latest host-app -- --template react
npm create vite@latest remote1-app -- --template react
npm create vite@latest remote2-app -- --template react
```

Now let's run the following commands in the host-app folder:

```
npm install
npm install --save react-router-dom
npm install --save-dev @originjs/vite-plugin-federation
```

Finally let's run the following commands in the remote1-app and remote2-app folder:

```
npm install
npm install --save-dev @originjs/vite-plugin-federation
```

## Applications configuration

Let's configure the home-app first. In the home-app folder, update the vite.config.js file :

```js
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        dummy: "dummy.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: 'esnext'
  }
})
```

Let's do the same for remote1-app and remote2-app

```js
// remote1-app/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote1-app",
      filename: "remoteEntry.js",
      exposes: {
        Remote1Root: "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 9000, 
  },
  build: {
    target: 'esnext'
  }
});
```


```js
// remote2-app/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote2-app",
      filename: "remoteEntry.js",
      exposes: {
        Remote2Root: "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 9001, 
  },
  build: {
    target: 'esnext'
  }
});
```

For remote1-app and remote2-app, add a script named "build-preview" into package.json:

```json
{
  // ...  
  "scripts": {   
    // ...
    "build-preview": "vite build && vite preview"
  }
  //...
}
```

## Setting up the host app

### Adding the router to host-app

In the host-app folder, edit main.jsx (or .tsx) to add the router.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

### Adding routes to host-app

In the host-app folder, edit src/App.jsx (or .tsx) to add a few routes

```jsx
import { __federation_method_getRemote, __federation_method_setRemote } from "__federation__";
import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

const Remote1App = lazy(() => {
  const url = "http://localhost:9000/assets/remoteEntry.js"
  const name = "remote1-app"
  const module = 'Remote1Root'

  __federation_method_setRemote(name, {
    url: () => Promise.resolve(url),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote(name, module);
})

const Remote2App = lazy(() => {
  const url = "http://localhost:9001/assets/remoteEntry.js"
  const name = "remote2-app"
  const module = 'Remote2Root'

  __federation_method_setRemote(name, {
    url: () => Promise.resolve(url),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote(name, module);
})

function App() {

  return (
    <>
      <div className="app">
        <React.Suspense fallback="Loading">
          <Routes>
            <Route path="/" element={
              <p>This is the content from main app</p>
            } />
            <Route path="/app-1" element={
              <Remote1App />
            } />
            <Route path="/app-2" element={
              <Remote2App />
            } />
          </Routes>
        </React.Suspense>
      </div>
    </>
  )
}

export default App
```

## Serving the app

From the host-app directory, run 

```
npm run dev
```

From the remote1-app and remote2-app directories, run

```
npm run build-preview
```

Access to the host-app URL from your browser and try both routes :

```
http://localhost:5173/
http://localhost:5173/app-1
http://localhost:5173/app-2
```

## Add a navigation menu

In the host-app, create a new component named Nav.

Add links to home page (/) and remote1-app and remote2-app (/app-1 and /app-2)

Example:

```jsx
import { NavLink } from "react-router"

//....
<NavLink to="/app-1">APP 1</NavLink>
```

Add this Nav component at the top of the host-app

## Simulating a new deployment for app1

Add some code to app1 (update src/App.jsx, and add some buttons, or paragraphs). Then re-run :

```
npm run build-preview
```

Reload the browser to see the changes.

## Create an other root-app

Create an other root-app (root-app-2) that uses only the remote1-app.

Make a change to remote1-app and rebuild. 

Make sure both root-app and root-app-2 benefits from the changes of remote1-app
