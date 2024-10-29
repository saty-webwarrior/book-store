import React from 'react'

function Cards({item}) {
  return(
    <>
    <div className='mt-4 my-3 flex p-3'>
    <div className="card bg-base-100 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      { item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex-shrink-x justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="cursor-pointer rounded-full border-[2px] hover:bg-pink-500 hover:text-white px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  ) 
    
}

export default Cards