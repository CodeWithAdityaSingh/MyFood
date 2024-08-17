import React, { useEffect } from 'react'
import Cards from './Cards'
import { useDispatch } from 'react-redux'
import { addFilterinfo, addResInfo } from '../utils/ResDataSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardsContainer = () => {

  let dispatch = useDispatch()

  let selector2 = useSelector((store) => store.resData.filterResInfo)
    

 useEffect(()=>{
    
    fech()
 },[])

 let fech = async ()=>{

  let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

  let json = await data.json()

  dispatch(addResInfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))

  dispatch(addFilterinfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))

  console.log(json);
  
}

if(!selector2) return
  return (
    <div className='my-4  flex flex-wrap justify-end '>
     {

      selector2.map((data)=> <Link to={'/menu/' + data.info.id} key={data.info.id} > <Cards  data = {data} /></Link>)
     }
    </div>
  )
}

export default CardsContainer
