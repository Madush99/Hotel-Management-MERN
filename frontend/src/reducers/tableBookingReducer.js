import {
    TBOOKING_CREATE_REQUEST,
    TBOOKING_CREATE_SUCCESS,
    TBOOKING_CREATE_FAIL,
    TBOOKING_CREATE_RESET,
    TBOOKING_LIST_REQUEST,
    TBOOKING_LIST_SUCCESS,
    TBOOKING_LIST_FAIL
} from '../constants/tableConstants'





export const tableBookingReducer = (state = {}, action) => {
    switch (action.type) {
          case TBOOKING_CREATE_REQUEST:
                return { loading: true }
          case TBOOKING_CREATE_SUCCESS:
                return { loading: false, tbookings: action.payload }
          case TBOOKING_CREATE_FAIL:
                return { loading: false, error: action.payload }
          case TBOOKING_CREATE_RESET:
                return {}
          default:
                return state
    }
}

export const tablebookingListReducer = (state = { tablebookings: [] }, action) => {
    switch (action.type) {
          case  TBOOKING_LIST_REQUEST:
                return { loading: true }
          case TBOOKING_LIST_SUCCESS:
                return { loading: false, tablebookings: action.payload }
          case TBOOKING_LIST_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}