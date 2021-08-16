import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer } from './reducers/roomsReducer.js'

const reducer = combineReducers({
      roomsAll: roomsAllReducer,
})


const middleware = [thunk]

const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store