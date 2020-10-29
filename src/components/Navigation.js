import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="bg-blue-700 h-20 flex justify-between sticky top-0 items-center shadow-xl">
             <ul className="flex mr-8 px-4 space-x-8">
                 <Link to="/login" className="hover:text-white">Login</Link>
                 <Link to="/register" className="hover:text-white">Register</Link>
             </ul>
     </div>
    )
}

export default Navigation
