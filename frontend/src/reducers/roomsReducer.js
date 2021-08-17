import {
      ROOMS_ALL_REQUEST,
      ROOMS_ALL_SUCCESS,
      ROOMS_ALL_FAIL,
      ROOMS_BYID_REQUEST,
      ROOMS_BYID_SUCCESS,
      ROOMS_BYIDL_FAIL,
      ROOMS_POSTBYID_REQUEST,
      ROOMS_POSTBYID_SUCCESS,
      ROOMS_POSTBYIDL_FAIL
} from '../constants/roomsConstants.js'

export const roomsAllReducer = (state = { rooms: [] }, action) => {
      switch (action.type) {
            case ROOMS_ALL_REQUEST:
                  return { loading: true }
            case ROOMS_ALL_SUCCESS:
                  return { loading: false, rooms: action.payload }
            case ROOMS_ALL_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const roomDetailsReducer = (state = { rooms: {} }, action) => {
      switch (action.type) {
            case ROOMS_BYID_REQUEST:
                  return { ...state, loading: true }
            case ROOMS_BYID_SUCCESS:
                  return { loading: false, rooms: action.payload }
            case ROOMS_BYIDL_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const roomBookDetailReducer = (state = { rooms: {} }, action) => {
      switch (action.type) {
            case ROOMS_POSTBYID_REQUEST:
                  return { loading: true }
            case ROOMS_POSTBYID_SUCCESS:
                  return { loading: false, rooms: action.payload }
            case ROOMS_POSTBYIDL_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}