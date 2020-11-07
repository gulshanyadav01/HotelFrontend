import React from 'react'

const HotelCard = (props) => {
    console.log(props.name)
    return (
        <div className="w-64 h-64 bg-gray-900 flex-col justify-around rounded m-2 shadow-xl transform hover:-translate-y-1 hover:scale-110">
              {/* <div>
                  <img style={{height:140}}  className="w-full rounded"  src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" alt= "hotelimage"  />
              </div> */}
              <div>
                  <p className="text-center text-white">{props.name}</p>
                
                  <div className="flex justify-around mt-12">
                  <button className=" bg-red-700 hover:bg-blue-500   text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">View</button>
                  <button className=" bg-green-900 hover:bg-blue-500  text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Book</button>
                  </div>
                    
              </div>
        </div>
    )
}

export default HotelCard;
