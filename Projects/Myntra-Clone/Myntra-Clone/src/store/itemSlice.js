import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            store = action.payload
            // console.log(store, action);
            return store;
        },
    }
})

export const itemActions = itemSlice.actions;
export default itemSlice;