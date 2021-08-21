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
import { bookingListReducer } from './reducers/bookingReducers.js'

import {
      foodsAllReducer,
      foodsCreateReducer,
      foodDeleteReducer,
      foodDetailsReducer
} from './reducers/foodReducer'

import { cartReducer } from './reducers/cartReducer'

import{
      orderCreateReducer
} from './reducers/orderReducer'





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
      roomUpdate: roomUpdateReducer,
      listAllBookings: bookingListReducer,
      foodsAll: foodsAllReducer,
      createFood: foodsCreateReducer,
      foodsDelete: foodDeleteReducer,
      foodDetailsByid: foodDetailsReducer,
      foodsAll: foodsAllReducer,
      cart: cartReducer,
      orderCreate:  orderCreateReducer

})


const userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
      (localStorage.getItem('cartItems')) : []


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse
      (localStorage.getItem('shippingAddress')) : {}

const initialState = {
      cart: {
            cartItems: cartItemsFromStorage,
            shippingAddress: shippingAddressFromStorage
      },
      userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store