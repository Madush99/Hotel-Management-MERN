import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer, roomDetailsReducer, roomBookDetailReducer, roomCreate, roomList, roomDeleteReducer, roomUpdateReducer } from './reducers/roomsReducer.js'
import {
      userLoginReducer,
      userDetailsReducer,
      userRegisterReducer,
} from './reducers/userReducer'
import { weddingInsertReducer, wedAllReducer, conByIdReducer } from './reducers/weddingReducer.js'
import { conferenceInsertReducer, conAllReducer } from './reducers/conferenceReducer'

import {
      restAllReducer,
      restDetailsReducer,
      restCreateReducer,
      restDeleteReducer
} from './reducers/restaurentsReducer'



const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      roomDetails: roomDetailsReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
      userRegister: userRegisterReducer,
      weddingInsert: weddingInsertReducer,
      roomBookdetails: roomBookDetailReducer,
      restaurantsAll: restAllReducer,
      restDetails: restDetailsReducer,
      wedAll: wedAllReducer,
      conferenceInsert: conferenceInsertReducer,
      createRestaurant: restCreateReducer,
      conAll: conAllReducer,
      wedById: conByIdReducer,
      createRoom: roomCreate,
      listAllRooms: roomList,
      roomDelete: roomDeleteReducer,
      restDelete: restDeleteReducer,
      roomUpdate: roomUpdateReducer
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