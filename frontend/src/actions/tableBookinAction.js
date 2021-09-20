import axios from 'axios'
import {
    TBOOKING_CREATE_REQUEST,
    TBOOKING_CREATE_SUCCESS,
    TBOOKING_CREATE_FAIL,
    TBOOKING_LIST_REQUEST,
    TBOOKING_LIST_SUCCESS,
    TBOOKING_LIST_FAIL
} from '../constants/tableConstants'



export const creatTableBooking = (userid,userName,restaurantid,restaurantName,date,phoneNo,adults,childrens,time) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TBOOKING_CREATE_REQUEST,
      })
  
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
  
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${userInfo.token}`,
    //     },
    //   }
  
      const { data } = await axios.post(`/api/tableBooking`, {userid,userName,restaurantid,restaurantName,date,phoneNo,adults,childrens,time})
  
      dispatch({
        type: TBOOKING_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: TBOOKING_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const listBookings = () => async (dispatch, getState) => {
    try {
          dispatch({
                type:TBOOKING_LIST_REQUEST,
          })

          const {
                userLogin: { userInfo },
          } = getState()

          const config = {
                headers: {
                      Authorization: `Bearer ${userInfo.token}`,
                },
          }

          const { data } = await axios.get(`/api/tableBooking`, config)

          dispatch({
                type: TBOOKING_LIST_SUCCESS,
                payload: data,
          })
    } catch (error) {
          dispatch({
                type: TBOOKING_LIST_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}
