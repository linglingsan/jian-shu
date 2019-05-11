import {combineReducers} from 'redux-immutable'

import {headerReducer} from '../common/header/store'

export default combineReducers({
    header: headerReducer
})

