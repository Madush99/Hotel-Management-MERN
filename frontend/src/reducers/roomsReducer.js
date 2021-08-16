import {
      ROOMS_ALL_REQUEST,
      ROOMS_ALL_SUCCESS,
      ROOMS_ALL_FAIL
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