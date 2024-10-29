import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container dark:bg-slate-900 mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:4xl'>We're are delighted to have you <span className='text-pink-500'>Here:)</span></h1>
          <Link to="/">
          <p className='mt-12'>Whether you're a seasoned student or just starting out, you'll find a diverse range of subjects to explore. From humanities and sciences to business and technology, we have something for everyone. Our experienced instructors are dedicated to providing engaging and informative lessons that will inspire and challenge you.


</p>
          <button className='bg-pink-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
    </div>
    </div>
    </>
  )
}

export default Course