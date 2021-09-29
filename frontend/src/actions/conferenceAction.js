import axios from "axios"
import { CONFERENCE_INSERT_REQUEST, CONFERENCE_INSERT_SUCCESS, CONFERENCE_INSERT_FAIL, CONFERENCE_ALL_REQUEST, CONFERENCE_ALL_SUCCESS, CONFERENCE_ALL_FAIL, CONFERENCE_BYID_REQUEST, CONFERENCE_BYID_SUCCESS, CONFERENCE_BYID_FAIL, CONFERENCE_DELETE_REQUEST, CONFERENCE_DELETE_SUCCESS, CONFERENCE_DELETE_FAIL, CONFERENCE_UPDATE_REQUEST, CONFERENCE_UPDATE_SUCCESS, CONFERENCE_UPDATE_FAIL, CONFERENCE_UPDATE_RESET } from '../constants/conferenceConstant.js'

export const conferenceAdd = (conName, conDes, conSeats, conPrice, conFeatures, conImg1, conImg2, conImg3) => async (dispatch) => {
    try {
        dispatch({
            type: CONFERENCE_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:6500/api/conference/addConference', { conName, conDes, conSeats, conPrice, conFeatures, conImg1, conImg2, conImg3 },
            config
        )

        dispatch({
            type: CONFERENCE_INSERT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('conferenceInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: CONFERENCE_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const allConference = () => async (dispatch) => {
    try {
          dispatch({
                type: CONFERENCE_ALL_REQUEST,
          })

          const { data } = await axios.get('/api/conference/')

          console.log(data)

          dispatch({
                type: CONFERENCE_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: CONFERENCE_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}

export const conferenceById = (id) => async (dispatch, getState) => {
    try {
          dispatch({
                type: CONFERENCE_BYID_REQUEST,
          })

          const { data } = await axios.get(`http://localhost:6500/api/conference/${id}`)

          dispatch({
                type: CONFERENCE_BYID_SUCCESS,
                payload: data
          })

    } catch (error) {
          dispatch({
                type: CONFERENCE_BYID_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}

export const deleteConference = (id) => async (dispatch) => {
    try {
          dispatch({
                type: CONFERENCE_DELETE_REQUEST,
          })

          await axios.delete(`/api/conference/${id}`)

          dispatch({
                type: CONFERENCE_DELETE_SUCCESS,

          })
    } catch (error) {
          dispatch({
                type: CONFERENCE_DELETE_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const updateConDetails = (conference) => async (dispatch) => {

      try {
            dispatch({
                  type: CONFERENCE_UPDATE_REQUEST,
            })

            const { data } = axios.put(`/api/conference/${conference._id}`, conference)

            dispatch({
                  type: CONFERENCE_UPDATE_SUCCESS,
                  payload: data,
            })

      } catch (error) {
            dispatch({
                  type: CONFERENCE_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message
            })
      }

}

export const filterconference = (searchkey) => async dispatch => {
      var filteredConference;
      try {
            dispatch({
            type: CONFERENCE_ALL_REQUEST,
            })

            const  response = await axios.get('/api/conference/')
            filteredConference = response.data.filter(conference => conference.conName.toLowerCase().includes(searchkey))
            dispatch({
                type: CONFERENCE_ALL_SUCCESS,
                payload: filteredConference
            })

      } catch (error) {
            console.log(error)
                 dispatch({
                  type: CONFERENCE_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,

            })

      }

  }