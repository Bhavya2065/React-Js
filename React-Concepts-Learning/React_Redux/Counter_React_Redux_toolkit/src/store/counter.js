import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        Increment: (state) => {
            state.counter += 1
        },
        Decrement: (state) => {
            state.counter -= 1
        },
        Add: (state, action) => {
            state.counter += Number(action.payload)
        },
        Subtract: (state, action) => {
            state.counter -= Number(action.payload)
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice;