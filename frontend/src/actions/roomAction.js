import axios from 'axios'

import {
      ROOMS_ALL_REQUEST,
      ROOMS_ALL_SUCCESS,
      ROOMS_ALL_FAIL,
      ROOMS_BYID_REQUEST,
      ROOMS_BYID_SUCCESS,
      ROOMS_BYIDL_FAIL,
      ROOMS_POSTBYID_REQUEST,
      ROOMS_POSTBYID_SUCCESS,
      ROOMS_POSTBYIDL_FAIL,
      CREATE_ROOMS_REQUEST,
      CREATE_ROOMS_SUCCESS,
      CREATE_ROOMS_FAIL,
      ROOMS_LIST_REQUEST,
      ROOMS_LIST_SUCCESS,
      ROOMS_LIST_FAIL,
      ROOMS_DELETE_REQUEST,
      ROOMS_DELETE_SUCCESS,
      ROOMS_DELETE_FAIL,
      ROOMS_UPDATE_RESET,
      ROOMS_UPDATE_SUCCESS,
      ROOMS_UPDATE_FAIL
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

export const getRoomDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ROOMS_BYID_REQUEST,
            })

            const { data } = await axios.get(`/api/rooms/${id}`)

            dispatch({
                  type: ROOMS_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: ROOMS_BYIDL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const bookRoomDetails = (roomid) => async (dispatch) => {
      try {
            dispatch({
                  type: ROOMS_POSTBYID_REQUEST
            })
            const { data } = await axios.post('/api/rooms/roomsbyId', { roomid })

            dispatch({
                  type: ROOMS_POSTBYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: ROOMS_POSTBYIDL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const roomCreate = (name, maxcount, features1, features2, features3, features4, features5, rentperday, imageUrl1, imageUrl2, imageUrl3, type, description) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CREATE_ROOMS_REQUEST,
            })


            const { data } = await axios.post(`/api/rooms/createrooms`, { name, maxcount, features1, features2, features3, features4, features5, rentperday, imageUrl1, imageUrl2, imageUrl3, type, description })

            dispatch({
                  type: CREATE_ROOMS_SUCCESS,
                  payload: data,
            })



      } catch (error) {
            dispatch({
                  type: CREATE_ROOMS_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })

      }
}


export const listRooms = () => async (dispatch) => {
      try {
            dispatch({
                  type: ROOMS_LIST_REQUEST,
            })

            const { data } = await axios.get(`/api/rooms/allrooms`)

            dispatch({
                  type: ROOMS_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: ROOMS_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const deleteRoom = (id) => async (dispatch) => {
      try {
            dispatch({
                  type: ROOMS_DELETE_REQUEST,
            })

            await axios.delete(`/api/rooms/${id}`)

            dispatch({
                  type: ROOMS_DELETE_SUCCESS,

            })
      } catch (error) {
            dispatch({
                  type: ROOMS_DELETE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const updateRoom = (rooms) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ROOMS_UPDATE_RESET,
            })


            const { data } = await axios.put(`/api/rooms/${rooms._id}`, rooms)

            dispatch({
                  type: ROOMS_UPDATE_SUCCESS,
                  payload: data,
            })


      } catch (error) {
            dispatch({
                  type: ROOMS_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}