import { configureStore, createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'myRootSlice',
    initialState: {
        users: [],
        pizzas: []
    },
    reducers : {
        addPizza : (state, action) => {
            console.log('addPizza', action)
            return {...state, pizzas: [...state.pizzas, action.payload]}
        },
        addUser : (state, action) => {
            console.log('addUser', action)
            return {...state, users: [...state.users, action.payload]}
        },
        setUsers : (state,action) => {
            console.log('setUsers', action)
            return {...state, users: [...action.payload]}
        },
        requestUsers : (state) => {
            return {...state}
        }
    }
})

const mySuperMiddleware = (store) => (next) => (action) => {
    console.log('mySuperMiddleware', store, next, action)

    if(action.type == 'myRootSlice/addUser'){
        store.dispatch(addPizza('reine'))
    }

    let result = next(action)
    
    localStorage.numberOfPizzas = store.getState().pizzas.length

    return result
}

const mySuperMiddleware2 = (store) => (next) => async (action) => {
    if(action.type == 'myRootSlice/requestUsers'){
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        store.dispatch(mySlice.actions.setUsers(data))
    }

    let result = next(action)
    return result
}

const store = configureStore({
    reducer: mySlice.reducer,
    middleware: (defaultMiddleware) => defaultMiddleware()
        .concat(mySuperMiddleware, mySuperMiddleware2)
})

export const { addPizza , addUser, requestUsers}  = mySlice.actions;

export default store;