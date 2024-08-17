import React from 'react'
import { addCartItems } from '../utils/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
const RestaurantCateDescription = ({data2}) => {

let dispatch = useDispatch()
  

    const {description,
        imageId,name,defaultPrice,price

        } = data2.card.info
    

   
    
  return (
    <div className='flex  justify-between gap-8  my-6 p-5 border-b items-center w-full'>
    <div className='w-9/12 '>
        <h1 className='font-bold '>{name}</h1>
        <div className='text-sm '>{description}</div>
        <div>Rs:- {price ? price/100 : defaultPrice/100}</div>

    </div >
    <div className='w-3/12'>
    <button className='absolute mt-32 ml-11 w-20 text-green-500 font-bold hover:bg-slate-200 bg-orange-100 p-2 rounded-md' onClick={()=>{
    
         dispatch(addCartItems(data2))

    }}>Add! </button>

       <img className='w-40 h-36 m-auto rounded-xl' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' + imageId}></img>

    </div>
    </div>
  )
}

export default RestaurantCateDescription
