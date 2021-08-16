import axios from 'axios'

import {
      ROOMS_ALL_REQUEST,
      ROOMS_ALL_SUCCESS,
      ROOMS_ALL_FAIL
} from '../constants/roomsConstants.js'

export const allRooms = () => async (dispatch) => {
      try {
            dispatch({
                  type: ROOMS_ALL_REQUEST,
            })

            const { data } = await axios.get('/api/rooms/allrooms')

            console.log(data)

            dispatch({
                  type: ROOMS_ALL_SUCCESS,
                  payload: data
            })
      } catch (error) {
            console.log(error)

            dispatch({
                  type: ROOMS_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,

            })
      }
}