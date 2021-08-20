import { BOOKING_LIST_FAIL, BOOKING_LIST_REQUEST, BOOKING_LIST_RESET, BOOKING_LIST_SUCCESS } from "../constants/bookingsConstants"

export const bookingListReducer = (state = { bookings: [] }, action) => {
      switch (action.type) {
            case BOOKING_LIST_REQUEST:
                  return { loading: true }
            case BOOKING_LIST_SUCCESS:
                  return { loading: false, bookings: action.payload }
            case BOOKING_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case BOOKING_LIST_RESET:
                  return { bookings: [] }
            default:
                  return state
      }
}
