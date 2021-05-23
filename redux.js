/*
* Step-step untuk membuat Redux
* - Store
*   ( sebagai wadah besar yg menyimpan value / state secara global )
* - Reducer
*   ( state/value bisa di update hanya oleh reducer )
*   ( setiap update state/value bisa di lihat pada reducer )
*   ( reducer berupa function untuk mengubah store )
* - Dispatch / Action
*   ( Proses pemanggilan intruksi yg disediakan reducer )
* - Subscription
*   ( proses pemanggilan/penggunaan store yg dimiliki )
* */

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17,
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1,
            }
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue,
            }
        default:
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log("store change: ", store.getState())
});

// Dispatch / Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 12});
console.log(store.getState());

