import { CONFERENCE_INSERT_REQUEST,  CONFERENCE_INSERT_SUCCESS, CONFERENCE_INSERT_FAIL, CONFERENCE_ALL_REQUEST, CONFERENCE_ALL_SUCCESS, CONFERENCE_ALL_FAIL, CONFERENCE_BYID_REQUEST, CONFERENCE_BYID_SUCCESS, CONFERENCE_BYID_FAIL, CONFERENCE_DELETE_REQUEST, CONFERENCE_DELETE_SUCCESS, CONFERENCE_DELETE_FAIL, CONFERENCE_UPDATE_REQUEST, CONFERENCE_UPDATE_SUCCESS, CONFERENCE_UPDATE_FAIL, CONFERENCE_UPDATE_RESET } from '../constants/conferenceConstant.js'

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

export const conAllReducer = (state = { conference: [] }, action) => {
    switch (action.type) {
          case  CONFERENCE_ALL_REQUEST:
                return { loading: true }
          case CONFERENCE_ALL_SUCCESS:
                return { loading: false, conference: action.payload }
          case CONFERENCE_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}

export const conByIdReducer = (state = { conference: {} }, action) => {
    switch (action.type) {
          case CONFERENCE_BYID_REQUEST:
                return { ...state, loading: true }
          case CONFERENCE_BYID_SUCCESS:
                return { loading: false, conference: action.payload }
          case CONFERENCE_BYID_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}


export const conDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case CONFERENCE_DELETE_REQUEST:
                  return { loading: true }
            case CONFERENCE_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case CONFERENCE_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const conUpdateReducer = (state = { conference: {} }, action) => {

      switch (action.type){
            case CONFERENCE_UPDATE_REQUEST:
                  return { loading: true }
            case CONFERENCE_UPDATE_SUCCESS:
                  return { loading: false, success:true, conference:action.payload }
            case CONFERENCE_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_UPDATE_RESET:
                  return{
                        conference: {}
                  }
            default:
                  return state
      }
}

