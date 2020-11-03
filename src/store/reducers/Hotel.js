

import {
   ADD_HOTEL,
   ADD_HOTEL_FAIL,
   GET_HOTEL_BY_ID,
   GET_HOTEL_BY_ID_FAIL,
   ALL_HOTELS,
   ALL_HOTELS_FAIL
} from '../types'

const initialState = {
    error: null,
    loading : false,
    hotels: []
}

const Hotel =  (state = initialState , action) => {
     switch(action.type) {
        case ADD_HOTEL:
            return {
                ...state,
                hotels:[...state.hotels , action.payload],
                loading: true,
                error: null
            }
        case ADD_HOTEL_FAIL:
            case GET_HOTEL_BY_ID_FAIL:
                case ALL_HOTELS_FAIL:
            return {
                ...state,
                hotels: null,
                error: action.payload,
                loading:true
            }
        case GET_HOTEL_BY_ID:
            return {
                ...state,
                hotels: action.payload,
                error: null,
                loading: true
            }
        case ALL_HOTELS:
            return {
                ...state,
                hotels: action.payload,
                loading: true,
                error: false
            }
        default :
           return state
     }
 }

 export default Hotel