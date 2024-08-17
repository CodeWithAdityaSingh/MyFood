import React from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const ResHeadInfo = () => {

  let selector = useSelector(store => store.resData. filterResInfo)

  if(!selector) return
  return (
   <div className=''>
    {
      selector.length ?  selector.map((items)=> <li className='m-4 font-bold text-xl text-emerald-300 shadow list-none'> Restaurant: {items.info.name}🌟🌟</li> ) :
      <li className='font-bold  text-4xl absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'>Not Available! Right Now</li>
    }
     <div className='flex flex-wrap'>
     {
      selector.map((items,index)=><Link to={'/menu/'+ items.info.id} key={items.info.id}> <Cards  data = {items}/></Link>)
     }
    </div>
   </div>
  )
}

export default ResHeadInfo
