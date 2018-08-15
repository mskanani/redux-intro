const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter+1
        }
    }
    if(action.type === 'DECREMENT') { // the convention is to use upper case character
        return {
            counter: state.counter-1
        }
    }
    if(action.type === 'ADD') {
        return {
            counter: state.counter+10
        }
    }
    if(action.type === 'SUBTRACT') {
        return {
            counter: state.counter-8
        }
    }
    return state;
};

export default reducer;