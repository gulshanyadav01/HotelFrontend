import {
    REGISTER_USER,
    REGISTER_USER_FAIL,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    USER_PROFILE,
    USER_PROFILE_FAIL
  } from '../types'
  


const initialState = {
    token: null,
    loading: false,
    error: null,
    user : null,
    isLogged: false
}


const User =  (state = initialState , action) => {
     switch(action.type) {
        case REGISTER_USER:{
            localStorage.setItem('token' , action.payload.token)
            return {
                ...state,
                user : action.payload,
                loading:true,
                error: null,
                token: localStorage.getItem('token'),
                isLogged: false
            }
        }
        case REGISTER_USER_FAIL:
            case LOGIN_USER_FAIL:
                case USER_PROFILE_FAIL:
            return {
                ...state,
                error: action.payload,
                token: null,
                user: null,
                isLogged: false
            }
        case LOGIN_USER:
            localStorage.setItem('token' , action.payload.token)
            console.log('in reducer' , action.payload)
            return {
                ...state,
                user : action.payload,
                loading:true,
                error: null,
                token: localStorage.getItem('token'),
                isLogged: true
            }
        case USER_PROFILE:
            return {
                ...state,
                user : action.payload,
                error: null, 
                loading: true
            }

        default :
           return state
     }
}

export default User