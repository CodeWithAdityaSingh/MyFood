import React, { useState } from 'react'
import RestaurantCateDescription from './RestaurantCateDescription'

const RestaurantCategory = ({data,data2}) => {

  let  [toggle,setToggle] = useState(false)


  

  const {
    itemCards
    } = data2.card.card

  // console.log(data2);


    if(!itemCards) return

   


    
  return (
    <div className='border shadow-md  rounded-md  w-6/12 my-3 p-3 '>
       
      <div className='w-full flex justify-between cursor-pointer' onClick={()=>{
          setToggle(!toggle)
      }}>
         <div className='font-bold text-xl'>{data}({data.length})</div>
         <div>⬇️</div>
      </div>

     
       {

       toggle&& itemCards .map((items)=>{
           return   <RestaurantCateDescription  data2  = {items}/>
        })
       }
        
    </div>
  )
}

export default RestaurantCategory
