import {combineReducers} from 'redux'

import {headerReducer} from '../common/header/store'

export default combineReducers({
    header: headerReducer
})

