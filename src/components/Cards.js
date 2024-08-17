import React from 'react'

const Cards = ({data}) => {


  const{name,costForTwo,cuisines,avgRating,cloudinaryImageId} = data.info
  return (
    <div className='border-2  rounded-lg shadow-xl w-60  p-5 m-2 cursor-pointer'>
     <img className='h-40 w-44 m-auto rounded-md' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
     <div className='font-bold text-xl my-2'>{name}</div>
     <div className='text-xs '>{cuisines.join(',')}</div>
    <div className='flex justify-between mt-2 '>
    <div className='text-orange-600 font-bold'>{costForTwo}</div>
    <div className='bg-orange-500 p-1 rounded-lg font-bold text-white'>⭐{avgRating}</div>
    </div>
    </div>
  )
}

export default Cards
