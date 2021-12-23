// Actions (types)
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const TEXT = 'TEXT'

//Action Creators
export const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCount = () => {
    return {
        type: DECREMENT
    }
}

export const generateText = (text) => {
    return {
        type: TEXT,
        text
    }
}