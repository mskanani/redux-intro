import * as actionTypes from '../actions/actions';

const initialState = { 
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: // the convention is to use upper case character
            return {
                ...state,
                counter: state.counter+1
            } //no need for break because return automatically exit out of this function
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
};

export default reducer;