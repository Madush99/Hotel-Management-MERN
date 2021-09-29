import axios from 'axios'
import {
      REST_ALL_REQUEST,
      REST_ALL_SUCCESS,
      REST_ALL_FAIL,
      REST_BYID_REQUEST,
      REST_BYID_SUCCESS,
      REST_BYID_FAIL,
      REST_CREATE_REQUEST,
      REST_CREATE_SUCCESS,
      REST_CREATE_FAIL,
      REST_DELETE_REQUEST,
      REST_DELETE_SUCCESS,
      REST_DELETE_FAIL,
      REST_UPDATE_REQUEST,
      REST_UPDATE_SUCCESS,
      REST_UPDATE_FAIL,


} from '../constants/restaurentsConstants'


export const allRestaurants = () => async (dispatch) => {
      try {
            dispatch({
                  type: REST_ALL_REQUEST,
            })

            const { data } = await axios.get('/api/restaurents/')

            console.log(data)

            dispatch({
                  type: REST_ALL_SUCCESS,
                  payload: data
            })
      } catch (error) {
            console.log(error)

            dispatch({
                  type: REST_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,

            })
      }
}

//get Restaurant details by id

export const getRestDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REST_BYID_REQUEST,
            })

            const { data } = await axios.get(`/api/restaurents/${id}`)

            dispatch({
                  type: REST_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: REST_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


//create Restaurent


export const createRest = (name, type, tables, phoneNo, email, location, image1, image2, image3, description) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REST_CREATE_REQUEST,
            })

            //   const {
            //     userLogin: { userInfo },
            //   } = getState()

            //   const config = {
            //     headers: {
            //       Authorization: `Bearer ${userInfo.token}`,
            //     },
            //   }

            const { data } = await axios.post(`/api/restaurents/create`, { name, type, tables, phoneNo, email, location, image1, image2, image3, description })

            dispatch({
                  type: REST_CREATE_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: REST_CREATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}



export const deleteRest = (id) => async (dispatch) => {
      try {
            dispatch({
                  type: REST_DELETE_REQUEST,
            })

            await axios.delete(`/api/restaurents/${id}`)

            dispatch({
                  type: REST_DELETE_SUCCESS,

            })
      } catch (error) {
            dispatch({
                  type: REST_DELETE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}



export const updateRestaurantDetails = (restaurant) => async (dispatch) => {

      try {
            dispatch({
                  type: REST_UPDATE_REQUEST,
            })

            const { data } = axios.put(`/api/restaurents/${restaurant._id}`, restaurant)

            dispatch({
                  type: REST_UPDATE_SUCCESS,
                  payload: data,
            })

      } catch (error) {
            dispatch({
                  type: REST_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message
            })
      }

}


export const filterRestaurants = (searchkey,type) => async dispatch => {

      var filteredRest;

      dispatch({ type: REST_ALL_REQUEST })

      try {
            const response = await axios.get('/api/restaurents/')
            filteredRest = response.data.filter(restaurant => restaurant.name.toLowerCase().includes(searchkey))

            if (type != 'all') {
                  filteredRest = response.data.filter(restaurant => restaurant.type.toLowerCase()==type)
            }

            dispatch({ type: REST_ALL_SUCCESS, payload: filteredRest })
      } catch (error) {
            dispatch({ type: REST_ALL_FAIL, payload: error })
      }
} 