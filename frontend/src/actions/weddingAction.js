import axios from 'axios'
import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL, WEDDING_ALL_REQUEST, WEDDING_ALL_SUCCESS, WEDDING_ALL_FAIL, WEDDING_BYID_REQUEST, WEDDING_BYID_SUCCESS, WEDDING_BYID_FAIL, WEDDING_DELETE_REQUEST, WEDDING_DELETE_SUCCESS, WEDDING_DELETE_FAIL,WEDDING_UPDATE_REQUEST, WEDDING_UPDATE_SUCCESS, WEDDING_UPDATE_FAIL, WEDDING_UPDATE_RESET } from '../constants/weddingConstant.js'

export const weddingAdd = (wedHallName, wedSeats, wedDes, wedimg1, wedimg2, wedimg3) => async (dispatch) => {
    try {
        dispatch({
            type: WEDDING_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:6500/api/weddings/addWedding', { wedHallName, wedSeats, wedDes, wedimg1, wedimg2, wedimg3 },
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


export const deletewedding = (id) => async (dispatch) => {
    try {
          dispatch({
                type: WEDDING_DELETE_REQUEST,
          })

          await axios.delete(`/api/weddings/${id}`)

          dispatch({
                type: WEDDING_DELETE_SUCCESS,

          })
    } catch (error) {
          dispatch({
                type: WEDDING_DELETE_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const updateWedDetails = (weddings) => async (dispatch) => {

      try {
            dispatch({
                  type: WEDDING_UPDATE_REQUEST,
            })

            const { data } = axios.put(`/api/weddings/${weddings._id}`, weddings)

            dispatch({
                  type: WEDDING_UPDATE_SUCCESS,
                  payload: data,
            })

      } catch (error) {
            dispatch({
                  type: WEDDING_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message
            })
      }

}

export const filterweddings = (searchkey) => async dispatch => {
      var filteredWeddings;
      try {
            dispatch({
            type: WEDDING_ALL_REQUEST,
            })

            const  response = await axios.get('/api/weddings/')
            filteredWeddings = response.data.filter(weddings => weddings.wedHallName.toLowerCase().includes(searchkey))
            dispatch({
                type: WEDDING_ALL_SUCCESS,
                payload: filteredWeddings
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