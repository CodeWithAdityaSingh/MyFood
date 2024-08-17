import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCateDescription from './RestaurantCateDescription'
import { removeItems } from '../utils/cartSlice'

const Cart = () => {
    let data = useSelector((store)=> store.cart.cartItems )

    let dispatch = useDispatch()
    
  return !data.length ? <div className='font-bold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> Add Items ! Cart is Empty 📦📦</div> : (
    <div className='w-6/12 m-auto '>
      {

        data.map((element)=>{
          return  (
         <div className='flex'>
           <RestaurantCateDescription data2 = {element}/>
           <div className='flex w-44 rounded-2xl items-center cursor-pointer bg-amber-100 h-8 p-2' onClick={()=>[
                     dispatch(removeItems(element))  


           ]}>➖ Remove Item</div>
         </div>

        )
        })
      } 
    </div>
  )
}

export default Cart
