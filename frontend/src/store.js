import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer, roomDetailsReducer, roomBookDetailReducer } from './reducers/roomsReducer.js'
import {
      userLoginReducer,
      userDetailsReducer,
      userRegisterReducer,
} from './reducers/userReducer'

import { restAllReducer, restDetailsReducer } from './reducers/restaurentsReducer'



const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      roomDetails: roomDetailsReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
      userRegister: userRegisterReducer,
      roomBookdetails: roomBookDetailReducer,
      restaurantsAll: restAllReducer,
      restDetails: restDetailsReducer
})


const userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null

const initialState = {
      userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store