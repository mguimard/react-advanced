# Practice 4: Redux

The goal of this lab is to use Redux to manage global state.

You are free to choose between different libraries (redux core, thunk, saga, etc.).  
**redux-core is more than enough if you're wondering!**

## Data

We want to store two types of elements in a Redux store:

- LEDs (10 entries)  
- Employees (10 entries)

Each employee has:

- a LED number (`ledId`) assigned  
- a first name  
- a status (`online`, `absent`, `busy`, `offline`)

Each LED has:

- an `id` number  
- a `state` (on/off)

Example data:

```js
const users = [
    { ledId: 0, name: 'alice', status: 'online' },
    { ledId: 1, name: 'bob', status: 'busy' },
    { ledId: 2, name: 'jean-kevin', status: 'absent' },
    { ledId: 3, name: 'joe', status: 'offline' },
    // ...
]

const leds = [
    { id: 0, state: false },
    { id: 1, state: true },
    { id: 2, state: true },
    { id: 3, state: false },
    // ...
]
```

## Specification

We want an application with **3 main views**:

- **Left menu**: List of employees, with the ability to set their status (`online`, `absent`, `busy`, `offline`)
- **Right menu**: List of LEDs with the ability to enable/disable them (`enabled/disabled`)
- **Center content**: The LEDs displayed as squares, colored according to the state of the associated employee

A LED should be:

- **Black** if state is off
- **Green** if the employee status is "online"  
- **Yellow** if the employee status is "absent"  
- **Red** if the employee status is "busy"  
- **Grey** if the employee status is "offline"

## Suggested Steps

- Create the initial values as hardcoded data  
- Create the Redux store and reducers  
- Create the components (no need to organize them as left/center/right yet)  
- Inject the store into the components  
- Implement the components

## Optimizations

- Avoid unnecessary re-renders using `React.memo`
- Eliminate all `useState` and `useEffect` in your components and replace them with **custom hooks**
