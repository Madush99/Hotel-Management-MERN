import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


<<<<<<< HEAD
import { roomsAllReducer, roomDetailsReducer } from './reducers/roomsReducer.js'

const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      roomDetails: roomDetailsReducer,
=======
import { roomsAllReducer } from './reducers/roomsReducer.js'
import { 
      userLoginReducer,  
      userDetailsReducer,
      userRegisterReducer, 
} from './reducers/userReducer'



const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
      userRegister: userRegisterReducer,
>>>>>>> e158c34497d68e0ee34fff6654a402de26357c75
})


const middleware = [thunk]

const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store