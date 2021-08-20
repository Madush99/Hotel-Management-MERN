import {
    FOODS_ALL_REQUEST,
    FOODS_ALL_SUCCESS,
    FOODS_ALL_FAIL,
    FOODS_CREATE_REQUEST,
    FOODS_CREATE_SUCCESS,
    FOODS_CREATE_FAIL,
    FOODS_CREATE_RESET,
} from '../constants/foodsConstants'



export const foodsAllReducer = (state = { foods: [] }, action) => {
    switch (action.type) {
          case  FOODS_ALL_REQUEST:
                return { loading: true }
          case FOODS_ALL_SUCCESS:
                return { loading: false, foods: action.payload }
          case FOODS_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}


export const foodsCreateReducer = (state = {}, action) => {
    switch (action.type) {
          case FOODS_CREATE_REQUEST:
                return { loading: true }
          case FOODS_CREATE_SUCCESS:
                return { loading: false, foods: action.payload }
          case FOODS_CREATE_FAIL:
                return { loading: false, error: action.payload }
          case FOODS_CREATE_RESET:
                return {}
          default:
                return state
    }
}
