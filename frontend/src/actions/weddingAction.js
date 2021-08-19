import axios from 'axios'
import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL, WEDDING_ALL_REQUEST, WEDDING_ALL_SUCCESS, WEDDING_ALL_FAIL, WEDDING_BYID_REQUEST, WEDDING_BYID_SUCCESS, WEDDING_BYID_FAIL } from '../constants/weddingConstant.js'

export const weddingAdd = (wedHallName, wedSeats, wedDes, wedImage) => async (dispatch) => {
    try {
        dispatch({
            type: WEDDING_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:6500/api/weddings/addWedding', { wedHallName, wedSeats, wedDes, wedImage },
            config
        )

        dispatch({
            type: WEDDING_INSERT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('weddingInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: WEDDING_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const allWeddings = () => async (dispatch) => {
    try {
          dispatch({
                type: WEDDING_ALL_REQUEST,
          })

          const { data } = await axios.get('/api/weddings/')

          console.log(data)

          dispatch({
                type: WEDDING_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: WEDDING_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}

export const weddingById = (id) => async (dispatch, getState) => {
    try {
          dispatch({
                type: WEDDING_BYID_REQUEST,
          })

          const { data } = await axios.get(`http://localhost:6500/api/weddings/${id}`)

          dispatch({
                type: WEDDING_BYID_SUCCESS,
                payload: data
          })

    } catch (error) {
          dispatch({
                type: WEDDING_BYID_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}