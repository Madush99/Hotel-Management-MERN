import {
    REST_ALL_REQUEST,
    REST_ALL_SUCCESS,
    REST_ALL_FAIL,
} from '../constants/restaurentsConstants'


export const restAllReducer = (state = { restautants: [] }, action) => {
    switch (action.type) {
          case  REST_ALL_REQUEST:
                return { loading: true }
          case REST_ALL_SUCCESS:
                return { loading: false, restautants: action.payload }
          case REST_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}