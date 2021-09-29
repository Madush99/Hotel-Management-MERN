import {
    FOODS_ALL_REQUEST,
    FOODS_ALL_SUCCESS,
    FOODS_ALL_FAIL,
    FOODS_CREATE_REQUEST,
    FOODS_CREATE_SUCCESS,
    FOODS_CREATE_FAIL,
    FOODS_CREATE_RESET,
    FOODS_DELETE_REQUEST,
    FOODS_DELETE_SUCCESS,
    FOODS_DELETE_FAIL,
    FOODS_BYID_REQUEST,
    FOODS_BYID_SUCCESS,
    FOODS_BYID_FAIL,
    FOODS_UPDATE_REQUEST,
    FOODS_UPDATE_SUCCESS,
    FOODS_UPDATE_FAIL,
    FOODS_UPDATE_RESET

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


export const foodDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case FOODS_DELETE_REQUEST:
                  return { loading: true }
            case FOODS_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case FOODS_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}


export const foodDetailsReducer = (state = { foods: {} }, action) => {
      switch (action.type) {
            case FOODS_BYID_REQUEST:
                  return { ...state, loading: true }
            case FOODS_BYID_SUCCESS:
                  return { loading: false, foods: action.payload }
            case FOODS_BYID_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const foodUpdateRedudcer = (state = { foods: {} }, action) => {
      switch (action.type) {
            case FOODS_UPDATE_REQUEST:
                  return {  loading: true }
            case FOODS_UPDATE_SUCCESS:
                  return { loading: false, success:true, foods: action.payload }
            case FOODS_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case FOODS_UPDATE_RESET:
                  return {
                        foods:{}
                  }
            default:
                  return state
      }
}

