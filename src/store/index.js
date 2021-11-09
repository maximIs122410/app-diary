import { createStore, combineReducers } from 'redux'

// Reducers
import { postReducer } from './Reducers/post'

const rootReducer = combineReducers({
    post: postReducer,
})

export default createStore(rootReducer)
