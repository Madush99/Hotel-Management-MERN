import axios from 'axios'
import {
    TBOOKING_CREATE_REQUEST,
    TBOOKING_CREATE_SUCCESS,
    TBOOKING_CREATE_FAIL
} from '../constants/tableConstants'



export const creatTableBooking = (userid,restaurantid,date,phoneNo,adults,childrens,time) => async (dispatch, getState) => {
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
  
      const { data } = await axios.post(`/api/tableBooking`, {userid,restaurantid,date,phoneNo,adults,childrens,time})
  
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
