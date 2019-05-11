import * as constants from './constants'

const defaultState = {
    focused: false
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return { focused: true}
        case constants.SEARCH_BLUR:
            return { focused: false}
        default:
    }
    return state
}
