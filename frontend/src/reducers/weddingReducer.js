import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL } from '../constants/weddingConstant.js'

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