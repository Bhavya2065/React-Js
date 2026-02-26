import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
        addToBag: (state, actions) => {
            state.push(actions.payload);
        },
        removefromBag: (state, actions) => {
            return state.filter((item) => item !== actions.payload);
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice;