import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { AsyncLoginUser } from "../store/actions/UserAction";


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
const dispatch = useDispatch();
   const loginHandler = (user)=>{
      dispatch(AsyncLoginUser(user))
       
   }

  return (
    <div className="h-4/5 flex items-center justify-center mt-15  ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <form  onSubmit={handleSubmit(loginHandler)}
        className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              autoComplete='email'
              {...register("email", { required: true })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input
              type="password"
                autoComplete="current-password"
              {...register("password", { required: true })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
          </div>
             <p> Don't have an account? <NavLink className={"text-blue-500"} to = "/Register">Register here</NavLink></p>
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login