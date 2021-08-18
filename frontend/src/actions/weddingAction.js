import axios from 'axios'
import { WEDDING_INSERT_REQUEST, WEDDING_INSERT_SUCCESS, WEDDING_INSERT_FAIL } from '../constants/weddingConstant.js'

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


