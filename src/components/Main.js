import React from 'react'
import Card from './Card'
import {connect} from 'react-redux';
import StartPage from "../components/StartPage"
import {getAllHotelById} from '../store/actions/Hotels'


const Main = ({user , hotels , getAllHotelById}) => {
   
    
   
    const arr = [<Card /> , <Card /> , <Card />, <Card />, <Card /> , <Card />]
    return (
        <>
        <StartPage/>
      
        <div className="container bg-gray-700 mt-10 absolute ml-10">
        <hr className = "text-center"/>
        
            <div className="flex justify-around flex-wrap mt-4">
            {arr.map(item => (<div className="mt-8">{item}</div>))}
        </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
  user: state.user,
  hotels : state.hotels
})

export default connect(mapStateToProps , {getAllHotelById})(Main)
