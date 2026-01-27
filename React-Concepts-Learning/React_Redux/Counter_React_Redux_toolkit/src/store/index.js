import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import privacySlice from './privacy';

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
} // If it has a many key-value pairs then How can we manage?

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})

export default counterStore;