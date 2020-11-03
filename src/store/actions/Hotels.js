import {
  ADD_HOTEL,
  ADD_HOTEL_FAIL,
  GET_HOTEL_BY_ID,
  GET_HOTEL_BY_ID_FAIL
} from '../types'

import axios from 'axios'

export const addHotel = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }
        const res = await axios.post('https://hotelbackendapp.herokuapp.com/admin/addHotel' , data , config);

        dispatch({
            type : ADD_HOTEL,
            payload: res.data
        })
    } catch (err) {
        console.log(err.response)
        dispatch({
           type: ADD_HOTEL_FAIL,
           payload: err.response
        })
    }
}

export const getAllHotelById = (id) => async dispatch => {
    try {
      
        const res = await axios.get(`https://hotelbackendapp.herokuapp.com/admin/getHotelById/${id}`);

        dispatch({
            type : GET_HOTEL_BY_ID,
            payload: res.data
        })
    } catch (err) {
        console.log(err.response)
        dispatch({
           type: GET_HOTEL_BY_ID_FAIL,
           payload: err.response
        })
    }
}