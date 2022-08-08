import { combineReducers } from 'redux'

// import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

import dataReducer from './data.reducer'
const rootReducer = combineReducers({
	data: dataReducer
})

export default rootReducer;