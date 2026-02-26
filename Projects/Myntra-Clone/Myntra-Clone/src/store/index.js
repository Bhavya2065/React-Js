import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStatus';
import bagSlice from './bagSlice';
import cartSlice from './cart';
import bagItemSlice from './bagItemSlice';

const itemStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
        cart: cartSlice.reducer,
        bagItem: bagItemSlice.reducer
    }
})


export default itemStore;