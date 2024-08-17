import React, { useEffect, useState } from 'react'
import RestaurantCategory from './RestaurantCategory';
import { useParams } from 'react-router-dom';
import CardPopUp from './CardPopUp';
import { useSelector } from 'react-redux';


const RestaurantDescription = () => {

  let[menuData,setMenuData] = useState(null)
  let selector = useSelector((store)=> store.cart.cartItems)

  let {id} = useParams()
  console.log(id);
  

 
  


  useEffect(()=>{
    fech()
  },[])
  
  let fech = async ()=>{
    let data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2058593&lng=72.86612&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER')

    let json = await data.json()
    setMenuData(json.data.cards)

 
    
  }

  if(!menuData) return

  console.log(menuData);

  const {
    
cloudinaryImageId
,name,
    costForTwoMessage,
    avgRating,
    cuisines,sla,
    locality
    

    
    
    } = menuData[2].card.card.info

   

    const{deliveryTime, minDeliveryTime, maxDeliveryTime} = sla

    const {itemCards} = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    let items =  menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items)=> items.card.card['@type'] = 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory').splice(1)


    
   


  return (
    <div className='h-screen w-screen flex flex-col items-center mt-44 relative  '> 
     <div className='w-6/12 text-left '>
      <h1 className='font-bold text-3xl'>{name}</h1>
      <div className=' border-2  rounded-3xl my-3 shadow-2xl shadow-black p-4 font-semibold '>
        <span>⭐{avgRating}(100+ rating)</span>
        <span> • Rs{costForTwoMessage}</span>
        <div className='ml-5 text-orange-600 font-semibold decoration-orange-600 decoration-dashed'>{cuisines.join(',')}</div>
        <div className='font-semibold ml-5 my-5'>{minDeliveryTime}-{maxDeliveryTime} Min</div>
        <div className='w-full border'></div>
        <div className='flex items-center font-bold text-xl'>
        <img className='w-12 m-5 rounded-full' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}></img>
        <div>{locality}</div>
        </div>
      </div>
      </div>
     <div className='font-bold text-xl mt-3'>Menu</div>
      {

        items.map((items,index)=>  <RestaurantCategory key={index} data = {items.card.card.title} data2 = {items}/>)
      }

     {
      selector.length && <CardPopUp/>
     }
    </div>
  )
}

export default RestaurantDescription
