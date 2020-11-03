import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// const Auth = () => {
//     return (
//         <ul className="flex mr-8 px-4 space-x-8">
//                  <li>{user.user.name}</li>
//                  <Link to="/login" className="hover:text-white">Login</Link>
//                  <Link to="/register" className="hover:text-white">Register</Link>
//         </ul>
//     )
// }

// const NotAuth = () => {
//     return (
//         <ul className="flex mr-8 px-4 space-x-8">
//                  <Link to="/login" className="hover:text-white">Login</Link>
//                  <Link to="/register" className="hover:text-white">Register</Link>
//         </ul>
//     )
// }

const Navigation = ({user}) => {
    return (
        <div className="bg-blue-700 h-20 flex justify-end sticky top-0 items-center shadow-xl">
             {user.isLogged ? ( <ul className="flex mr-8 px-4 space-x-8">
                 <li className="text-white">{user.user.name}</li>
                 <li className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Logout</li>
                 <Link to="/addHotel" className="hover:text-white">Add Hotel</Link>
        </ul>) : (<ul className="flex mr-8 px-4 space-x-8">
                 <Link to="/login" className="hover:text-white">Login</Link>
                 <Link to="/register" className="hover:text-white">Register</Link>
        </ul>) }
     </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps , null)(Navigation)
