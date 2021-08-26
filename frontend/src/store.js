import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer, roomDetailsReducer, roomBookDetailReducer, roomCreate, roomList, roomDeleteReducer, roomUpdateReducer } from './reducers/roomsReducer.js'
import {
      userLoginReducer,
      userDetailsReducer,
      userRegisterReducer,
} from './reducers/userReducer'
import { weddingInsertReducer, wedAllReducer, wedByIdReducer } from './reducers/weddingReducer.js'
import { conferenceInsertReducer, conAllReducer, conByIdReducer } from './reducers/conferenceReducer'

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
      orderCreateReducer,
      orderDetailsReducer,
      orderPayReducer,
      orderListReducer,

} from './reducers/orderReducer'

import {
      tableBookingReducer
} from './reducers/tableBookingReducer'





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
      wedById: wedByIdReducer,
      createRoom: roomCreate,
      listAllRooms: roomList,
      roomDelete: roomDeleteReducer,
      restDelete: restDeleteReducer,
      roomUpdate: roomUpdateReducer,
      listAllBookings: bookingListReducer,
      conById: conByIdReducer,
      foodsAll: foodsAllReducer,
      createFood: foodsCreateReducer,
      foodsDelete: foodDeleteReducer,
      foodDetailsByid: foodDetailsReducer,
      foodsAll: foodsAllReducer,
      cart: cartReducer,
      orderCreate:  orderCreateReducer,
      orderDetails: orderDetailsReducer,
      orderPay: orderPayReducer,
      orderList:orderListReducer,
      createTbookings:tableBookingReducer,

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