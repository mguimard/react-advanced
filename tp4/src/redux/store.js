import { configureStore, createSlice } from '@reduxjs/toolkit'
import { leds, users } from './initialState'

const rootSlice = createSlice({
    name: 'rootSlice',
    initialState:{
        leds,
        users
    },
    reducers: {
        updateUserStatus:(state,action) => {            
           state.users.find(u => u.ledId === action.payload.id).status = action.payload.status
        },
        toggleLED: (state,action) => {
            let led = state.leds.find(l => l.id === action.payload.id)            
            led.state = !led.state
        }
    }
})

const store = configureStore({
    reducer:rootSlice.reducer,
    middleware: (defaultMiddleWare) => defaultMiddleWare()
});

export const { updateUserStatus, toggleLED } = rootSlice.actions

export default store