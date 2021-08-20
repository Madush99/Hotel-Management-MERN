import axios from 'axios'
import {
    FOODS_ALL_REQUEST,
    FOODS_ALL_SUCCESS,
    FOODS_ALL_FAIL,
    FOODS_CREATE_REQUEST,
    FOODS_CREATE_SUCCESS,
    FOODS_CREATE_FAIL
    
} from '../constants/foodsConstants'






export const allFoods = () => async (dispatch) => {
    try {
          dispatch({
                type: FOODS_ALL_REQUEST,
          })

          const { data } = await axios.get('/api/food/')

          console.log(data)

          dispatch({
                type: FOODS_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: FOODS_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}


export const addFood = (name,description,price,category,image1,image2,image3) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FOODS_CREATE_REQUEST,
      })
  
  
  
      const { data } = await axios.post(`http://localhost:6500/api/food/addfood`, {name,price,category,image1,image2,image3,description})
  
      dispatch({
        type: FOODS_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: FOODS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
