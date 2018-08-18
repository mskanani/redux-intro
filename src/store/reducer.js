const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': // the convention is to use upper case character
            return {
                ...state,
                counter: state.counter+1
            } //no need for break because return automatically exit out of this function
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter-1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter}) //immutable way of updating an array by adding a new item
            }
        case 'DELETE_RESULT':
            const id = 2;
            //state.results.splice(id, 1) // it's not immutable, it's not how we should do it. This mutate the original array
            
            //const newArray = [...state.results];
            //newArray.splice(id, 1);

            // Another way - delete element immutablly
            const newArray = state.results.filter(result => result.id !== action.resultElId) //(return true if)  //filter return a new array, does not touch the old one
            return {
                ...state,
                results: newArray
            }
    }
    return state;
};

export default reducer;