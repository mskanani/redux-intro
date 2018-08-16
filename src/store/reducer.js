const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': // the convention is to use upper case character
            return {
                counter: state.counter+1
            } //no need for break because return automatically exit out of this function
        case 'DECREMENT':
            return {
                counter: state.counter-1
            }
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                counter: state.counter - action.value
            }
    }
    return state;
};

export default reducer;