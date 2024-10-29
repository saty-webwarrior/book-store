import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  
  return (
    <div className='dark:text-black'>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">LogIn</h3>
    <div className='mt-4 space-y-2'>
      <span className=''>Email</span>
      <br />
      </div >
      <div className='mt-4 space-y-2'>
      <input type="email" placeholder='Enter your Email 'className='w-80 py-1 px-3 rounded-md outline-none border'
      {...register("email", { required: true })}/>
      {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
      </div>
      <div className='mt-4 space-y-2'>
      <span className=''>Password</span>
      <br />
      <input type="password" placeholder='Enter your Password' className='w-80 py-1 px-3 rounded-md outline-none border'
       {...register("password", { required: true })}/>
       <br />
       {<errors className="password"></errors> && <span className='text-sm text-red-500'>Password must be required</span>}
      </div>
      <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>LogIn</button>
        <p>Not Registered?{" "}
        <Link to="/signup">
        <span className='underline text-blue-500 cursor-pointer'>SignUp</span>
        </Link></p>
      </div>

  </div>
</dialog>
    </div>
  )
}

export default Login