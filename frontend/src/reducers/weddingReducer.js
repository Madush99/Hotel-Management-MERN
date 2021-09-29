import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL, WEDDING_ALL_REQUEST, WEDDING_ALL_SUCCESS, WEDDING_ALL_FAIL, WEDDING_BYID_REQUEST, WEDDING_BYID_SUCCESS, WEDDING_BYID_FAIL, WEDDING_DELETE_REQUEST, WEDDING_DELETE_SUCCESS, WEDDING_DELETE_FAIL, WEDDING_UPDATE_REQUEST, WEDDING_UPDATE_SUCCESS, WEDDING_UPDATE_FAIL, WEDDING_UPDATE_RESET } from '../constants/weddingConstant.js'

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

export const wedByIdReducer = (state = { weddings: {} }, action) => {
    switch (action.type) {
          case WEDDING_BYID_REQUEST:
                return { ...state, loading: true }
          case WEDDING_BYID_SUCCESS:
                return { loading: false, weddings: action.payload }
          case WEDDING_BYID_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}

export const wedDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case WEDDING_DELETE_REQUEST:
                  return { loading: true }
            case WEDDING_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case WEDDING_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const wedUpdateReducer = (state = { weddingd: {} }, action) => {

      switch (action.type){
            case WEDDING_UPDATE_REQUEST:
                  return { loading: true }
            case WEDDING_UPDATE_SUCCESS:
                  return { loading: false, success:true, weddings:action.payload }
            case WEDDING_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case WEDDING_UPDATE_RESET:
                  return{
                        weddings: {}
                  }
            default:
                  return state
      }
}