import { createStore } from 'redux'

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
} // If it has a many key-value pairs then How can we manage?

const reducer = (store = INITIAL_VALUE, action) => {
    if (action.type == 'INCREMENT') {
        return { ...store, counter: store.counter + 1 } // Method 2 (efficient and best practices)
        return { counter: store.counter + 1, privacy: store.privacy } // Method 1 (Inefficient)

    } else if (action.type == 'DECREMENT') {
        return { ...store, counter: store.counter - 1 }
    } else if (action.type == 'ADD') {
        return { ...store, counter: store.counter + Number(action.payload.num) }
    } else if (action.type == 'SUB') {
        return { ...store, counter: store.counter - Number(action.payload.num) }
    } else if (action.type == 'PRIVACY') {
        return { ...store, privacy: !store.privacy }
    }
    return store
}

const counterStore = createStore(reducer);

export default counterStore;

// Note: ...store put all the key-value pair in that object and the second parameter "counter: store.counter + 1" update the value of that store value with upated version (For more understanding refer E:\js\js_practise\object.js)