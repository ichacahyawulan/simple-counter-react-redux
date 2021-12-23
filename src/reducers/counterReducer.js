import { INCREMENT, DECREMENT, TEXT } from "../actions";

const initialState = {
    count: 0,
    text: ""
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return initialState.count += 1;
        case DECREMENT:
            return initialState.count -= 1;
        case TEXT:
            return initialState.text = action.text;
        default:
            return initialState.count;
    }
}

export default counterReducer;