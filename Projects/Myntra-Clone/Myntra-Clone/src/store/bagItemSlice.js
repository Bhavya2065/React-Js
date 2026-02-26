import { createSlice } from "@reduxjs/toolkit";

const bagItemSlice = createSlice({
    name: "bagItem",
    initialState: [],
    reducers: {
        displayBagItem: (state, action) => {
            state.push(action.payload)
        },
        removefromcart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const bagItemActions = bagItemSlice.actions;
export default bagItemSlice;