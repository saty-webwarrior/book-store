import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from '../Components/Login'
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='dark:text-white flex justify-center items-center h-screen w-screen'>
    <div className='dark:text-white flex items-center justify-center shadow-md'>
    <div id="my_modal_3" className="border-[2px] p-5 rounded-md">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to="/"
           className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X
          </Link>
        
        <h3 className="font-bold text-lg">SignUp</h3>
        <div className='mt-4 space-y-2'>
          <span className=''>Name</span>
          <br />
          </div >
          <div className='mt-4 space-y-2'>
          <input type="text" placeholder='Enter your full Name' className='w-80 py-1 px-3 dark:text-black rounded-md outline-none border'
          {...register("text", { required: true })}/>
          </div>
          <span>Email</span><br />
          <div className='mt-4 space-y-2'>
          <input type="Email" placeholder='Enter your Email' className='w-80 py-1 px-3 rounded-md  dark:text-black outline-none border'
          {...register("email", { required: true })}/>
          </div>
          <div className='mt-4 space-y-2'>
          <span className=''>Password</span>
          <br />
          <input type="password" placeholder='Enter your Password' className='w-80 py-1 px-3 rounded-md  dark:text-black outline-none border'
          {...register("password", { required: true })} />
          <br />
          {<errors className="password"></errors> && <span className='text-sm text-red-500'>Password must be required</span>}
          </div>
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>SignUp</button>
            <p>Have account?{" "} 
            <button className='underline text-blue-500 cursor-pointer' onClick={()=>
              document.getElementById("my_modal_3").showModal()
            }>LogIn</button>
              <Login />
            </p>
          </div>
          </form>
      </div>
    </div>
        </div>
        </div>
  )
}

export default Signup