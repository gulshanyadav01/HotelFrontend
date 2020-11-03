import {combineReducers} from 'redux'

import User from './User'
import Hotel from './Hotel'

export default combineReducers({
    user : User,
    hotels: Hotel
})