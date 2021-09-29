import {
    REST_ALL_REQUEST,
    REST_ALL_SUCCESS,
    REST_ALL_FAIL,
    REST_BYID_REQUEST,
    REST_BYID_SUCCESS,
    REST_BYID_FAIL,
    REST_CREATE_REQUEST,
    REST_CREATE_SUCCESS,
    REST_CREATE_FAIL,
    REST_CREATE_RESET,
    REST_DELETE_REQUEST,
    REST_DELETE_SUCCESS,
    REST_DELETE_FAIL,
    REST_UPDATE_REQUEST,
    REST_UPDATE_SUCCESS,
    REST_UPDATE_FAIL,
    REST_UPDATE_RESET

} from '../constants/restaurentsConstants'


export const restAllReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
          case  REST_ALL_REQUEST:
                return { loading: true }
          case REST_ALL_SUCCESS:
                return { loading: false, restaurants: action.payload }
          case REST_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}


export const restDetailsReducer = (state = { restaurants: {} }, action) => {
      switch (action.type) {
            case REST_BYID_REQUEST:
                  return { ...state, loading: true }
            case REST_BYID_SUCCESS:
                  return { loading: false, restaurants: action.payload }
            case REST_BYID_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}


export const restCreateReducer = (state = {}, action) => {
      switch (action.type) {
            case REST_CREATE_REQUEST:
                  return { loading: true }
            case REST_CREATE_SUCCESS:
                  return { loading: false, restaurants: action.payload }
            case REST_CREATE_FAIL:
                  return { loading: false, error: action.payload }
            case REST_CREATE_RESET:
                  return {}
            default:
                  return state
      }
}


export const restDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case REST_DELETE_REQUEST:
                  return { loading: true }
            case REST_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case REST_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}


export const restaurantUpdateReducer = (state = { restaurants: {} }, action) => {

      switch (action.type){
            case REST_UPDATE_REQUEST:
                  return { loading: true }
            case REST_UPDATE_SUCCESS:
                  return { loading: false, success:true, restaurants:action.payload }
            case REST_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case REST_UPDATE_RESET:
                  return{
                        restaurants: {}
                  }
            default:
                  return state
      }
}