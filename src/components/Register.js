import React , {useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../store/actions/User'
import  {toast} from 'react-toastify'
// import {useHistory , Redirect} from 'react-router-dom'
// import Login from './Login'

import {useHistory} from 'react-router-dom'

// const sendMessage = () => {
//   toast.success('successFully registerd');

// }

const Register = ({user , registerUser}) => {
    
    let history = useHistory();
    
    useEffect(() => {
       if(user.token) {
         toast.success('SuccessFully Regsitered');
         history.push('/login')
       }
       if(user.error) {
         toast.error(user.error)
       }
       //eslint-disable-next-line
    })

    
    


    const formik = useFormik({
            initialValues: {
              email: "",
              name: "", 
              password: ""
            },
        
            // validate,
            validationSchema: Yup.object({
              name: Yup.string().required("Name is Required"),
              email: Yup.string().email().required("Email is required"),
              password: Yup.string()
                .min(6, "Password should atleat 6 char long")
                .required("password is required")
            }),
            onSubmit: (values) => {
              //console.log(JSON.stringify(values, null, 2));
              registerUser(values)
            }
          });
        
          // console.log(formik);

          // if(user.token) {
          //   history.push('/login')
          // }
        
          return (
            <div className="w-full shadow-lg max-w-xs mx-auto my-16" >
              <div className="flex justify-around">
             <Link to="/login" className="text-white text-2xl rounded">SignIn</Link>
             <Link to="/register" className="text-white text-2xl rounded">SignUp</Link>
          </div>
              <form
                onSubmit={formik.handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-400">{formik.errors.email}</p>
                  ) : (
                    ""
                  )}
                </div>
        
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...formik.getFieldProps("name")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className="text-red-400">{formik.errors.name}</p>
                  ) : (
                    ""
                  )}
                </div>
        
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-400">{formik.errors.password}</p>
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
  user : state.user
})

export default connect(mapStateToProps , {registerUser})(Register);

// npm install tailwindcss postcss-cli autoprefixer@9.8.6 -D




// 