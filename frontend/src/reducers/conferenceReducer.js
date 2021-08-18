import { CONFERENCE_INSERT_REQUEST,  CONFERENCE_INSERT_SUCCESS, CONFERENCE_INSERT_FAIL } from '../constants/conferenceConstant.js'

export const conferenceInsertReducer = (state = {}, action) => {
    switch (action.type) {
        case CONFERENCE_INSERT_REQUEST:
            return { loading: true }
        case CONFERENCE_INSERT_SUCCESS:
            return { loading: false, conferenceInfo: action.payload }
        case CONFERENCE_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

