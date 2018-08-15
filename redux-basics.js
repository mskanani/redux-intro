const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter+1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - here we get informed about any future dispatches
store.subscribe(() => { //it gets triggered whenever an action has dispatched
    console.log('[Subscription]', store.getState());
});

// Dispatching an Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());