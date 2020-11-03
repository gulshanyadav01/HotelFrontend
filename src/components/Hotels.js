import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import {AllHotels} from '../store/actions/Hotels'

const Hotels = ({hotels , AllHotels}) => {
  
    useEffect(() => {
        AllHotels()
        console.log('in hotel1' , hotels)
        console.log('in hotel2' , hotels.hotels)
    })

    return (
        <div>
            {hotels.length !== null ? (<h1>{hotels.length}</h1>) : ''}
        </div>
    )
}

const mapStateTopProps = state => ({
    hotels: state.hotels.hotels
})

export default connect(mapStateTopProps , {AllHotels})(Hotels)
