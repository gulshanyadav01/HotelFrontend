import {
  ADD_HOTEL,
  ADD_HOTEL_FAIL,
  GET_HOTEL_BY_ID,
  GET_HOTEL_BY_ID_FAIL,
  ALL_HOTELS,
  ALL_HOTELS_FAIL
} from '../types';

import HotelCard from "../../components/HotelCard"

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

export const AllHotels = () => async dispatch => {

    try {

        const res = await axios.get('https://hotelbackendapp.herokuapp.com/admin/allHotels')
        
        console.log('action hotel', res.data);
        // console.log(resHotel);

        dispatch({
            type : ALL_HOTELS,
            payload : res.data
        })
       
    } catch (err) {
        console.log('action hotel' , err.response)
        dispatch({
            type : ALL_HOTELS_FAIL,
            payload: err.response.data.msg
        })
    }
    
}


