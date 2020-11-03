import {
    REGISTER_USER,
    REGISTER_USER_FAIL,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    USER_PROFILE,
    USER_PROFILE_FAIL
  } from '../types'

  import axios from 'axios'
  import setAuthToken from '../utils'


  export const userProfile = () =>  async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('https://hotelbackendapp.herokuapp.com/auth/userDetails');
      dispatch({
        type: USER_PROFILE,
        payload: res.data
      })
    } catch (err) {
        console.log(err.response)
        dispatch({
            type : USER_PROFILE_FAIL,
            payload: err.response
        })
    }
  }


  export const registerUser = (data) => async dispatch => {
     
       const config = {
           headers : {
               "Content-Type":"application/json"
           }
       }

       try {
         const res =  await axios.post('https://hotelbackendapp.herokuapp.com/auth/signup' , data , config)
         dispatch({
             type : REGISTER_USER,
             payload: res.data
         })
         
         userProfile()
      
       } catch (err) {
           console.log(err.response.data.msg)
           dispatch({
               type : REGISTER_USER_FAIL,
               payload: err.response.data.msg
           })
       }
  }




export const userLogin = (data) => async dispatch =>  {
    const config = {
        headers : {
            "Content-Type":"application/json"
        }
    }
    try{
        const res = await axios.post('https://hotelbackendapp.herokuapp.com/auth/login',data, config);
        
        console.log('in Action' , res.data)
        dispatch({
            type:LOGIN_USER,
            payload: res.data
        })
        userProfile()
    }catch (err) {
        console.log(err.response.data.msg)
        dispatch({
            type : LOGIN_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}

