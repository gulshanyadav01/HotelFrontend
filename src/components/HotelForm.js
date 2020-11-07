import React , {useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import  {toast} from 'react-toastify'


import {useHistory} from 'react-router-dom'
import {AllHotels} from '../store/actions/Hotels'

const Register = ({user , hotels , AllHotels}) => {
    
    // let history = useHistory();
    

    useEffect(() => {
        AllHotels()
        console.log('in hotel1' , hotels)
        console.log('in hotel2' , hotels.hotels)//
        //eslint-disable-next-line


    }, [])
    
   

    const formik = useFormik({
            initialValues: {
            hotelName: "",
            location:"",
            imageUrl:"",
            utilities: "",
            description:""
            },
        
            // validate,
            validationSchema: Yup.object({
              location: Yup.string().required("Location is Required"),
              hotelName: Yup.string().required("Name is Required"),
              imageUrl : Yup.string().required("Image is Required"),
              utilities: Yup.string().required("Utilities is Required"),
              description: Yup.string().required("Description is Required"),
            }),
            onSubmit: (values) => {
              //console.log(JSON.stringify(values, null, 2));
            }
          });
        
         
        
          return (
            <div className="w-full shadow-lg max-w-xs mx-auto my-16" >
              <div className="flex justify-around">
             <h1 className="text-white">Add Hotel</h1>
          </div>
              <form
                onSubmit={formik.handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="hotelName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    name="hotelName"
                    {...formik.getFieldProps("hotelName")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.hotelName && formik.errors.hotelName ? (
                    <p className="text-red-400">{formik.errors.hotelName}</p>
                  ) : (
                    ""
                  )}
                </div>
        
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                   Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    {...formik.getFieldProps("location")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <p className="text-red-400">{formik.errors.location}</p>
                  ) : (
                    ""
                  )}
                </div>
        
                <div className="mb-4">
                  <label
                    htmlFor="imageUrl"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                   Image Url
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    {...formik.getFieldProps("imageUrl")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.Name && formik.errors.Name ? (
                    <p className="text-red-400">{formik.errors.Name}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="utilities"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                   Utilities
                  </label>
                  <input
                    type="text"
                    name="utilities"
                    {...formik.getFieldProps("utilities")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.utilities && formik.errors.utilities ? (
                    <p className="text-red-400">{formik.errors.utilities}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                   description
                  </label>
                  <input
                    type="text"
                    name="description"
                    {...formik.getFieldProps("description")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <p className="text-red-400">{formik.errors.description}</p>
                  ) : (
                    ""
                  )}
                </div>

                {/* {formik.submitCount >= 2 && (<button>Click to Reset</button>)} */}
                <input
                  type="submit"
                  value="submit"
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                />
              </form>
            </div>
          );

        
         

}

const mapStateToProps = state => ({
  user : state.user,
  hotels: state.hotels
})

export default connect(mapStateToProps , {AllHotels})(Register);

// npm install tailwindcss postcss-cli autoprefixer@9.8.6 -D




// 