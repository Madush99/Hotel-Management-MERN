import {
    TBOOKING_CREATE_REQUEST,
    TBOOKING_CREATE_SUCCESS,
    TBOOKING_CREATE_FAIL,
    TBOOKING_CREATE_RESET
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

