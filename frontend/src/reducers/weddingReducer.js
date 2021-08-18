import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL, WEDDING_ALL_REQUEST, WEDDING_ALL_SUCCESS, WEDDING_ALL_FAIL } from '../constants/weddingConstant.js'

export const weddingInsertReducer = (state = {}, action) => {
    switch (action.type) {
        case WEDDING_INSERT_REQUEST:
            return { loading: true }
        case WEDDING_INSERT_SUCCESS:
            return { loading: false, weddingInfo: action.payload }
        case WEDDING_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const wedAllReducer = (state = { weddings: [] }, action) => {
    switch (action.type) {
          case  WEDDING_ALL_REQUEST:
                return { loading: true }
          case WEDDING_ALL_SUCCESS:
                return { loading: false, weddings: action.payload }
          case WEDDING_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}
