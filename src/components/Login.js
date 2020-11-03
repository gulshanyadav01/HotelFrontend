import React,{ useEffect } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
import  {toast} from 'react-toastify'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { userLogin } from "../store/actions/User"


const Login = ({ user, userLogin }) => {
  // const [toggle , setToggle] = useState(false);

  let history = useHistory();
    
    useEffect(() => {
      if(user.isLogged) {
        toast.success('SuccessFully logged in ')
        history.push('/main')
      }
      if(user.error) {
        toast.error(user.error)
      }
    } , [history , user.isLogged , user.error])

    const formik = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
    
        // validate,
        validationSchema: Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .min(6, "Password should atleat 6 char long")
            .required("password is required")
        }),
        onSubmit: (values) => {
          // console.log(JSON.stringify(values, null, 2));
          userLogin(values);
        }
      });
    
      return (
        <div className="w-full shadow-lg max-w-xs mx-auto my-16">
          <div className="flex justify-around ">
             <Link to="/login" className="text-white text-2xl  bg-pink-400 rounded-full py-1 px-3">SignIn</Link>
             <Link to="/register" className="text-white text-2xl">SignUp</Link>
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
      
            {/* //hello  */}
            
          </form>
        </div>
      );
    
}

const mapStateToProps = state => ({
  user : state.user
})
export default connect(mapStateToProps, {userLogin})(Login)
