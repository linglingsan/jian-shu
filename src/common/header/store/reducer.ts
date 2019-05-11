import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({       //  转换为immutable对象
    focused: false
})

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true)       //  返回一个新的immutable对象
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        default:
    }
    return state
}
